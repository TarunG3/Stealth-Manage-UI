import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg-2';  

@Component({
  selector: 'app-stealth-footer',
  imports: [CommonModule, InlineSVGModule],
  templateUrl: './stealth-footer.component.html',
  styleUrl: './stealth-footer.component.scss'
})
export class StealthFooterComponent {
  year = new Date().getFullYear();
}
