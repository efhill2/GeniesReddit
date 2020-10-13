import { Injectable } from '@angular/core';
import { Posts } from './interfaces/posts';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RedditService {

  constructor(private http:HttpClient) { }

  getPosts () {

    return this.http.get<Posts>('https://www.reddit.com/r/aww/.json')

  }
}
