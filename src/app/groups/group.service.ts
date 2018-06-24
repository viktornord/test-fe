import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GroupService {

  static BASE_URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  create(group) {

    return this.http.post(`${GroupService.BASE_URL}/groups`, group);
  }

  getAll() {

    return this.http.get<{}[]>(`${GroupService.BASE_URL}/groups`);
  }

  get(id) {

    return this.http.get(`${GroupService.BASE_URL}/groups/${id}`);
  }

  addMember(id, user) {

    return this.http.post(`${GroupService.BASE_URL}/users`, {
      ...user,
      group: id
    });
  }

}
