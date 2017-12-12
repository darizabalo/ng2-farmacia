import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import {CargaService, Producto} from './carga.service';

@Component({
    templateUrl: './carga.component.html',
})

export class CargaComponent {

    private productos: Producto[];

    productoForm: FormGroup;
    codBarraForm: FormGroup;
    codigoForm: FormGroup;

    constructor(private fb: FormBuilder, private cargaService: CargaService) {
        this.createForms();
    }

    createForms() {
        this.productoForm = this.fb.group({
            producto: '',
        });
        this.codBarraForm = this.fb.group({
            codBarra: '',
        });
        this.codigoForm = this.fb.group({
            codigo: '',
        });
    }

    buscarProducto() {
        const formModel = this.productoForm.value;
        this.cargaService.buscarProducto(formModel.producto).subscribe(data => {
            this.productos = data;
        });
    }

    buscarCodBarra() {

    }

    buscarCodigo() {
        
    }

}