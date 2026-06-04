import { Injectable } from '@angular/core';
import { Producto } from '../producto';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
 

  private listaProductos: Producto[] = [
    {
      id: 1,
      nombre: "colchoneta",
      fecha: new Date(2026, 5, 1), 
      precio: 1000,
      descuento: 10
    },
    {
      id: 2,
      nombre: "bozu",
      fecha: new Date(2026, 3, 15), 
      precio: 20,
      descuento: 15
    }
  ]

  getProductos(){
    return [...this.listaProductos]
  }
  
   addProducto(nuevo: Omit<Producto, 'id'>): void {

    const id =
      this.listaProductos.length > 0
        ? Math.max(...this.listaProductos.map(p => p.id)) + 1
        : 1;

    this.listaProductos.push({
      id,
      ...nuevo
    });

  }

  deleteProducto(id: number): void {

    this.listaProductos =
      this.listaProductos.filter(
        p => p.id !== id
      );

  }
}