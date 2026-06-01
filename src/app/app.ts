import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Registro } from './registro.component/registro.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Registro],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Tarea2');
}
