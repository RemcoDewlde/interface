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
  userForm: any;
  opened = false;

  ngOnInit(): void {
    this.currentUser = this.authService.currentUserData();
    if (this.currentUser.active === true) {
      this.userStatus = 'Activated';
    } else {
      this.userStatus = 'Not Activated';
    }

    this.userForm = this.formBuilder.group({
      username: this.currentUser.username,
      email: this.currentUser.email,
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
