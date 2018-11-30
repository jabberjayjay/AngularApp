import { Component, OnInit } from '@angular/core';
import { Statement } from '@angular/compiler';

import {User} from '../../models/User';

// decorator add info
@Component ({

  selector: 'app-user',
  templateUrl: './user.component.html',
  //template: '<h2> John Doe </h2>'
  styleUrls: ['./user.component.css'],





  // styles: [
  //   'h2 { color: blue} '
  // ]

})

export class UserComponent implements OnInit { 

// export makes it available outside of the file
user: User;




constructor() {

 
}

ngOnInit(){
  this.user = {
    firstName: 'John',
    lastName: 
    'Doe',
    email: 'john@gmail.com'
  }
}

sayHello(){
  console.log('Hello ${this.firstName}');
  // console.log('hello ' + )   //same thing as concatentation
}



}

