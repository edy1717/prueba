import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatButtonModule} from '@angular/material/button'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table'; 


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatCardModule, 
    MatButtonModule,
    MatTableModule
    
  ],
  exports:[
    MatFormFieldModule,
    MatToolbarModule,
    MatCardModule,  
    MatButtonModule,
    MatTableModule
    
  ]
})
export class MaterialModule { }
