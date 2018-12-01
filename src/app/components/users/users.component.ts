import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';

import{UserService} from '../../services/user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: User = {
    firstName: '',
    lastName: '',
    // age: null,
    // address: {
    //   street: '',
    //   city: '',
    //   state: ''}
    email: ''



  }
  users: User[];
  loaded: boolean = false;
  showExtended: boolean = true;
  enableAdd: boolean = false;
  showUserForm: boolean = false;

  // viewchild must be passed the ngform name from html to pass valid object value
  @ViewChild('userForm') form: any;
  data:any;
  // currentClasses = {};
  // currentStyles = {};


  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.getData().subscribe(data => {
      console.log(data);

    });
    console.log('Fetching users from service');


    // asynchronous arrow function (stream)
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    })
    // this.addUser({
    //   firstName: 'David',
    //   lastName: 'Jackson',

    // })
    

    //  this.showExtended = true;

    //  this.setCurrentClasses();
    //  this.setCurrentStyles();
  }

  // addUser(user: User) {
  //   // unshift adds to the beginning of the array
  //   this.users.unshift(this.user);
  //   // uses todays date as registration date
  //   this.user.registered = new Date();

  //   this.users.unshift(this.user);

  //   this.user = {
  //     firstName: '',
  //     lastName: '',
  // age: null,
  // address: {
  //   street: '',
  //   city: '',
  //   state: ''}
  //     email: ''



  //   }
  // }


  toggleHide(user: User) {
    user.hide = !user.hide;
  }


  onSubmit({ value, valid }: { value: User, valid: boolean }) {

    if (!valid) {
      console.log('Form is not valid');

    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

      // passing in value object from the form
      this.userService.addUser(value);

      // reset the form
      this.form.reset();
    }
    
  }

  // fireEvent(e) {
  //   console.log(e.target.value);
  //   console.log(e.type);
  // }

  //   setCurrentClasses(){
  //     this.currentClasses = {
  //     'btn-success' : this.enableAdd,
  //     'big-text' : this.showExtended
  //     }
  //   }

  //   setCurrentStyles(){
  // this.currentStyles = {
  //   'padding-top' : this.showExtended ? '0': '40px',
  //   'font-size' : this.showExtended ? '' : '40px'
  // }
  // }
}
