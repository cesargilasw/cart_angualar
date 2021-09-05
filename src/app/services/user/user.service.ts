import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Globals } from '../../Classes/Globals';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  globals = Globals;

  constructor(private http: HttpClient) { }

  register(user: Object) {
      return this.http.post(`${this.globals.urlBase}${this.globals.auth.path}${this.globals.auth.register}`, user);
  }

}
