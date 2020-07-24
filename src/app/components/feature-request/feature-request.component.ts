import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {Feature} from '../../classes/feature/feature';
import {FeatureService} from '../../services/feature/feature.service';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-feature-request',
  templateUrl: './feature-request.component.html',
  styleUrls: ['./feature-request.component.scss']
})
export class FeatureRequestComponent implements OnInit {

  constructor(private authService: AuthService, private featureService: FeatureService, private userService: UserService) {
  }

  open = false;
  currentUser: any;
  feature: Feature;
  features: Feature[];

  ngOnInit(): void {
    this.currentUser = this.authService.currentUserData();
    this.getAllFeatures();

    this.feature = {
      title: '',
      text: '',
      location: '',
      user_id: this.currentUser._id
    };
  }

  submitForm() {
    this.featureService.postFeature(this.feature).subscribe((data) => {
      // TODO: Add success modal
      this.getAllFeatures();
    });
  }

  deleteFeature(id) {
    this.featureService.deleteFeature(id).subscribe((data) => {
      // TODO: Add success modal
      this.getAllFeatures();
    });
  }

  getAllFeatures() {
    this.featureService.getAllFeatureRequests().subscribe((features) => {
      this.features = features;
    });
  }
}

