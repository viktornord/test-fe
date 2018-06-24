import { Component, OnInit, OnDestroy } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import {GroupService} from '../groups/group.service';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'testApp-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  group;
  showUserForm = false;
  userForm: FormGroup;

  constructor(private groupService: GroupService, private route: ActivatedRoute) {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      age: new FormControl(),
      phone: new FormControl(),
      email: new FormControl('', [Validators.email])
    });
  }

  toggleUserForm(value: boolean) {
    this.showUserForm = value;
    !value && this.userForm.reset();
  }

  ngOnInit() {
    this.route.params.pipe(
      mergeMap(({id}) => this.groupService.get(id))
    ).subscribe(group => this.group = group);
  }

  addUser() {
    const user = this.userForm.getRawValue();
    this.groupService.addMember(this.group._id, user).subscribe(() => {
      this.group.users.push(user);
      this.toggleUserForm(false);
    });
  }


}
