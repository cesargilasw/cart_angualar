import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { globals } from 'src/app/classes/globals';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  globals = globals;
  constructor(private http: HttpClient ) { }
  
  async getCategory(): Promise<any> {
    const url = `${this.globals.urlBase}${this.globals.category.path}`;
    return await this.http.get(url).toPromise();
  }

  
}
