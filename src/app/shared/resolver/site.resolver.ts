import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class siteResolver implements Resolve<any> {

  constructor(private router: Router, private api: ApiService) { }

  handleError(error) {
    this.router.navigateByUrl('/404');
    return throwError(() => error);
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    const siteID = route.paramMap.get('slug');
    if (!siteID) {
      setTimeout(() => {
        this.router.navigate(['/404']);
      }, 500);
    } else {

      return this.api.getWorkById({ workId: siteID }).pipe(
        map(resp => {
          return resp['data']
        }),
        catchError(err => this.handleError(err))
      )
    }
  }
}
