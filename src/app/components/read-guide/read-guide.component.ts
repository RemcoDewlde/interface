import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GuidesService} from '../../services/guides/guides.service';
import {Guides} from '../../classes/guides/guides';
import {FormBuilder} from '@angular/forms';
import {AuthService} from '../../services/auth/auth.service';
import {User} from '../../classes/user/user';
import {createBrowserLoggingCallback} from '@angular-devkit/build-angular/src/browser';
import {log} from 'util';

@Component({
  selector: 'app-read-guide',
  templateUrl: './read-guide.component.html',
  styleUrls: ['./read-guide.component.scss']
})
export class ReadGuideComponent implements OnInit {

  guide: Guides;
  currentUser: User;
  comments;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private guidesService: GuidesService,
              private formBuilder: FormBuilder,
              private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id') === undefined) {
      // if there is no guide id return to guides home page
      this.router.navigate(['home/guides']);
    } else {
      // get the current guide
      this.guidesService.getGuide(this.route.snapshot.paramMap.get('id')).subscribe((data) => {
        this.guide = data.found;
        this.comments = this.formBuilder.group({
          comment: ''
        });
      });

      // get the current user for posting comments
      this.currentUser = this.authService.currentUserData();
    }
  }

  guideUpdate(commentText: string) {
    const updatedGuide = this.guide;

    const comment = {
      comment: commentText,
      resolved: false,
      userID: this.currentUser._id
    };

    // @ts-ignore
    updatedGuide.comments.push(comment);
    this.guidesService.updateGuide(updatedGuide).subscribe((data) => {
      console.log(data);
      // TODO: make pop-up when done or error
    });
  }

  resolveComment(id) {
    // @ts-ignore
    this.guide.comments = this.guide.comments.filter((obj  ) => {
      if (obj._id === id){
         obj.resolved = !obj.resolved;
      }
      return obj;
    });

    this.guidesService.updateGuide(this.guide).subscribe((data) => {
      console.log(data);
      // TODO: make pop-up when done or error
    });
  }

  deleteComment(id) {
    // @ts-ignore
    this.guide.comments = this.guide.comments.filter((obj) => {
      return obj._id !== id;
    });
    this.guidesService.updateGuide(this.guide).subscribe((data) => {
      console.log(data);
      // TODO: make pop-up when done or error
    });

  }

}
