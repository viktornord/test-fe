import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GroupsComponent } from './groups/groups.component';
import {GroupService} from './groups/group.service';
import {HttpClientModule} from '@angular/common/http';
import { GroupComponent } from './group/group.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    GroupsComponent,
    GroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [GroupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
