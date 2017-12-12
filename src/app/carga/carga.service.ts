import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export class Producto {
    PRODUCTO: string;
    CODBARRA: number;
    CODIGO: number;
}

@Injectable()
export class CargaService {
    
    private productoUrl = 'http://localhost:80/farmacia/src/app/php/buscarproducto.php';

    constructor(private http: HttpClient){}

    buscarProducto(value: string): Observable<Producto[]> {
        const body = {producto: value};
        console.log(body);
        return this.http.post<Producto[]>(this.productoUrl, body);
        //return this.http.get<Producto[]>(this.productoUrl);
    }

}