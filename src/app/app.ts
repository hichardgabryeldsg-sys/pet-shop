import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Cadastro } from "./cadastro/cadastro";

@Component({
  imports: [RouterOutlet, Login, Cadastro],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('pet-shop');
}
