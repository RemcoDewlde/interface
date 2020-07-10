import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
  }

  @Input() userID: string;

  passwordForm: any;
  currentUser: any;
  opened = false;
  errorMessage: any;
  openedError = false;

  ngOnInit(): void {
    this.currentUser = this.authService.currentUserData();

    this.passwordForm = this.formBuilder.group({
      oldPassword: '',
      password: '',
      repeatPassword: ''
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

}
