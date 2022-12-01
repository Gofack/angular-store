import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './components/product/product.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SortComponent } from './components/sort/sort.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';

@NgModule({
	declarations: [
		AppComponent,
		routingComponents,
		HeaderComponent,
		ProductComponent,
		CategoriesComponent,
		SortComponent,
		ClickOutsideDirective
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
