import { Component, OnInit } from '@angular/core';
import { UsersService} from '../users.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any;
  newuser = {
    users_name:'',
    users_password:'',
    users_status:'',
    users_fullname:'',
    users_phone:'',
    users_email:'',
  }
  constructor(private usersService: UsersService) { }

  ngOnInit() {
  this.getUsers();
  
  }


  async getUsers(){
    this.users= await this.usersService.getAllUsers();
  }

  addUser(){
    console.log(this.newuser);
  }
}
