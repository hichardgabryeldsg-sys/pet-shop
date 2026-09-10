import { Component, inject } from '@angular/core';
import { Cart } from '../../core/cart';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  templateUrl: './carrinho.html'
})
export class Carrinho {

  private readonly cart = inject(Cart);

  carrinho = this.cart.carrinho;
  quantidade = this.cart.quantidade;
  total = this.cart.total;

  remover(id: number) {
    this.cart.remover(id);
  }

  limpar() {
    this.cart.limpar();
  }
}