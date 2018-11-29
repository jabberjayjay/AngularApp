import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  
  users: User[];
  loaded : boolean = false;
  showExtended: boolean = false;
  enableAdd: boolean = true;
  currentClasses = {};
  currentStyles = {};


  constructor() { }

  ngOnInit() {
    console.log('init...');
    
      this.users = [
        {
          firstName: 'John',
          lastName: 
          'Doe',
          age: 30,
          address: {
            street : '50 main st',
            city : 'Boston',
            state: 'MA'
          },
          image: 'https://placeimg.com/300/300/people/3',
          isActive : true,
          balance: 100,
          registered: new Date('01/02/2018 08:30:00')
        },
        {
          firstName: 'Kevin',
          lastName:  'Johnson',
          age: 34,
          address: {
            street : '20 School st',
            city : 'Lynn',
            state: 'MA'
          },
          image: 'https://placeimg.com/300/300/people/1',
          isActive : false,
          balance: 200,
          registered: new Date('03/11/2018 08:30:00')
        },
        {
          firstName: 'Karen',
          lastName: 'Williams',
          age: 26,
          address: {
            street : '55 Mill St',
            city : 'Miami',
            state: 'FL'
          },
          image: 'https://placeimg.com/300/300/people/2',
          isActive : false,
          balance: 50,
          registered: new Date('11/02/2016 10:30:00')
        }
  
      ];
      // this.addUser({
      //   firstName: 'David',
      //   lastName: 'Jackson',
       
      // })
      this.loaded = true;
    
   this.showExtended = true;

   this.setCurrentClasses();
   this.setCurrentStyles();
  }

  addUser(user: User){
    this.users.push(user);
  }

  setCurrentClasses(){
    this.currentClasses = {
    'btn-success' : this.enableAdd,
    'big-text' : this.showExtended
    }
  }

  setCurrentStyles(){
this.currentStyles = {
  'padding-top' : this.showExtended ? '0': '40px',
  'font-size' : this.showExtended ? '' : '40px'
}
  }
}
