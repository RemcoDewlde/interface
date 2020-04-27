import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {NavigationEnd, Router} from '@angular/router';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  form: any;
  error: any;


  constructor(private authService: AuthService, private router: Router) {
    if (this.authService.currentUser !== null) {
      this.router.navigate(['/home/welcome']);
    }
  }

  ngOnInit(): void {
    this.form = {
      username: '',
      password: ''
    };
  }

  onSubmit(formData) {
    this.authService.LoginUser(formData)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigateByUrl('/home/welcome');
          window.location.reload();
        },
        error => {
          this.error = error;
        });
  }
}
