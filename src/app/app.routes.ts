import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Cadastro } from './cadastro/cadastro';
import { Produtos } from './features/produtos/produtos';
import { Carrinho } from './features/carrinho/carrinho';


export const routes: Routes = [
    {
        path: "login",
        component: Login
    },
    {
        path: "cadastro",
        component: Cadastro
    },
    {
        path: "produtos",
        component: Produtos
    },
    {
        path: "carrinho",
        component: Carrinho
    },
    {
        path: "",
        pathMatch: "full"
    }
];
