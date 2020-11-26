import { Component, OnInit, OnDestroy, Input, APP_INITIALIZER, HostListener } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AuthService } from "../../auth/auth.service";

import * as $ from 'jquery'; 

import { Post } from "../post.model";
import { PostsService } from "../posts.service";

export interface Tile {
  color?: string;
  cols: number;
  rows: number;
  text?: string;
}

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"],
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   { title: "First Post", content: "This is the first post's content" },
  //   { title: "Second Post", content: "This is the second post's content" },
  //   { title: "Third Post", content: "This is the third post's content" }
  // ];
  @Input() neverAuth = false;
  posts: Post[] = [];
  isLoading = false;
  totalPosts = 0;
  postsPerPage = 5;
  currentPage = 1;
  pageSizeOptions = [10, 15, 30];
  userIsAuthenticated = false;
  userId: string;
  private postsSub: Subscription;
  private authStatusSub: Subscription;

  public innerWidth: any;
  public tileRowHeight;
  
  constructor(
    public postsService: PostsService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    
    this.innerWidth = window.innerWidth;
    this.tileRowHeight=  innerWidth < 1100 ? 100: 200;
    this.isLoading = true;

    this.authStatusSub = this.authService.user.subscribe((user) => {
      if (!user) {
        return;
      }
      this.userIsAuthenticated = !!user;
      this.userId = user.id;
    });

    if (this.router.url.includes("/acc-home")) {
      this.postsPerPage = 5;
      this.pageSizeOptions = [5];
      this.postsService.getCreatorPosts(
        this.userId,
        this.postsPerPage,
        this.currentPage
      );
      this.postsSub = this.postsService
        .getPostUpdateListener()
        .subscribe((postData: { posts: Post[]; postCount: number }) => {
          this.isLoading = false;
          this.totalPosts = postData.postCount;
          this.posts = postData.posts;
        });
    } else if (!this.router.url.includes("/acc-home")) {
      this.postsService.getPosts(this.postsPerPage, this.currentPage);
      this.postsSub = this.postsService
        .getPostUpdateListener()
        .subscribe((postData: { posts: Post[]; postCount: number }) => {
          this.isLoading = false;
          this.totalPosts = postData.postCount;
          this.posts = postData.posts;
        });
    }
  }


  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.tileRowHeight=  innerWidth < 1100 ? 100: 200;
  }



  openPost(post: Post) {
    console.log(post);
    this.router.navigate(['/post' , post.id]);
  }

  onDelete(postId: string) {
    this.isLoading = true;
    this.postsService.deletePost(postId).subscribe(
      res => {
        if (this.router.url.includes("/acc-home")) {
          this.postsService.getCreatorPosts(
            this.userId,
            this.postsPerPage,
            this.currentPage
          );
        } else {
          this.postsService.getPosts(this.postsPerPage, this.currentPage);
        }
      },
      () => {
        this.isLoading = false;
      }
    );
  }

  ngOnDestroy() {
    if (this.userIsAuthenticated) {
      this.postsSub.unsubscribe();
      this.authStatusSub.unsubscribe();
    }
  }

  onChangedPage(pageData: PageEvent) {
    if (this.router.url.includes("/acc-home")) {
      this.isLoading = true;
      this.currentPage = pageData.pageIndex + 1;
      this.postsPerPage = pageData.pageSize;
      this.postsService.getCreatorPosts(
        this.userId,
        this.postsPerPage,
        this.currentPage
      );
    } else {
      this.isLoading = true;
      this.currentPage = pageData.pageIndex + 1;
      this.postsPerPage = pageData.pageSize;
      this.postsService.getPosts(this.postsPerPage, this.currentPage);
    }
  }


}
