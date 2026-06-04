import { Component, input, output } from '@angular/core';

import { Producto } from '../producto';
import { CommonModule } from '@angular/common';
import { DescuentoPipe } from '../pipes/descuento-pipe';


@Component({
  selector: 'lista-productos',
  standalone: true,
  imports: [CommonModule, DescuentoPipe],
  templateUrl: './lista-productos.html',
  styleUrl: '../app.css',
})

export class ListaProductos {

  productos = input<Producto[]>([]);

  borrarProducto = output<number>();

  borrar(id: number) {
    this.borrarProducto.emit(id);
  }
  
}

