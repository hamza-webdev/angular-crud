import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts = [
    {title: 'First Post', content: 'this this content of Post !!! '},
    {title: 'Second Post', content: 'this this content of Post !!! '},
    {title: '3 Post', content: 'this this content of Post !!! '},
    {title: '4  Post', content: 'this this content of Post !!! '}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
