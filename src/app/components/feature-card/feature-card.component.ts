import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {User} from '../../classes/user/user';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.scss']
})
export class FeatureCardComponent implements OnInit {

  private postedBy: User;
  public feature;
  private currentUser;


  @Input() set Feature(feature: any) {
    this.feature = feature;
  }

  @Input() set user(userID: any) {
    this.userService.getUser(userID).subscribe((data) => {
      this.postedBy = data;
    });
  }

  @Output() PrimaryButtonEvent = new EventEmitter();

  constructor(private userService: UserService, private authService: AuthService) {
    this.currentUser = this.authService.currentUserData();
  }

  ngOnInit(): void {
  }

  get username() {
    return this.postedBy?.username;
  }

  get userRole() {
    return this.currentUser?.role;
  }

  primaryButtonPress() {
    this.PrimaryButtonEvent.emit(this.feature._id);
  }

}
