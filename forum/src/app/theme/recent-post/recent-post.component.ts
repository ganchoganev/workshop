import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { IPost } from '../../interfaces/post';

@Component({
  selector: 'app-recent-post',
  templateUrl: './recent-post.component.html',
  styleUrls: ['./recent-post.component.scss']
})
export class RecentPostComponent implements OnInit {

  posts: IPost[] | null = null;
  errorFetcingData = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.loadPosts(5).subscribe({
      next: (value) => {
        // debugger
        this.posts = value;
      },
      error: (err) => {
        this.errorFetcingData = true;
        console.error(err);
      }
    })
  }
}