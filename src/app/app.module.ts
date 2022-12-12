import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './components/product/product.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SortComponent } from './components/sort/sort.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { SortEffects } from './effects/sort.effects';
import { ProductsEffects } from './effects/products.effects';
import { CartItemComponent } from './components/cart-item/cart-item.component';

@NgModule({
	declarations: [
		AppComponent,
		routingComponents,
		HeaderComponent,
		ProductComponent,
		CategoriesComponent,
		SortComponent,
		ClickOutsideDirective,
  CartItemComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		StoreModule.forRoot(reducers, {
			metaReducers
		}),
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
		EffectsModule.forRoot([ProductsEffects, SortEffects]),
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
