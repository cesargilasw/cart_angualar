import { Component, OnInit, HostListener, ViewChild, AfterViewInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { CategoryService } from '../../../services/category/category.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Router, ActivatedRoute } from '@angular/router';

import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';
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
  constructor(private _productService: ProductService, private _categoryService: CategoryService, private router: Router, private route: ActivatedRoute,) {

  }

  ngOnInit(): void {
    this.displayedColumns = ['name', 'description', 'price', 'actions'];
    this.getList();
    this.getCategories();
  }

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
  * Shoot when the select category change
  * @param {id} number - Id of producto to see detail     
  */
  goDetails(id: number): void {
    this.router.navigate([`/product/detail/${id}`]);
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
        console.log(" length " + this.length);
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
