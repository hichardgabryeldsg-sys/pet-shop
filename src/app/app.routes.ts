import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Cadastro } from './cadastro/cadastro';
import { Catalog } from './pages/catalog/catalog';
import { ProductDetail } from './pages/product-detail/product-detail';




export const routes: Routes = [
     {
        path: "",
        redirectTo: "catalog",
        pathMatch: "full"
       
    },
    {
        path: "product/:id",
        component: ProductDetail
    },

    {
        path: "login",
        component: Login
    },

    {
        path: "cadastro",
        component: Cadastro
    },
    {
        path: "catalog",
        component: Catalog
    }
   
];
