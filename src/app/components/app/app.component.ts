import { Component } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-root',
  template: `
    <h1>Posts</h1>
    <app-post *ngFor="let p of posts" [post]="p"></app-post>
    <h1>Comments</h1>
    <app-comment *ngFor="let c of comments" [comment]="c"></app-comment>
  `,
  styles: [`h1{
    background: silver;
  }`,
  `div{
      margin-bottom: 10px;
      border: 1px solid red;
    }`]
})
export class AppComponent {

  posts: Post[];
  comments: Comment[];
  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(data => this.posts = data);
    this.httpClient
      .get<[]>('https://jsonplaceholder.typicode.com/comments')
      .subscribe(data => this.comments = data)
    ;
  }
}

