import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {User} from '../../classes/user/user';
import {UserService} from '../../services/user/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-admin-user-edit',
  templateUrl: './admin-user-edit.component.html',
  styleUrls: ['./admin-user-edit.component.scss']
})
export class AdminUserComponent implements OnInit {

  constructor(private authService: AuthService, private userService: UserService, private router: Router) {
  }

  private currentUser;
  public users: User[];

  ngOnInit(): void {
    this.currentUser = this.authService.currentUserData();
    this.getUsers();
  }

  getUsers() {
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

  goToUser(id) {
    this.router.navigateByUrl(`/admin/users/${id}`);
  }

  deactivateUser(id) {
    // add modal for success or error
    this.userService.getUser(id).subscribe((user) => {
      user.active = false;
      this.userService.updateUser(user).subscribe(() => {
        this.userService.getAllUsers().subscribe((data) => {
          this.users = data;
        });
      });
    });
  }

}
