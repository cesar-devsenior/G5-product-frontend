import { Component, signal } from '@angular/core';
import { ProductoListComponent } from './component/producto-list/producto-list.component';

@Component({
  selector: 'app-root',
  imports: [ProductoListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  nombre: string = "Cesar Augusto Diaz";

  cambiarNombre(): void {
    this.nombre = "Camilo Mendoza";
  }
}
