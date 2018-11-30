import { Injectable } from '@angular/core';


import { User } from "../models/User";
import { Observable } from 'rxjs';
// of used for http service
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  users: User[];
  data: Observable<any>;

  constructor() {
    this.users = [
      {
        firstName: 'John',
        lastName:
          'Doe',
        email: 'John@gmail.com',
        // age: 30,
        // address: {
        //   street: '50 main st',
        //   city: 'Boston',
        //   state: 'MA'
        // },

        // image: 'https://placeimg.com/300/300/people/3',
        isActive: true,
        // balance: 100,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        // age: 34,
        // address: {
        //   street: '20 School st',
        //   city: 'Lynn',
        //   state: 'MA'
        // },
        email: 'Kevin@gmail.com',
        // image: 'https://placeimg.com/300/300/people/1',
        isActive: false,

        registered: new Date('03/11/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Karen',
        lastName: 'Williams',
        // age: 26,
        // address: {
        //   street: '55 Mill St',
        //   city: 'Miami',
        //   state: 'FL'
        // },
        email: 'Karen@gmail.com',
        // image: 'https://placeimg.com/300/300/people/2',
        isActive: false,

        registered: new Date('11/02/2016 10:30:00'),
        hide: true
      }

    ];
  }

  getData() {
    this.data = new Observable(observer => {

      setTimeout(() => {
        observer.next(1);
      }, 1000);

      setTimeout(() => {
        observer.next(2);
      }, 2000);
      setTimeout(() => {
        observer.next(3);
      }, 3000);

      setTimeout(() => {
        observer.next({name: 'Brad'});
      }, 4000);
    });

    return this.data;
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
