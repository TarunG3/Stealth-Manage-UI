import { Component } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg-2';

@Component({
  selector: 'app-privacy-policy',
  imports: [CommonModule, InlineSVGModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  constructor(public api: ApiService) { } 
}
