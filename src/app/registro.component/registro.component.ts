import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, NgControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css',
})
export class Registro {

  formulario : FormGroup;
  mensaje : string = "";
  colorTexto = '#009D71';
  colorFondo = '#f4f6f9';

  constructor (private fb: FormBuilder){
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      tamanioFuente: [15, [Validators.required]],
      mensaje: ['']
    })
  }

  enviar(){
    this.mensaje = "Formulario enviado. Aca hay que hacer algo.."
  }

  cancelar(): void {
  this.formulario.reset({
    tamanioFuente: 15
  });
  }


 

cambiarColor(color: string): void {
  this.colorFondo = color;
}
}
