import { Component } from '@angular/core';
import { Cart } from '../../core/cart';
import { Produto } from '../../core/models/produto';

@Component({
  selector: 'app-produtos',
  standalone: true,
  templateUrl: './produtos.html'
})
export class Produtos {

  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Ração Premium',
      preco: 89.90,
      imagem: 'assets/racao.jpg'
    },
    {
      id: 2,
      nome: 'Brinquedo para cachorro',
      preco: 29.90,
      imagem: 'assets/brinquedo.jpg'
    },
    {
      id: 3,
      nome: 'Coleira',
      preco: 39.90,
      imagem: 'assets/coleira.jpg'
    }
  ];

  constructor(
    private cart: Cart
  ) {}

  adicionarAoCarrinho(produto: Produto) {
    this.cart.adicionar(produto);
  }
}