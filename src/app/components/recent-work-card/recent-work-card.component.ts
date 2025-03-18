import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InlineSVGModule } from 'ng-inline-svg';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { LayoutModule } from '@angular/cdk/layout';
@Component({
  selector: 'app-recent-work-card',
  imports: [CommonModule, RouterModule, InlineSVGModule, LazyLoadImageModule, LayoutModule],
  templateUrl: './recent-work-card.component.html',
  styleUrl: './recent-work-card.component.scss'
})
export class RecentWorkCardComponent {
  @Input() site: any;
  @Output() selected: EventEmitter<string> = new EventEmitter<string>();
}
