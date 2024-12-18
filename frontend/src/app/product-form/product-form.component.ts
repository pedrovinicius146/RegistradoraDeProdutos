import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
  imports: [FormsModule]
})
export class ProductFormComponent {
  product = {
    name: '',
    price: 0
  };

  constructor(private productService: ProductService) {}

  onSubmit() {
    this.productService.addProduct(this.product).subscribe(
      response => {
        console.log('Produto registrado com sucesso!', response);
        this.reloadPage(); 
      },
      error => {
        console.error('Erro ao registrar produto:', error);
      }
    );
  }

  reloadPage() {
    window.location.reload(); // Força o recarregamento da página
  }
}
