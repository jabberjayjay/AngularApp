import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

//http client returns observable so we need to import it
import { Observable} from 'rxjs';
import { Post } from '../models/Post';
import { newPost } from '../models/Post';


const httpOptions = {
  headers: new HttpHeaders ({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  // postsUrl: string = 'https://jsonplaceholder.typicode.com/posts';
  postsUrl: string = 'http://localhost:8081/api/posts/';

  constructor(private http: HttpClient) {

  }

    getPosts() : Observable<any> 
    {
      return this.http.get(this.postsUrl);
      
      // return this.http.get<Post[]>("http://localhost:8081/api/posts");
      
    }

    savePost(title: string, content: string): Observable<any> {
      // returns url, post, and http action selection
      console.log("savePost reached"+title + content);

      const newEntry: newPost = {title: title, content: content};

      return this.http.post("http://localhost:8081/api/posts/", newEntry);

    }

    updatePost(id: string, title: string, content: string) : Observable<any> {

      const newEntry: newPost = {title: title, content: content};


      console.log("postservie " +id + title + content);
      // newEntry.body = body;
      // newEntry.title = title;

      return this.http.put<newPost>("http://localhost:8081/api/posts/"+id, newEntry);
      
      // const url = `${this.postsUrl}/${post.id}`;
      // console.log("updatePost "+url);
      // return this.http.put<Post>(url, post, httpOptions);

    }

    removePost(id : String) : Observable<any> {
      // const id = typeof post === 'number' ? post: post.id;
      // const url = `${this.postsUrl}/${id}`;
      
      console.log("remove post"+id);
      return this.http.delete("http://localhost:8081/api/posts/"+id);

    }

    getPost(stringId: string) : Observable<any> {

      //const url = `${this.postsUrl}/${stringId}`;
      console.log(stringId);
      console.log(this.postsUrl+stringId);
      return this.http.get("http://localhost:8081/api/posts/"+stringId);
      
      

    }
    

    

   
}
