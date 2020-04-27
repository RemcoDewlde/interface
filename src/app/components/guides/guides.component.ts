import {Component, OnInit} from '@angular/core';
import {GuidesService} from '../../services/guides/guides.service';

@Component({
  selector: 'app-guides',
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.scss']
})
export class GuidesComponent implements OnInit {

  constructor(private guidesService: GuidesService) {
  }

  ngOnInit(): void {
    this.guidesService.getAllGuides().subscribe((data) => {
      console.log(data);
    });
  }

}
