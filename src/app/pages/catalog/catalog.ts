import { Component } from '@angular/core';

interface Pet {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
  favorito: boolean;
}

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css'
})
export class Catalog {

  pets: Pet[] = [
    {
      id: 1,
      nome: 'Produto',
      descricao: 'Descrição do produto',
      imagem: 'https://images.unsplash.com/photo-1552053831-71594a27632d',
      favorito: false
    },
    {
      id: 2,
      nome: 'Produto',
      descricao: 'Descrição do produto',
      imagem: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e',
      favorito: false
    },
    {
      id: 3,
      nome: 'Produto',
      descricao: 'Descrição do produto',
      imagem: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d',
      favorito: false
    },
    {
      id: 4,
      nome: 'Produto',
      descricao: 'Descrição do produto',
      imagem: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b',
      favorito: false
    }
  ];

  favoritar(pet: Pet): void {
    pet.favorito = !pet.favorito;
  }

}