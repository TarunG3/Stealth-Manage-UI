import { Component, Input } from '@angular/core';
import { Expert } from '../../shared/interfaces';

@Component({
  selector: 'app-stealth-expert-detail',
  imports: [],
  templateUrl: './stealth-expert-detail.component.html',
  styleUrl: './stealth-expert-detail.component.scss'
})
export class StealthExpertDetailComponent {
  @Input() expert!: Expert;
}
