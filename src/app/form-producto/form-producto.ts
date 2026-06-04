import { Component, inject, output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductosService } from '../servicios/productosService';
import { Producto } from '../producto';

@Component({
  selector: 'form-producto',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-producto.html',
  styleUrl: '../app.css'
})
export class FormProducto {

  formulario : FormGroup;
    
  constructor (private fb: FormBuilder){
    this.formulario = this.fb.group({
      id: [''],
      nombre: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      precio: ['', [Validators.required]],
      descuento: ['', [Validators.required]]
    })
  }
  private productosService = inject(ProductosService);

  productoCreado = output<Omit<Producto, 'id'>>();

 enviar() {

    const producto: Omit<Producto, 'id'> = {
      nombre: this.formulario.value.nombre,
      fecha: this.formulario.value.fecha,
      precio: this.formulario.value.precio,
      descuento: this.formulario.value.descuento
    };

    this.productoCreado.emit(producto);

    this.formulario.reset();
  }


  cancelar(){
    this.formulario.reset();
  }
  

}
