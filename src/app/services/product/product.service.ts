import { Injectable } from '@angular/core';
//import { Globals } from '../../classes/Globals';
import { Globals } from 'src/app/classes/globals';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  globals = Globals;
  constructor(private http: HttpClient ) { }
  
  async getProducts(query?: any ): Promise<any> {
    const url = `${this.globals.urlBase}${this.globals.product.path}`;
    return await this.http.get(url, {params:query}).toPromise();
  }

  async getProductById(id: number ): Promise<any> {
    const url = `${this.globals.urlBase}${this.globals.product.path}/${id}`;
    return await this.http.get(url).toPromise();
  }

  async createProduct(params: object ): Promise<any> {
    const url = `${this.globals.urlBase}${this.globals.admin.path}/${this.globals.admin.product}`;
    return await this.http.post(url, params).toPromise();
  }

  async editProduct(params: object, id: number ): Promise<any> {
    const url = `${this.globals.urlBase}${this.globals.admin.path}/${this.globals.admin.product}/${id}`;
    return await this.http.put(url, params).toPromise();
  }

  async deleteProduct(id: number ): Promise<any> {
    const url = `${this.globals.urlBase}${this.globals.admin.path}/${this.globals.admin.product}/${id}`;
    return await this.http.delete(url).toPromise();
  }

}

