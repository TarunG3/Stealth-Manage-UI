import { Component, ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { Portfolio, PropertyDetail } from '../../shared/interfaces/portfolio.interface';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { ApiService } from '../../shared/services/api.service';
import { map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ScreenType } from '../../shared/utils';
import { HttpClient } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgbCarouselModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { LazyLoadImageModule } from 'ng-lazyload-image';

let googleClientLoaded = false;
@Component({
  selector: 'app-stealth-portfolio-detail',
  imports: [CommonModule, InlineSVGModule, GoogleMapsModule, NgbCollapseModule, NgbCarouselModule, LazyLoadImageModule],
  templateUrl: './stealth-portfolio-detail.component.html',
  styleUrl: './stealth-portfolio-detail.component.scss'
})
export class StealthPortfolioDetailComponent {
  property!: PropertyDetail;
  portfolios: Portfolio[] = [];
  isLg = null;
  screen$: Observable<ScreenType> = this.getScreen();

  apiLoaded$!: Observable<boolean>;
  center: google.maps.LatLngLiteral = { lat: 28.47707, lng: -81.4549 };
  zoom = 16;
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPositions: google.maps.LatLngLiteral[] = [this.center];

  @ViewChild('modal', { static: true }) modal?: ElementRef;

  promotionData: any;

  constructor(
    private cdr: ChangeDetectorRef,
    private activatedRoute: ActivatedRoute,
    private breakpointObserver: BreakpointObserver,
    private api: ApiService,
    private httpClient: HttpClient
  ) {}

  async ngOnInit(): Promise<void> {
    this.apiLoaded$ = googleClientLoaded
      ? of(true)
      : this.httpClient
          .jsonp(
            `https://maps.googleapis.com/maps/api/js?key=AIzaSyD3KhWFTr0HhBrTSX0bpNipKO0Z1t83yuM`,
            'callback'
          )
          .pipe(
            map(() => {
              return true;
            }),
            catchError(() => {
              return of(false);
            }),
            tap(isLoaded => (googleClientLoaded = isLoaded))
          );

    this.activatedRoute.data.subscribe((res: any) => {
      this.property = res['siteData'];

      this.api.getPromotion({ type: this.property?.['_id'] }).subscribe(res => {
        if (res['status']) {
          this.promotionData = res['data']['promotion'];

          let from = new Date(this.promotionData.dateRange.start).getTime(); // -1 because months are from 0 to 11
          let to = new Date(this.promotionData.dateRange.end).getTime();
          let check = new Date().getTime();

          if (check > from && check < to) {
            this.modal.nativeElement.click();
          }
        }
      });
      this.center = {
        lat: this.property?.['location'][0],
        lng: this.property?.['location'][1],
      };
      this.markerPositions = [this.center];

      this.getProperties();
    });

    const lg = '(min-width: 1200.99px)';
    const md = '(max-width: 1200.98px)';
    this.breakpointObserver
      .observe([lg, md])
      .pipe(untilDestroyed(this))
      .subscribe({
        next: (result: any) => {
          if (result.breakpoints[md]) {
            return this.formatPropertiesForMD();
          }

          if (result.breakpoints[lg]) {
            return this.formatPropertiesForLG();
          }

          this.cdr.markForCheck();
        },
      });
  }

  formatPropertiesForMD() {
    if (this.isLg === false) {
      return;
    }

    this.isLg = false;
  }

  formatPropertiesForLG() {
    // If it was previously LG then just return
    if (this.isLg === true) {
      return;
    }

    this.isLg = true;
  }

  getScreen(): Observable<ScreenType> {
    return currentScreenSize(this.breakpointObserver).pipe(
      map(size => {
        switch (size) {
          case 'sm':
          case 'xs':
            return 'sm';
          case 'xxxl':
          case 'xxl':
          case 'xl':
          case 'qxl':
            return 'lg';
          case 'md':
          case 'lg':
            return 'md';
        }
      })
    );
  }

  getProperties() {
    this.api.getWorks({ pagination: false }).subscribe(res => {
      if (res['status']) {
        let filterData = res['data']['work'].filter(
          res => res.slug !== this.property.slug
        );

        this.screen$.subscribe(res => {
          let parseData = JSON.parse(JSON.stringify(filterData));

          if (res === 'sm') {
            parseData.length = 4;
            this.portfolios = this.toMatrix(parseData, 1);
          } else if (res === 'md') {
            this.portfolios = this.toMatrix(filterData, 2);
          } else {
            this.portfolios = this.toMatrix(filterData, 3);
          }
        });
      }
    });
  }

  toMatrix = (arr: any[], width: number) =>
    arr.reduce(
      (rows: any[], key: any, index: number) =>
        (index % width == 0
          ? rows.push([key])
          : rows[rows.length - 1].push(key)) && rows,
      []
    );
  }

function untilDestroyed<StealthPortfolioDetailComponent extends StealthPortfolioDetailComponent>(arg0: this): import("rxjs").OperatorFunction<import("@angular/cdk/layout").BreakpointState, unknown> {
  throw new Error('Function not implemented.');
}


function currentScreenSize(breakpointObserver: BreakpointObserver) {
  throw new Error('Function not implemented.');
}
