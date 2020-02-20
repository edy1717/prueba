import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName, Validators } from '@angular/forms';

@Component({
  selector: 'app-alta-insumos',
  templateUrl: './alta-insumos.component.html',
  styleUrls: ['./alta-insumos.component.css']
})
export class AltaInsumosComponent implements OnInit {
 
  formInsumosAlta : FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.crearAltaInsumos();
  }

  crearAltaInsumos(){
    this.formInsumosAlta = new FormGroup ({
      unidad_medida : new FormControl (null, [Validators.required]),
      nombre : new FormControl (null, [Validators.required]),
      costo_insumo : new FormControl (null, [Validators.required]),
      contenido_neto : new FormControl (null, [Validators.required]),
      usuario_id : new FormControl (null, [Validators.required]),
      insumo_id : new FormControl (null)

    });
  }

  guardarInsumo(){
    console.log('nombre')
    console.log('unidad_medida')
  }

  regresar(){
    console.log('nombre')
    console.log('unidad_medida')
  }




}
