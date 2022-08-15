import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  errorSession: boolean = false;
  formLogin: FormGroup = new FormGroup({

  });


  constructor(private authService: AuthService, private cookie: CookieService) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('',[
          Validators.required,
          Validators.email,
        ]),
        password: new FormControl('',[
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)
        ])
      }
    )
  }


  enviarLogin():void{
    const { email, password } = this.formLogin.value;
    this.authService.enviarCredencial(email, password)
    .subscribe({
      next: (responseOK) => { 
      //Cuando el usuario ingresa credenciales correctas
      console.log('Session Iniciada correcta',responseOK);
      const { tokenSession, data } = responseOK;
      this.cookie.set('token', tokenSession, 4, '/')
      //El 4 quiere decir que va a ser valida por 4 dias
      //Aprende a usar e
      
     },error: (error) => {
      console.log('Ocurrio un error con tu email o password');
      this.errorSession = true;
      
  }});
    
    
  }

}
