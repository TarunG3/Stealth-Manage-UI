import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { StealthHeaderComponent } from "./components/stealth-header/stealth-header.component";
import { StealthFooterComponent } from "./components/stealth-footer/stealth-footer.component";
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { Subject, filter, map, takeUntil } from 'rxjs';
import { ApiService } from './shared/services/api.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    StealthHeaderComponent,
    StealthFooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  onDestroy: Subject<void> = new Subject<void>();
  title1 = 'Stealth-Manage-UI';

  constructor(
    private router: Router,
    private meta: Meta,
    private title: Title,
    public api: ApiService,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: any,
  ) { }

  ngOnInit() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let route: ActivatedRoute = this.router.routerState.root;
          let routeTitle = '';
          while (route?.firstChild) {
            route = route.firstChild;
          }
          if (route?.snapshot.data['title']) {
            routeTitle = route.snapshot.data['title'];
          }
          if (route?.snapshot.data['description']) {
            this.meta.updateTag(
              {
                name: 'description',
                content: route.snapshot.data['description'],
              }
            );
          }

          if (route?.snapshot.data['keywords']) {
            this.meta.updateTag(
              {
                name: 'keywords',
                content: route.snapshot.data['keywords'],
              }
            )
          }

          if (route?.snapshot.data?.['siteData']?.['meta']) {

            routeTitle = route.snapshot.data['siteData']['meta']['title'];
            this.meta.updateTag(
              {
                name: 'description',
                content: route.snapshot.data['siteData']['meta']['description'],
              }
            );

            this.meta.updateTag(
              {
                name: 'keywords',
                content: route.snapshot.data['siteData']['meta']['keyword'],
              }
            )
          }

          if (route?.snapshot.data?.['siteData']?.['metaData']) {
            routeTitle = route.snapshot.data['siteData']['metaData']['title'];
            this.meta.updateTag(
              {
                name: 'description',
                content: route.snapshot.data['siteData']['metaData']['description'],
              }
            );

            this.meta.updateTag(
              {
                name: 'keywords',
                content: route.snapshot.data['siteData']['metaData']['keyword'],
              }
            )
          }

          return routeTitle;
        }),
        takeUntil(this.onDestroy.asObservable())
      )
      .subscribe((title: string) => {
        this.setCanonicalURL();

        if (title) {
          this.title.setTitle(`${title}`);
        }
      });
  }

  setCanonicalURL() {
    // Remove Existing links
    const els = this.document.querySelectorAll("link[rel='canonical']");
    for (let i = 0, l = els.length; i < l; i++) {
      const el = els[i];
      el.remove();
    }

    // then add new ones
    const canURL = this.document.URL.replace('http://', 'https://');
    const link: HTMLLinkElement = this.document.createElement('link');
    link.setAttribute('rel', 'canonical');
    this.document.head.appendChild(link);
    link.setAttribute('href', canURL);
  }

  ngOnDestroy() {
    this.onDestroy.next();
    this.onDestroy.complete();
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      import('wow.js').then(wow => {
        const WOW = wow.default;
        return new WOW().init();
      });
    }
  }
}
