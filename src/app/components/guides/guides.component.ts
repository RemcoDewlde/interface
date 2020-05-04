import {Component, OnInit} from '@angular/core';
import {GuidesService} from '../../services/guides/guides.service';
import {Guides} from '../../classes/guides/guides';
import {Router} from '@angular/router';

@Component({
  selector: 'app-guides',
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.scss']
})
export class GuidesComponent implements OnInit {

  constructor(private guidesService: GuidesService, private router: Router) {
  }

  guides: Guides[];

  ngOnInit(): void {
    this.guidesService.getAllGuides().subscribe((data) => {
      this.guides = data;

    });
  }

  searchGuide(searchTerm){
    const search = {search: searchTerm};
    if (search.search != null) {
      this.guidesService.searchGuide(search).subscribe((data) => {
        console.log(data);
        this.guides = data.found;
      });
    }
  }

  goToGuide(e){
    console.log(e);
  }

  goToGuideEditor(){
    this.router.navigate(['home/guideeditor']);
  }

}
