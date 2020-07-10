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
  openedError: boolean;
  errorMessage: any;


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
      old_password: passwords.oldPassword,
      new_password: passwords.password,
      repeat_password: passwords.repeatPassword,
      userID: this.currentUser._id
    };

    this.authService.resetPassword(userData).subscribe((result) => {
      this.opened = true;
    }, error => {
      this.errorMessage = error.error.message;
      this.openedError = true;
    });
  }

  changeUserinfo(userinfo) {
    const newUserDetails = this.currentUser;
    newUserDetails.username = userinfo.username;
    newUserDetails.email = userinfo.email;
    this.userService.updateUser(newUserDetails).subscribe((data) => {
      if (data.found) {
        this.opened = true;
      }
    });
  }
}
