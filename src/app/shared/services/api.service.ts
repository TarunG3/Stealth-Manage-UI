import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { environment } from '../../../environments/environment';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  isPlatformServer = false;
  isPlatformBrowser = false;
  COMMITMENTS = '/api/website/section?type=COMMITMENTS';
  INVESTOR = '/api/website/section?type=INVESTOR';
  CONTACTS = '/api/website/section?type=CONTACT_US_NUMBERS';

  commitmentData: any;
	privacyPolicy:any;
	termsAndConditions:any;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    if (isPlatformServer(this.platformId)) {
      this.isPlatformServer = true;
    }

    if (isPlatformBrowser(this.platformId)) {
      this.isPlatformBrowser = true;
    }

    this.getLegal({type: 'PRIVACY_POLICY' }).subscribe((res:any) => {
      if (res['status']) {
        this.privacyPolicy = res['data']?.['legal']?.[0];
      }
    })

    this.getLegal({ type: 'TERMS_AND_CONDITION' })
    .subscribe((res: any) => {
      if (res['status']) {
        this.termsAndConditions = res['data']?.['legal']?.[0];
      }
    })

  }

  getLegal(search: any) {
		return this.http.get(environment.BASE_URL + '/api/website/legal?' + this.serialize(search))
	}


  getCommitments() {
    return this.http.get(environment.BASE_URL + this.COMMITMENTS);
  }

  getInvestor(){
    return this.http.get(environment.BASE_URL + this.INVESTOR);
  }

  getContacts(){
    return this.http.get(environment.BASE_URL + this.CONTACTS);
  }


  getHome() {
    return this.http.get(environment.BASE_URL + '/api/website/home');
  }

  getWorks(search: any) {
    return this.http.get(
      environment.BASE_URL + '/api/website/works' + `?${this.serialize(search)}`
    );
  }

  getWorkById(search: any) {
    return this.http.get(
      environment.BASE_URL + '/api/website/work/' + search?.workId
    );
  }

  getServices(search: any) {
    return this.http.get(
      environment.BASE_URL +
        '/api/website/services' +
        `?${this.serialize(search)}`
    );
  }

  getBlogs(
    search: any = { pagination: false, type: 'BLOG', page: 1, limit: 1000 }
  ) {
    return this.http.get(
      environment.BASE_URL + '/api/website/activity?' + this.serialize(search)
    );
  }

  getJoinUs(search: any = { pagination: false, page: 1, limit: 1000 }) {
    return this.http.get(
      environment.BASE_URL + '/api/website/join-us?' + this.serialize(search)
    );
  }

  getActivity(id: any) {
    return this.http.get(environment.BASE_URL + `/api/website/activity/${id}`);
  }

  getTeam(
    search: any = { pagination: false, role: 'MEMBER', page: 1, limit: 1000 }
  ) {
    return this.http.get(
      environment.BASE_URL + '/api/website/members?' + this.serialize(search)
    );
  }

  postQuery(data: any) {
    return this.http.post(environment.BASE_URL + '/api/website/query', data);
  }

  getPromotion(search: any) {
    return this.http.get(
      environment.BASE_URL + '/api/website/promotion?' + this.serialize(search)
    );
  }

  fileUpload(data: any) {
    return this.http.post<any>(environment.BASE_URL + '/api/upload/file', data);
  }

  serialize = (obj: Record<string, any>): string => {
    const str: string[] = [];
    for (const p in obj) {
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
      }
    }
    return str.join('&');
  };
}
