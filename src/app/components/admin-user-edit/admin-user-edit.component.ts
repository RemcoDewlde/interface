import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {User} from '../../classes/user/user';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-admin-user-edit',
  templateUrl: './admin-user-edit.component.html',
  styleUrls: ['./admin-user-edit.component.scss']
})
export class AdminUserComponent implements OnInit {

  constructor(private authService: AuthService, private userService: UserService) {
  }

  private currentUser;
  public users: User[];

  ngOnInit(): void {
    this.currentUser = this.authService.currentUserData();
    this.getUsers();
  }

  getUsers(){
    this.userService.getAllUsers().subscribe((users) => {
      this.users = users;
    });
  }

  searchUsers(searchValue) {
    const search = {search: searchValue};
    if (search.search != null) {
      this.userService.searchUser(search).subscribe((users) => {
        this.users = users;
      });
    }
  }

}
