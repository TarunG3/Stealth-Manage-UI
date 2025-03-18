import { Component } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { CommonModule } from '@angular/common';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ThreePartsComponent } from "./three-parts/three-parts.component";
import { LogosComponent } from "./logos/logos.component";
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-commitments',
  imports: [CommonModule, LazyLoadImageModule, ThreePartsComponent, LogosComponent, RouterModule, ReactiveFormsModule],
  templateUrl: './commitments.component.html',
  styleUrl: './commitments.component.scss'
})
export class CommitmentsComponent {
  constructor(public api: ApiService) {}

  ngOnInit(): void {
    this.api.getCommitments().subscribe((res: any) => {
      
      if (res['data']['section']) {
        this.api.commitmentData = res['data']['section'];
      }
    });
  }
}
