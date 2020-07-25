import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from '../../../services/user/user.service';
import {User} from '../../../classes/user/user';
import {AuthService} from '../../../services/auth/auth.service';

@Component({
  selector: 'app-bug-card',
  templateUrl: './bug-card.component.html',
  styleUrls: ['./bug-card.component.scss']
})
export class BugCardComponent implements OnInit {

  public bug;
  private postedBy: User;
  private currentUser;

  @Input() set Bug(feature: any) {
    this.bug = feature;
  }

  @Input() set user(userID: any) {
    this.userService.getUser(userID).subscribe((data) => {
      this.postedBy = data;
    });
  }

  @Output() PrimaryButtonEvent = new EventEmitter();
  @Output() SecondaryButtonEvent = new EventEmitter();


  constructor(private userService: UserService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.currentUser = this.authService.currentUserData();
  }

  get username() {
    return this.postedBy?.username;
  }

  get userRole() {
    return this.currentUser?.role;
  }

  primaryButtonPress() {
    this.PrimaryButtonEvent.emit(this.bug._id);
  }

  secondaryButtonPress() {
    this.SecondaryButtonEvent.emit(this.bug._id);
  }
}
