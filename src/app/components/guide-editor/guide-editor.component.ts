import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {find, pull} from 'lodash';
import {GuidesService} from '../../services/guides/guides.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-guide-editor',
  templateUrl: './guide-editor.component.html',
  styleUrls: ['./guide-editor.component.scss']
})
export class GuideEditorComponent implements OnInit {
  @ViewChild('tagInput') tagInputRef: ElementRef;
  guideForm: any;
  tags: string[] = [];
  error = false;
  editorMode = false;
  guide: any;

  editorStyle = {
    height: '40vh'
  };

  constructor(private formBuilder: FormBuilder,
              private guidesService: GuidesService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.guideForm = this.formBuilder.group({
      guideName: '',
      tag: [],
      description: '',
      editor: '',
    });

    if (this.route.snapshot.paramMap.get('id') === undefined) {
      // if there is no guide id return to guides home page
      this.router.navigate(['home/guides']);
    } else {
      // get the current guide
      this.guidesService.getGuide(this.route.snapshot.paramMap.get('id')).subscribe((data) => {
        this.guide = data.found;
        this.editorMode = true;
        this.guideForm.get('guideName').setValue(this.guide.guideName);
        this.guideForm.get('description').setValue(this.guide.guideDesc);
        this.guideForm.get('editor').setValue(this.guide.guideText);

        // this adds the tags for the form when editing
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < data.found.tags.length; i++) {
          this.addTag(data.found.tags[i]);
        }
      });
    }
  }

  SubmitForm() {
    const guide = {
      form: this.guideForm.value,
      tags: this.tags
    };

    if (this.editorMode === false) {
      this.guidesService.postGuide(guide).subscribe((data) => {
        if (data.ok === 'Guide saved') {
          this.router.navigate([`/home/guides/${data.body._id}`]);
        } else {
          this.error = true;
        }
      });
    } else {
      this.guide.guideName = this.guideForm.value.guideName;
      this.guide.guideDesc = this.guideForm.value.description;
      this.guide.guideText = this.guideForm.value.editor;
      this.guide.tags = this.tags;

      this.guidesService.updateGuide(this.guide).subscribe((data) => {
        this.router.navigate(['home/guides/', this.guide._id]);
      });
    }
  }

  focusTagInput(): void {
    this.tagInputRef.nativeElement.focus();
  }

  onKeyUp(event: KeyboardEvent): void {
    const inputValue: string = this.guideForm.value.tag;
    if (event.code === 'Backspace' && !inputValue) {
      this.removeTag();
      return;
    } else {
      if (event.code === 'Comma' || event.code === 'Space') {
        this.addTag(inputValue);
        this.guideForm.controls.tag.setValue('');
      }
    }
  }

  removeTag(tag?: string): void {
    if (!!tag) {
      pull(this.tags, tag);
    } else {
      this.tags.splice(-1);
    }
  }

  addTag(tag: string): void {
    if (tag[tag.length - 1] === ',' || tag[tag.length - 1] === ' ') {
      tag = tag.slice(0, -1);
    }
    if (tag.length > 0 && !find(this.tags, tag)) {
      this.tags.push(tag);
    }
  }
}
