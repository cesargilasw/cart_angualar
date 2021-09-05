import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Globals } from 'src/app/Classes/Globals';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  globals = Globals;
  constructor(private http: HttpClient ) { }
  
  async getCategory(): Promise<any> {
    const url = `${this.globals.urlBase}${this.globals.category.path}`;
    return await this.http.get(url).toPromise();
  }

  
}
