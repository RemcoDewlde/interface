import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {find, pull} from 'lodash';
import {GuidesService} from '../../services/guides/guides.service';


@Component({
  selector: 'app-guide-editor',
  templateUrl: './guide-editor.component.html',
  styleUrls: ['./guide-editor.component.scss']
})
export class GuideEditorComponent implements OnInit {
  @ViewChild('tagInput') tagInputRef: ElementRef;
  guideForm: any;
  tags: string[] = [];

  editorStyle = {
    height: '40vh'
  };

  constructor(private formBuilder: FormBuilder, private guidesService: GuidesService) {
  }

  ngOnInit(): void {
    this.guideForm = this.formBuilder.group({
      guideName: '',
      tag: [],
      description: '',
      editor: '',
    });
  }

  SubmitForm(){
    const guide = {
      form: this.guideForm.value,
      tags: this.tags
    };

    this.guidesService.postGuide(guide).subscribe((data) => {
      console.log(data);
    });

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
