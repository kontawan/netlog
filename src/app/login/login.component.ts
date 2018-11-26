import { Component, OnInit } from '@angular/core';
import { UsersService} from '../users.service';
import { Router } from '@angular/router';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  users: any;
  error_txt = '';

  constructor(private usersService: UsersService, private router: Router) { }

   ngOnInit() {
     sessionStorage.clear();
     $('.alert').hide('');
  }
  async usersLogin(){
    if (this.username != '' && this.password != ''){
      this.users = await this.usersService.login(this.username,this.password);
    if(this.users != false){

      sessionStorage.setItem('loginuser',JSON.stringify(this.users));
      if(this.users.users_status == 'admin')
      this.router.navigate(['/admin']);
      else  if(this.users.users_status == 'user')
      this.router.navigate(['/user']);
      else{
        this.error_txt = 'Invalid Username or Password';
        $('.alert').show();
      }
          }else{
      this.error_txt = 'Invalid Username or Password';
      $('.alert').show();
    } 

    }else{
      this.error_txt = 'Please enter Username and Password';
      $('.alert').show();
    }
    
  }
}
