import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GoatCampaignService {


  constructor(private http: HttpClient) { }

  getAccessToken() {
    return this.http.post(environment.GOAT_CAMPAIGN_BASE_URL + 'access-token', {
      tenantId: environment.GOAT_CAMPAIGN_tenantId,
      secretKey: environment.GOAT_CAMPAIGN_secretKey
    })
  }

  sendEmail(body: any) {

    this.getAccessToken().subscribe({
      next: (res: any) => {

        if (res['status']) {

          this.http.post(environment.GOAT_CAMPAIGN_BASE_URL + 'mail/send', body, {
            headers: {
              Authorization: `Bearer ${res['data']['tenantToken']}`
            }
          }).subscribe()
        }
      },
      error: (e) => console.error(e),
    })
  }

}
