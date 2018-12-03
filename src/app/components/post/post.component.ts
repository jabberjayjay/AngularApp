import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostService } from '../../services/post.service';


import { Post } from '../../models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Post;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
    ) { }

  ngOnInit() {
    // getting id from the route
    const stringId = this.route.snapshot.params['post._id'];

    // getting post from service through id
    this.postService.getPost(stringId).subscribe(post => this.post = post);

    

    console.log(stringId);
  }

}
