import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ApiService } from '../../../shared/services/api.service';

@Component({
  selector: 'app-three-parts',
  imports: [CommonModule, LazyLoadImageModule],
  templateUrl: './three-parts.component.html',
  styleUrl: './three-parts.component.scss'
})
export class ThreePartsComponent {
  constructor(public api: ApiService) {}

  ngOnInit(): void {
    this.api.getCommitments().subscribe((res: any) => {
      
      if (res['data']['section']) {
        this.api.commitmentData = res['data']['section'];
      }
    });
  }
}
