import { Component } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg-2';

@Component({
  selector: 'app-terms-and-condition',
  imports: [CommonModule, InlineSVGModule],
  templateUrl: './terms-and-condition.component.html',
  styleUrl: './terms-and-condition.component.scss'
})
export class TermsAndConditionComponent {
  constructor(public api: ApiService) { }
}
