import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadImageModule } from 'ng-lazyload-image';
@Component({
  selector: 'app-stealth-about',
  imports: [CommonModule, LazyLoadImageModule],
  templateUrl: './stealth-about.component.html',
  styleUrl: './stealth-about.component.scss'
})
export class StealthAboutComponent {

}
