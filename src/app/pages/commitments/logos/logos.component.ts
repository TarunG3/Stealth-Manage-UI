import { Component } from '@angular/core';
import { CommonService } from '../../../services/common.service';
import { ApiService } from '../../../shared/services/api.service';
import { CommonModule } from '@angular/common';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@Component({
  selector: 'app-logos',
  imports: [CommonModule, LazyLoadImageModule],
  templateUrl: './logos.component.html',
  styleUrl: './logos.component.scss'
})
export class LogosComponent {
  emblaNode: any;
  viewportNode: any;
  emblaApi: any;

  OPTIONS = {
    loop: true,
    duration: 70,
  };

  resetTimer$: any;

  constructor(public api: ApiService, private common: CommonService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (!this.api.isPlatformServer) {
      this.emblaNode = document.querySelector('.embla-testimonial');
      this.viewportNode = this.emblaNode.querySelector(
        '.embla__viewport-testimonial'
      );

      this.emblaApi = EmblaCarousel(this.viewportNode, this.OPTIONS);

      this.slideScroller();
    }
  }

  slideScroller() {
    this.resetTimer$ ? this.resetTimer$.unsubscribe() : false;

    this.resetTimer$ = this.common.cronSubscirption().subscribe((res: any) => {
      this.emblaApi.scrollNext();
      this.slideScroller();
    });
  }

  ngOnDestroy(): void {
    if (this.resetTimer$) {
      this.resetTimer$.unsubscribe();
    }
  }
}
function EmblaCarousel(viewportNode: any, OPTIONS: { loop: boolean; duration: number; }): any {
  throw new Error('Function not implemented.');
}

