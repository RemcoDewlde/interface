import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // tslint:disable-next-line:ban-types
  form;
  error: any;
  loading = false;

  constructor(private authService: AuthService, private router: Router) {
    this.form = {
      username: '',
      password: '',
      email: '',
      repeat_password: '',
    };
  }

  ngOnInit(): void {
  }

  onSubmit(formData) {
    this.loading = true;
    this.authService.postRegisterUser(formData).subscribe((data) => {
      this.router.navigate(['/login']);
      this.loading = false;

    }, (err) => {
      this.loading = false;
      this.error = err.error.message;
    });
  }

}
