// ACA HAY 2 SOLUCIONES DE ERRORES FUTUROS QUE ME PANA CON LO DE QUE NO SE RECONOCE EL
// ELEMENTO ASI QUE O PUEDES USAR CUSTOM_ELEMENTS_SCHEMA  O PUEDES IMPORTAR EL ROUTER MODULEPORQUE ESO TAMBIEN LO SOLUCIONA

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { InjectSessionInterceptor } from '@core/interceptors/inject-session.interceptor';

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
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InjectSessionInterceptor,
      //Si llegas a utilizar mas interceptores usa esto
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
