import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BugService} from '../../../services/bug/bug.service';
import {User} from '../../../classes/user/user';
import {UserService} from '../../../services/user/user.service';
import {AuthService} from '../../../services/auth/auth.service';

@Component({
  selector: 'app-bug-report-overview',
  templateUrl: './bug-report-overview.component.html',
  styleUrls: ['./bug-report-overview.component.scss']
})
export class BugReportOverviewComponent implements OnInit {

  public bug;
  public postedBy: User;
  public currentUser;

  constructor(private route: ActivatedRoute, private router: Router, private bugService: BugService, private userService: UserService, private authService: AuthService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id === null) {
      this.router.navigate(['/home/bug/']);
    } else {
      this.bugService.getBugReport(id).subscribe((data) => {
        this.bug = data;
        if (data !== null) {
          this.userService.getUser(this.bug.user_id).subscribe((user) => {
            this.postedBy = user;
          });
        } else {
          this.router.navigate(['/home/bug']);
        }
      });
    }
    this.currentUser = this.authService.currentUserData();
  }

  get username() {
    return this.postedBy?.username;
  }

  get userRole() {
    return this.currentUser?.role;
  }

  deleteBug() {
    this.bugService.deleteBugReport(this.bug._id).subscribe((data) => {
      if (data?.success) {
        this.router.navigate(['/home/bug']);
      } else {
        // TODO: add error modal
      }
    });
  }

}
