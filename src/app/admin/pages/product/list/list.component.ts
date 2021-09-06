import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../../../../services/product/product.service';
import { CategoryService } from '../../../../services/category/category.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  searcProduct: string = '';
  displayedColumns: any;
  categories: any;
  selectedCategory: string = '';
  isLoading: boolean = true;
  pageEvent: PageEvent | undefined;
  dataSource: any;
  currentPage = 1;
  length = 0;
  itemsPerPage = 5;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  constructor(private _productService: ProductService, private _categoryService: CategoryService, private router: Router ) {

  }

  ngOnInit(): void {
    this.displayedColumns = ['name', 'description', 'price', 'category', 'actions'];
    this.getList();
    this.getCategories();
  }

  // Set next current page and items per page and call get list to display results
  onChangePage(pe: PageEvent) {
    this.currentPage = pe.pageIndex + 1;
    this.itemsPerPage = pe.pageSize
    this.getList();
  }

  /**
  * Shoot when click on search button
  * @param {$event} Event     
  */
  search($event: Event): void {
    $event.preventDefault();
    this.getList();
  }

  // Shoot when the select category change    
  onCategoryChange($event: any): void {
    this.selectedCategory = $event.target.value;
    this.getList();
  }

  /**
  * Go to edit product
  * @param {id} number - Id of product to see detail     
  */
   goEdit(id: number): void {
    this.router.navigate([`admin/product/edit`, id]);
  }

  // Go to create new product view
  goCreate() {
    this.router.navigate([`admin/product/new`]);
  }

  // Call API to get all products
  getList(): void {
    this.isLoading = true;
    let query = this.getQueryParameters();
    this._productService.getProducts(query).then(result => {
      if (result['data'].data) {
        this.dataSource = result['data'].data;
        this.dataSource = new MatTableDataSource<any>(this.dataSource);
        this.dataSource.paginator = this.paginator;
        this.length = result['data'].total;
      }
      this.isLoading = false;
    });
  }

  // Call API to get all categories
  getCategories(): void {
    this._categoryService.getCategory().then(result => {
      if (result['data']) {
        this.categories = result['data'];
      }
    });
  }

  // Return all query parameters object
  getQueryParameters(): object {
    const querySearch: object = {
      search: this.searcProduct,
      categoryId: this.selectedCategory,
      perPage: this.itemsPerPage,
      currentPage: this.currentPage || 1
    };
    return querySearch;
  }

}
