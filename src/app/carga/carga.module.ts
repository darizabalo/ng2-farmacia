import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



import { CargaComponent } from './carga.component';
import { CargaService } from './carga.service';

@NgModule({
    imports: [
        ReactiveFormsModule,
        CommonModule,
    ],
    declarations: [
        CargaComponent,
    ],
    providers: [
        CargaService,
    ]
})

export class CargaModule {}