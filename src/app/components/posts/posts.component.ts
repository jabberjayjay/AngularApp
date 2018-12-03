import { Component, OnInit } from '@angular/core';

import { Post } from '../../models/Post';
import { PostService } from '../../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']


})
export class PostsComponent implements OnInit {

  posts: Post[];
  currentPost: Post = {
    id: 0,
    title: '',
    content: ''
  }

  // boolean to check if we are adding a new or updating an existing post
  isEdit: boolean;

  constructor(private postService: PostService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
      console.log("posts page, " + this.route.snapshot.params['post._id']);

    })
  }

  onNewPost(post: Post) {
    this.posts.unshift(post);
    // this.postService.savePost(this.currentPost).subscribe();

  }

  editPost(id: string) {
    // this.currentPost = post;
    this.isEdit = true;
    console.log("pencil says " + id);
    this.postService.getPost(id).subscribe(data => {
      this.currentPost = data;
      console.log("title says " + this.currentPost.title);
      console.log("pencil says " + this.currentPost.content);
      //this.ngOnInit();
    })
  }

  onUpdatedPost(post: Post) {
    this.posts.forEach((cur, index) => {
      if (post.id == cur.id) {
        this.posts.splice(index, 1);
        this.posts.unshift(post);
        this.isEdit = false;
        this.currentPost = {
          id: 0,
          title: '',
          content: ''
        }
      }
    });

  }

  removePost(id: String) {

    console.log("Delete called " + id);
    this.postService.removePost(id).subscribe(() => {
      this.ngOnInit();
    })

    if (confirm('Are You Sure?')) {
      this.postService.removePost(id).subscribe(() => {
        this.ngOnInit();
      })

    }
  }

}
