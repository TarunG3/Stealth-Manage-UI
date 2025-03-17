import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BehaviorSubject, delay, of } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private tagSubscriber: BehaviorSubject<any> = new BehaviorSubject(undefined);

  constructor(private titleService: Title) {}

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  Toast: any = Swal.mixin({
    toast: true,
    position: 'top-right',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: false,
  });

  get tagInformation() {
    return this.tagSubscriber.asObservable();
  }

  set tagInformation(data: any) {
    this.tagSubscriber.next(data);
  }

  cronSubscirption(time = 7000) {
    return of([]).pipe(delay(6000));
  }
}
