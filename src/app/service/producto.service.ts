import { Injectable } from '@angular/core';
import { Producto } from '../model/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor() { }

  getProductos(): Producto[] {
    return [
      {
        id: 1,
        nombre: 'Laptop Dell XPS 15',
        precio: 1299.99,
        imagenUrl: 'https://picsum.photos/seed/laptop1/300/200'
      },
      {
        id: 2,
        nombre: 'iPhone 15 Pro',
        precio: 999.99,
        imagenUrl: 'https://picsum.photos/seed/iphone1/300/200'
      },
      {
        id: 3,
        nombre: 'Samsung Galaxy S24',
        precio: 899.99,
        imagenUrl: 'https://picsum.photos/seed/samsung1/300/200'
      },
      {
        id: 4,
        nombre: 'Auriculares Sony WH-1000XM5',
        precio: 399.99,
        imagenUrl: 'https://picsum.photos/seed/headphones1/300/200'
      },
      {
        id: 5,
        nombre: 'Monitor LG UltraWide 34"',
        precio: 549.99,
        imagenUrl: 'https://picsum.photos/seed/monitor1/300/200'
      },
      {
        id: 6,
        nombre: 'Teclado Mecánico Logitech',
        precio: 149.99,
        imagenUrl: 'https://picsum.photos/seed/keyboard1/300/200'
      }
    ];
  }
}

