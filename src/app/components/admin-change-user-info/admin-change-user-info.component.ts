import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user/user.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-admin-change-user-info',
  templateUrl: './admin-change-user-info.component.html',
  styleUrls: ['./admin-change-user-info.component.scss']
})
export class AdminChangeUserInfoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private userService: UserService, private formBuilder: FormBuilder, private router: Router) {
  }

  selectedUser: any;
  userForm: FormGroup;
  success;
  fail;


  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      username: '',
      email: '',
      active: '',
      role: ''
    });

    if (this.route.snapshot.paramMap.get('id')) {
      const id = this.route.snapshot.paramMap.get('id');
      this.userService.getUser(id).subscribe((user) => {
        this.selectedUser = user;

        this.userForm.setValue({
          username: this.selectedUser.username,
          email: this.selectedUser.email,
          active: this.selectedUser.active,
          role: this.selectedUser.role
        });
      });
    } else {
      this.router.navigate(['/admin/users']);
    }
  }


  saveUserInfo(userinfo){
    const newUserDetails = this.selectedUser;
    newUserDetails.username = userinfo.username;
    newUserDetails.email = userinfo.email;
    newUserDetails.active = userinfo.active;
    newUserDetails.role = userinfo.role;

    this.userService.updateUser(newUserDetails).subscribe((data) => {
      if (data.found) {
        this.success = true;
      } else {
        this.fail = true;
      }
    });
  }
}
