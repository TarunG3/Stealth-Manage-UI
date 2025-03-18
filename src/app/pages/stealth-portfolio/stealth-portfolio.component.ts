import { Component } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { RecentWorkCardComponent } from '../../components/recent-work-card/recent-work-card.component';
import { CommonModule } from '@angular/common';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-stealth-portfolio',
  imports: [CommonModule, RecentWorkCardComponent, LazyLoadImageModule, LayoutModule, RouterModule, InlineSVGModule, NgbCarouselModule],
  templateUrl: './stealth-portfolio.component.html',
  styleUrl: './stealth-portfolio.component.scss'
})
export class StealthPortfolioComponent {
  portfolioSites: any[] = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {

    this.getWorks();
  }

  search = {
    pagination: false
  }

  getWorks() {
    this.api.getWorks(this.search)
      .subscribe((data: any) => {
        if (data['status']) {
          this.portfolioSites = data['data']['work']
        }
      })
  }
}
