import {Component, OnInit} from '@angular/core';
import {User} from '../../classes/user/user';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user: User = {
    email: '', id: 0, username: ''
  };

  constructor(private authService: AuthService, private router: Router) {
    this.authService.getMe().subscribe((userData) => {
      if (userData !== undefined){
        this.user = userData.user;
      }
    });
  }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/');
    this.user = null;
  }

}
