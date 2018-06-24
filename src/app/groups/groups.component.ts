import { Component, OnInit } from '@angular/core';
import {GroupService} from './group.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'testApp-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  groups = [];
  showGroupForm = false;
  groupForm: FormGroup;

  constructor(private groupService: GroupService) {
    this.groupForm = new FormGroup({
      name: new FormControl('', [Validators.required])
    });
  }

  toggleGroupForm(value) {
    this.showGroupForm = value;
    !value && this.groupForm.reset();
  }

  ngOnInit() {
    this.groupService.getAll().subscribe(groups => this.groups = groups);
  }

  createGroup() {
    const groupData = this.groupForm.getRawValue();
    this.groupService.create(groupData).subscribe(group => {
      this.groups.push(group);
      this.toggleGroupForm(false);
    });
  }

}
