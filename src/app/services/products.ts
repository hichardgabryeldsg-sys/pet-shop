import { Produto } from '../components/product-card/product-card';

const initialProducts: Produto[] = [
  {
    id: 1,
    nome: 'Coleira Happy',
    descricao: 'Coleira confortável para cães',
    preco: 39.9,
    imagem: 'https://images.unsplash.com/photo-1552053831-71594a27632d',
    categoria: 'Coleiras',
    favorito: false
  },
  {
    id: 2,
    nome: 'Brinquedo Mordedor',
    descricao: 'Brinquedo resistente para diversão',
    preco: 29.9,
    imagem: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e',
    categoria: 'Brinquedos',
    favorito: false
  },
  {
    id: 3,
    nome: 'Caminha Confort',
    descricao: 'Caminha macia para seu pet',
    preco: 89.9,
    imagem: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d',
    categoria: 'Camas',
    favorito: false
  },
  {
    id: 4,
    nome: 'Comedouro Pet',
    descricao: 'Comedouro prático e resistente',
    preco: 49.9,
    imagem: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b',
    categoria: 'Alimentação',
    favorito: false
  }
];

export class ProductsService {
  private produtos: Produto[] = initialProducts;

  listar(): Produto[] {
    return this.produtos;
  }

  buscarPorId(id: number): Produto | undefined {
    return this.produtos.find(p => p.id === id);
  }
}

export const productsService = new ProductsService();
