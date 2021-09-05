import { Injectable } from '@angular/core';
import { Globals } from '../../Classes/Globals';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  globals = Globals;
  constructor(private http: HttpClient ) { }
  
  async getProducts(query?: any ): Promise<any> {
    const url = `${this.globals.urlBase}${this.globals.products.path}`;
    return await this.http.get(url, {params:query}).toPromise();
  }
}

