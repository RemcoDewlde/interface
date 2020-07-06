import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {AuthService} from '../../services/auth/auth.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(private userService: UserService, private authService: AuthService, private formBuilder: FormBuilder) {
  }

  currentUser: any;
  userStatus: string;
  passwordForm: any;
  userForm: any;
  opened = false;


  ngOnInit(): void {
    this.currentUser = this.authService.currentUserData();
    if (this.currentUser.active === true) {
      this.userStatus = 'Activated';
    } else {
      this.userStatus = 'Not Activated';
    }
    this.passwordForm = this.formBuilder.group({
      oldPassword: '',
      password: '',
      repeatPassword: ''
    });

    this.userForm = this.formBuilder.group({
      username: this.currentUser.username,
      email: this.currentUser.email,
    });

  }

  changePassword(passwords) {
    const userData = {
      oldPassword: passwords.oldPassword,
      newPassword: passwords.password,
      repeatPassword: passwords.repeatPassword,
      userID: this.currentUser._id
    };

    this.authService.resetPassword(userData).subscribe((data) => {
      console.log(data);
    });
  }

  changeUserinfo(userinfo) {
    const newUserDetails = this.currentUser;
    newUserDetails.username = userinfo.username;
    newUserDetails.email = userinfo.email;
    this.userService.updateUser(newUserDetails).subscribe((data) => {
      if (data.found.length === 1) {
        this.opened = true;
      }
    });
  }
}
