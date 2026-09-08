import { Injectable, computed, signal } from '@angular/core';
import { Produto } from './models/produto';

@Injectable({
  providedIn: 'root'
})
export class Cart {

  private readonly carrinhoSignal = signal<Produto[]>([]);

  readonly carrinho = this.carrinhoSignal.asReadonly();

  readonly quantidade = computed(() => {
    return this.carrinhoSignal().length;
  });

  readonly total = computed(() => {
    return this.carrinhoSignal().reduce(
      (soma, produto) => soma + produto.preco,
      0
    );
  });

  adicionar(produto: Produto) {
    this.carrinhoSignal.update(carrinho => [
      ...carrinho,
      produto
    ]);
  }

  remover(id: number) {
    this.carrinhoSignal.update(carrinho =>
      carrinho.filter(produto => produto.id !== id)
    );
  }

  limpar() {
    this.carrinhoSignal.set([]);
  }
}