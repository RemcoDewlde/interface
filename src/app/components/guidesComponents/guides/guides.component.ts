import {Component, OnInit} from '@angular/core';
import {GuidesService} from '../../../services/guides/guides.service';
import {Guides} from '../../../classes/guides/guides';
import {Router} from '@angular/router';
import {environment} from '../../../../environments/environment';
import {AuthService} from '../../../services/auth/auth.service';

@Component({
  selector: 'app-guides',
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.scss']
})
export class GuidesComponent implements OnInit {

  constructor(private guidesService: GuidesService, private router: Router, private authService: AuthService) {
  }

  guides: Guides[];
  showMakeGuide: boolean;
  user: any;
  isAdmin: boolean;
  deleted: boolean;
  error: boolean;

  ngOnInit(): void {
    this.guidesService.getAllGuides().subscribe((data) => {
      this.guides = data;
    });
    this.showMakeGuide = environment.GuideOption.showToGuideEditorButton;
    this.user = this.authService.currentUserData();
    if (this.user?.role === 'admin') {
      this.isAdmin = true;
    }
  }

  searchGuide(searchTerm) {
    const search = {search: searchTerm};
    if (search.search != null) {
      this.guidesService.searchGuide(search).subscribe((data) => {
        this.guides = data.found;
      });
    }
  }

  goToGuide(id) {
    this.router.navigate(['guides/guides/', id]);
  }

  goToGuideEditor(id) {
    this.router.navigate(['guides/guide/editor/', id]);
  }

  goToEditor(){
    this.router.navigate(['guides/guide/']);
  }

  deleteGuide(id) {
    this.guidesService.deleteGuide(id).subscribe((data) => {
      if (data.success) {
        this.deleted = true;
        this.guidesService.getAllGuides().subscribe((guides) => {
          this.guides = guides;
        });
      } else {
        this.error = true;
      }
    });
  }

}
