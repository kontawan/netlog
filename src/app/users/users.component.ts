import { Component, OnInit } from '@angular/core';
import { UsersService} from '../users.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any;
  //edituser: any;
  //deleteuser: any;
  newuser = {
    users_name:'',
    users_password:'',
    users_status:'',
    users_fullname:'',
    users_phone:'',
    users_email:'',
    users_name_old:''
  }
  edituser = this.newuser;
  deleteuser = this.newuser;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  this.getUsers();
  
  }


  async getUsers(){
    this.users= await this.usersService.getAllUsers();
  }

 async addUser(){
    let result = await this.usersService.insertUser
    (this.newuser);
    if(result == true){
      alert('Insert Success.');
        this.getUsers();
    }else{
      alert('Insert Error.!!!');
    }

  }

  editUserM(user){
    this.edituser = JSON.parse (JSON.stringify(user));
    this.edituser.users_password ='';
    this.edituser.users_name_old = user.users_name;
  }

  async editUser(){
    if(this.edituser.users_password =='')
    delete this.edituser.users_password;
   let result = await this.usersService.updateUser
   (this.edituser);
//console.log (result);
   if(result == true){
    alert('Edit user Success.');
      this.getUsers();
  }else{
    alert('Edit user Error.!!!');
  }
  }

  deleteUserM(user){
    this.deleteuser = JSON.parse(JSON.stringify(user));
  }
}
