import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import { AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  collapsed: any;
  currentUser: any;
  isAdmin = false;
  env = environment.menuItems;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.collapsed = false;
    this.currentUser = this.authService.currentUserData();
    if (this.currentUser.role === 'admin'){
      this.isAdmin = true;
    }
  }

}
