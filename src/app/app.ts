import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductosComponent } from './productos/productos';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductosComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Tarea 3');
}
