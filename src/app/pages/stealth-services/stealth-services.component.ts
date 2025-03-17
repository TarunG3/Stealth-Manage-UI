import { Component } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-stealth-services',
  imports: [CommonModule, RouterModule],
  templateUrl: './stealth-services.component.html',
  styleUrl: './stealth-services.component.scss'
})
export class StealthServicesComponent {
  servicesData: any[] = [];

  search = {
    pagination: false
  }

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getServices();
  }

  getServices() {
    this.api.getServices(this.search)
      .subscribe((res: any) => {
        if (res['status']) {
          this.servicesData = res['data']['services']
        }
      })
  }
}
