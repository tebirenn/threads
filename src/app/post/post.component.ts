import { Component } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  posts: any[] = [];

  constructor(private dataService: DataService) {
    const data = this.dataService.getPosts();
    this.posts = data.posts;
  }
}
