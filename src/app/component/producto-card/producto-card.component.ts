import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../../model/producto';

@Component({
  selector: 'app-producto-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto-card.component.html',
  styleUrl: './producto-card.component.css'
})
export class ProductoCardComponent {
  @Input() producto!: Producto;
  @Output() eliminarProducto = new EventEmitter<number>();

  onEliminar(): void {
    if (this.producto.id) {
      this.eliminarProducto.emit(this.producto.id);
    }
  }
}

