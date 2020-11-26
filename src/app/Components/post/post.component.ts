import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "../auth/auth.service";
import { Post } from "./post.model";
import { PostsService } from "./posts.service";
import { Location } from "@angular/common";
import { exhaustMap, take } from "rxjs/operators";
import { Subscription } from "rxjs";

@Component({
  selector: "app-post-component",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"],
})
export class PostComponent implements OnInit {
  isLoading = false;
  postId: string;
  post: Post;
  userSubs: Subscription;
  userIsAuthenticated = false;
  userId: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private location: Location,
    private postsService: PostsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    setTimeout("post is live", );
    this.isLoading = true;
    if (!this.post) {
      this.route.paramMap.pipe(take(1)).subscribe((param) => {
        this.postId = param.get("id");
      });
      this.postsService.getPost(this.postId).subscribe((postData) => {
        this.isLoading = false;
        this.post = {
          id: postData._id,
          title: postData.title,
          content: postData.content,
          imagePath: postData.imagePath,
          creator: postData.creator,
          dateCreated: postData.dateCreated,
        };
      });
    }
    this.userSubs = this.authService.user.subscribe((user) => {
      if (!user) {
        return;
      }
      this.userIsAuthenticated = !!user;
      this.userId = user.id;
    });
  }

  goBack() {
    this.location.back();
  }

  onDelete(postId: string) {
    this.isLoading = true;
    this.postsService.deletePost(postId).subscribe(
      (res) => {
        this.goBack();
      },
      () => {
        this.isLoading = false;
      }
    );
  }
}
