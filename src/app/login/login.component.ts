import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl   } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin : FormGroup;
  resp 

  constructor( private _ls : AuthServiceService,
                private router :Router ) { }

  ngOnInit(): void {
    this.inicioSesion();
  }
  
  inicioSesion() {
    this.formLogin = new FormGroup ({
      usuario : new FormControl (null, [Validators.required, Validators.email]),
      contrasena : new FormControl (null, [Validators.required])
    });
  }

  onLogin(){
    // this._ls.onLogin(this.formLogin.value).subscribe( login =>{
    //   this.resp = login
    //     if( this.resp.codigoOperacion ===53 ){
    //       this.router.navigateByUrl('/login')
    //     }else {

    //     }
    // })
  }


}
