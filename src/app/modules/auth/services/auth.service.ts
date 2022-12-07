import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, tap } from 'rxjs';
// import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly URL = environment.api

  constructor(
              private http: HttpClient,
              // private cookie: CookieService
              ) { }


  enviarCredencial(email: string, password: string): Observable<any>{
    console.log(email, password);

    const body = {
      email,
      password
    }

    //Este cookie es algo que se repite en el componente
    //El inge tambien dice que aca se puede manejar el catch error
    return this.http.post(`${this.URL}/auth/login`, body)
    // .pipe(
    //   tap((responseOK: any) => {
    //   const { tokenSession, data } = responseOK;
    //   this.cookie.set('token_service', tokenSession, 4, '/')
    //   })
    // )
  }
}
