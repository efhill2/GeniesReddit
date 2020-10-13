import { Component, OnInit } from '@angular/core';
import { Posts } from '../interfaces/posts';
import { RedditService } from '../reddit.service';

@Component({
  selector: 'app-posts-view',
  templateUrl: './posts-view.component.html',
  styleUrls: ['./posts-view.component.css']
})
export class PostsViewComponent implements OnInit {

  posts: Posts;

  constructor(private redditService: RedditService) { }

  ngOnInit(): void {

    this.redditService.getPosts().subscribe(

      (data: Posts) =>
        
        this.posts = data
       

    );

  }

}
