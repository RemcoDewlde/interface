import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-homewelkom',
  templateUrl: './homewelkom.component.html',
  styleUrls: ['./homewelkom.component.scss']
})
export class HomewelkomComponent implements OnInit {

  currentUser: any;
  apiStatus: any;
  public now: Date = new Date();


  constructor(private authService: AuthService, private userService: UserService) {
  }


  ngOnInit(): void {
    this.currentUser = this.authService.currentUserData();
    this.userService.getApiStatus().subscribe((data) => {
      this.apiStatus = data;
    });


  }

}
