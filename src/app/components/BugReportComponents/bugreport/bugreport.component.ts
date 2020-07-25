import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth/auth.service';
import {User} from '../../../classes/user/user';
import {BugService} from '../../../services/bug/bug.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bugreport',
  templateUrl: './bugreport.component.html',
  styleUrls: ['./bugreport.component.scss']
})
export class BugreportComponent implements OnInit {

  bugs;
  bug: any;
  open: boolean;
  currentUser: User;

  constructor(private authService: AuthService, private bugService: BugService, private router: Router) {
  }

  ngOnInit(): void {
    this.currentUser = this.authService.currentUserData();
    this.getAllBugs();
    this.bug = {
      what: '',
      severity: 'Medium',
      how: '',
      where: '',
      user: this.currentUser?._id,
      notes: ''
    };
  }

  postForm() {
    this.bugService.postBugReport(this.bug).subscribe((data) => {
      if (data.ok === true) {
        this.getAllBugs();
        // TODO: make success modal
      } else {
        // TODO: make fail modal
      }
    });
  }

  deleteBug(id) {
    this.bugService.deleteBugReport(id).subscribe((data) => {
      if (data?.success) {
        // TODO make success modal
      } else {
        // TODO make fail modal
      }
      this.getAllBugs();
    });
  }

  getAllBugs() {
    this.bugService.getAllBugReports().subscribe((bugs) => {
      this.bugs = bugs;
    });
  }

  goToBugOverviewPage(id) {
    this.router.navigate(['/home/bug/', id]);
  }
}
