import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { IsActiveMatchOptions, RouterLink, RouterLinkActive } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@Component({
  selector: 'app-stealth-header',
  imports: [CommonModule, RouterLink, RouterLinkActive, NgbCollapseModule, InlineSVGModule, LazyLoadImageModule],
  templateUrl: './stealth-header.component.html',
  styleUrl: './stealth-header.component.scss'
})
export class StealthHeaderComponent {
  navIsFixed = false;
  fragmentMatch: IsActiveMatchOptions = {
    matrixParams: 'exact',
    queryParams: 'exact',
    paths: 'exact',
    fragment: 'exact',
  };
  isMenuCollapsed = true;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  @HostListener('window:scroll')
  onWindowScroll() {
    const offset: number =
      this.document.documentElement.scrollTop ||
      this.document.body.scrollTop ||
      0;

    if (offset > 100) {
      this.navIsFixed = true;
    } else if (this.navIsFixed && offset < 10) {
      this.navIsFixed = false;
    }
  }
}
