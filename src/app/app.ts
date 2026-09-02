import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { cart } from './services/cart';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'happyPet';
  protected readonly cart = cart;

  cartCount(): number {
    return this.cart.totalItems();
  }

}
