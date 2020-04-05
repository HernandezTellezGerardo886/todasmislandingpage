import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './inicio/header/header.component';
import { SobreNosotrosComponent } from './inicio/sobre-nosotros/sobre-nosotros.component';
import { ProductosServiciosComponent } from './inicio/productos-servicios/productos-servicios.component';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SobreNosotrosComponent,
    ProductosServiciosComponent,
    IndexComponent,
  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
