import { Component, OnInit } from '@angular/core';

import { Users } from '../Mock-Users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  /*  1> An interface has been defined in assignment/src/app/User.ts which holds all the properties of a given user.
     
    	2> The array of users is defined in assignment/src/app/Mock-Users.ts which holds various dummy users for the implementation
        as mentioned in the given question.
      
      3> This has been done in order to maintain the security of the code.
    
      4> In order to check the <ng-template> directive, uncomment the line below the declaration of users(Line: 24).
  */

  

   users=Users;
  //  users:undefined;

  
  constructor() { }

  ngOnInit(): void {
  }




}
