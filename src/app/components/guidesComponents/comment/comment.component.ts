import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {UserService} from '../../../services/user/user.service';
import {AuthService} from '../../../services/auth/auth.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  public User: any;
  public showAdminFeatures: boolean;

  @Input() isAdmin: string;
  @Input() comment: any;

  @Input() set user(userID: any) {
    this.userService.getUser(userID).subscribe((data) => {
      this.User = data;
    });
  }

  @Output() PrimaryButtonEvent = new EventEmitter();
  @Output() SecondaryButtonEvent = new EventEmitter();

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    if (this.isAdmin === 'admin'){
      this.showAdminFeatures = true;
    }
  }

  get userRole() {
    return this.User?.role;
  }

  primaryButtonPress(id) {
    this.PrimaryButtonEvent.emit(id);
  }

  secondaryButtonPress(id) {
    this.SecondaryButtonEvent.emit(id);
  }

}
