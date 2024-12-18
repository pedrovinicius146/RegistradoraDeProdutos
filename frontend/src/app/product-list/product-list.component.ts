import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  standalone : true,
  imports:[CommonModule,FormsModule,HttpClientModule]
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  showProductList = false; // Controla a visibilidade da lista
  mostrarRemedio(): void {
    this.showProductList = !this.showProductList;
  }
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
    
  }
}
