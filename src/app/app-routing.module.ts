import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GroupsComponent} from './groups/groups.component';
import {GroupComponent} from './group/group.component';

const routes: Routes = [
  {path: 'groups', component: GroupsComponent},
  {path: 'groups/:id', component: GroupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
