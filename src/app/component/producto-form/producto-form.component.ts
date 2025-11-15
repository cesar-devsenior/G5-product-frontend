import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from '../../model/producto';
import { RouterLink } from "@angular/router";
import { ProductoService } from '../../service/producto.service';

@Component({
  selector: 'app-producto-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './producto-form.component.html',
  styleUrl: './producto-form.component.css'
})
export class ProductoFormComponent {
  productoForm: FormGroup;

  constructor(private fb: FormBuilder, private productoService: ProductoService) {
    this.productoForm = this.fb.group({
      nombre: ['', [Validators.required]],
      precio: ['', [Validators.required, Validators.min(0.01)]],
      imagenUrl: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.productoForm.valid) {
      const producto: Producto = {
        nombre: this.productoForm.value.nombre,
        precio: parseFloat(this.productoForm.value.precio),
        imagenUrl: this.productoForm.value.imagenUrl
      };
      console.log('Producto a guardar:', producto);
      // Aquí puedes agregar la lógica para guardar el producto
      this.productoService.createProducto(producto)
        .subscribe({
          next: (prod) => {
            alert(`Se ha guardado el producto con el id: ${prod.id}`);
            this.productoForm.reset();
          },
          error: () => {
            console.error("Ocurrió un error al guardar el producto");
          }
        });
    } else {
      console.log('Formulario inválido');
    }
  }

  get nombre() {
    return this.productoForm.get('nombre');
  }

  get precio() {
    return this.productoForm.get('precio');
  }

  get imagenUrl() {
    return this.productoForm.get('imagenUrl');
  }
}

