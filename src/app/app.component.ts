import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ApisPruebasService} from '../Rutas/apis-pruebas.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Formulario Web';
  contacto: FormGroup;
  mensaje = false;
  mensajeError = false;

  mensajeCompleto = ""  
submitted = false;
  constructor(
    private fb: FormBuilder,
    private cliente: ApisPruebasService
  )
  {
    this.contacto = this.fb.group({
      Documento: [''],            
      Nombres: [''],
      Apellidos: [''],
      Telefono: [''],
      Correo: [''],
      Direccion: ['']
  });

  }

 
  enviarFormulario(data:any) {
 // this.submitted = true;
  this.cliente.PostUsers(data).subscribe( (res:any) => {
    console.log(res)
    if( res == "Persona registrada exitosamente")
     {
       this.mensaje = true;
       this.mensajeCompleto = res;
  this.mensajeError = false;

    }else {
      this.mensajeError = true;
      this.mensajeCompleto = res;
      this.mensaje = false;
    }
  })
 console.log(data)
}
  
  ngOnInit() {
  }

  
}
