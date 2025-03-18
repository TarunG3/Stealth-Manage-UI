import { Component } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { CommonModule } from '@angular/common';
import { LazyLoadImageModule } from 'ng-lazyload-image';
@Component({
  selector: 'app-stealth-team',
  imports: [CommonModule, LazyLoadImageModule],
  templateUrl: './stealth-team.component.html',
  styleUrl: './stealth-team.component.scss'
})
export class StealthTeamComponent {
  teamMembers: any[] = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getTeam()
      .subscribe((res: any) => {
        if (res['status']) {
          this.teamMembers = res['data']['users'];
        }
      })
  }
}
