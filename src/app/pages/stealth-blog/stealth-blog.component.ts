import { Component } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { CommonModule } from '@angular/common';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-stealth-blog',
  imports: [CommonModule, LazyLoadImageModule, RouterModule],
  templateUrl: './stealth-blog.component.html',
  styleUrl: './stealth-blog.component.scss'
})
export class StealthBlogComponent {
  blogData: any[] = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs() {
    this.api.getBlogs()
      .subscribe((res: any) => {
        if (res['status']) {
          this.blogData = res['data'];
        }
      })
  }
}
