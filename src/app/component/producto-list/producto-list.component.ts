import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../service/producto.service';
import { Producto } from '../../model/producto';
import { ProductoCardComponent } from '../producto-card/producto-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto-list',
  standalone: true,
  imports: [ProductoCardComponent, CommonModule],
  templateUrl: './producto-list.component.html',
  styleUrl: './producto-list.component.css'
})
export class ProductoListComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.productos = this.productoService.getProductos();
  }
}

