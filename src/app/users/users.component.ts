import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

   type userobj = {
     name: string,
     username : string, 
     email : string
    };


let users:userobj[];
users=[
{  name: 'Shakti', username:'shakti',email:'shakti@gmail.com' },
{  name: 'Samyak',username:'samyak',email:'samyak@gmail.com' },
{  name: 'Happy',username:'happy',email:'happy@yahoo.com' },
{  name: 'Komal',username:'komal',email:'komal@nagarro.com' },
{  name: 'Priyanka',username:'priyanka',email:'priya@gmail.com' },
{  name: 'Shraddha',username:'shraddha',email:'shraddha@yahoo.com' },
{  name: 'Ujjawal',username:'ujjawal',email:'ujjawal@gmail.com' },
{  name: 'Swadha',username:'swadha',email:'swadha@yahoo.com' }
];


  
  constructor() {}

  ngOnInit(): void {}

}



