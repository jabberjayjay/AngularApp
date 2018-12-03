import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Post } from '../../models/Post';
import { PostService } from '../../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/Forms';
import { Identifiers } from '@angular/compiler';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  //post: Post;
  post:any = [];

  // building emmiter to emit new post
  // @Output() newPost: EventEmitter<Post> = new EventEmitter();
  //@Output() updatedPostForm: EventEmitter<Post> = new EventEmitter();
  @Input() currentPost: Post;
  @Input() isEdit: boolean;

  constructor(private postService: PostService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.postService.getPosts().subscribe(posts => {
      this.post = posts;
      console.log("FORM page, " + this.route.snapshot.params['post._id']);

    })

    this.postService.getPost(this.route.snapshot.params['id'].subscribe(data => {
      this.post=data;
    }  ));
  }

  addPost(title: string, content: string) {

    this.postService.savePost(title, content).subscribe();
    
    console.log("add post: " +title);
    //form.resetForm();


    // if (!title || !body) {
    //   alert('Please add post')
    // } else {
    //   this.postService.savePost({title, content} as Post).subscribe
    //     (post => {
    //       this.newPost.emit(post);
    //     })
    // }
    // console.log(title, body);
  }

  updatePostForm( id:string, title: string, content: string ){
    //console.log("edit page " +this.route.snapshot.params['_id']);

    this.postService.updatePost(id, title, content).subscribe();
    console.log("updateform " +id + title + content);

    // console.log("pencil says " + id);
    // this.postService.getPost(id).subscribe(data => {
    //   this.currentPost = data;
    //   console.log("title says " + this.currentPost.title);
    //   console.log("pencil says " + this.currentPost.body);
    //   this.ngOnInit();
    // })

    //this.router.navigate['/']


    // this.postService.updatePost(this.currentPost).subscribe(post => {
    //   console.log(post);
    // this.isEdit = false;
    // this.updatedPost.emit(post);
    // }  );

  }
}
