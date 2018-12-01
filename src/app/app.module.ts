import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {UserService} from './services/user.service';

import {PostService} from './services/post.service';

import { PostsComponent } from './components/posts/posts.component';

@NgModule({

  // meeting place for all app and services
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    NavbarComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [UserService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
