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
  env = environment;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.collapsed = true;
  }

}
