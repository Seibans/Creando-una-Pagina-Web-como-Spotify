// ACA HAY 2 SOLUCIONES DE ERRORES FUTUROS QUE ME PANA CON LO DE QUE NO SE RECONOCE EL
// ELEMENTO ASI QUE O PUEDES USAR CUSTOM_ELEMENTS_SCHEMA  O PUEDES IMPORTAR EL ROUTER MODULEPORQUE ESO TAMBIEN LO SOLUCIONA

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [ //TODO: Declaraciones, componentes, directivas, pipes
    AppComponent
  ],
  imports: [ //TODO: Solo se importan otros modulos
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
