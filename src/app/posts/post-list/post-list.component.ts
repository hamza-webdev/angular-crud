import {Component, OnDestroy, OnInit} from '@angular/core';
// import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../post.model';
import {PostsService} from '../posts.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  private postsSub: Subscription;
  // on n utilise plus car au declaration para ds construc on use public
  // @Input() posts: Post[] = [];
  // postsSer: PostsService;
  constructor(public postsService: PostsService) {
    // this.postsSer = postsService;  // on n utilise plus car au declaration para ds construc on use public
  }

  ngOnInit(): void {
    this.posts = this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy(): void {
    this.postsSub.unsubscribe();
  }

}
