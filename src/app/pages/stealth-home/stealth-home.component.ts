import { Component, ElementRef, ViewChild } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { Expert } from '../../shared/interfaces';
import { StealthExpertDetailComponent } from '../stealth-expert-detail/stealth-expert-detail.component';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { LayoutModule } from '@angular/cdk/layout';

@Component({
  selector: 'app-stealth-home',
  imports: [CommonModule, NgbCarouselModule, InlineSVGModule, RouterModule, LazyLoadImageModule, LayoutModule],
  templateUrl: './stealth-home.component.html',
  styleUrl: './stealth-home.component.scss'
})
export class StealthHomeComponent {
  bannerImages = [
    '/assets/images/banner_1.jpg',
    '/assets/images/banner_2.jpg'
  ];

  homeData: any;

  properties: any[] = [];
  @ViewChild('modal', { static: true }) modal!: ElementRef;

  promotionData: any;

  constructor(private modalService: NgbModal, public api: ApiService) { }

  ngOnInit(): void {
    this.api.getHome()
      .subscribe((homeData: any) => {
        if (homeData.status) {
          this.homeData = homeData.data.home;
        }
      })

    this.api.getPromotion({ type: '' }).subscribe((res: any) => {
      if (res['status']) {

        this.promotionData = res['data']['promotion']

        let from = new Date(this.promotionData.dateRange.start).getTime();  // -1 because months are from 0 to 11
        let to = new Date(this.promotionData.dateRange.end).getTime();
        let check = new Date().getTime();

        if (check > from && check < to) {
          this.modal.nativeElement.click();
        }
      }
    })

    this.getProperties();
  }

  getProperties() {
    this.api.getWorks({ pagination: false })
      .subscribe((res: any) => {
        if (res['status']) {

          this.properties = res['data']['work'].filter((res: any) => res.isFav).slice(0, 3);
        }
      })
  }

  showExpertDetail(expert: Expert) {
    const modalRef = this.modalService.open(StealthExpertDetailComponent, {
      size: 'detail',
      centered: true,
    });
    modalRef.componentInstance.expert = expert;
  }
}
