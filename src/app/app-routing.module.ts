import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsListComponent } from './components/products-list/products-list.component';

const routes: Routes = [
	{ path: '', component: ProductsListComponent },
	{ path: 'cart', component: CartComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [CartComponent, ProductsListComponent];
