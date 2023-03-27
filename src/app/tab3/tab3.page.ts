import { Component } from '@angular/core';
import { CabinasService } from '../servicios/cabinas.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  totalPrecio(index: number) {
    return CabinasService.listCabinas[index].llamadas.reduce((acum, llamada) => acum + llamada.precio,0);
  }

  totalP() {
    return CabinasService.listCabinas.reduce((acum, cabina) => {
      const precio = cabina.llamadas.reduce((res, llamada) => {
        const valor = llamada.precio;
        return res + valor;
      }, 0);
      return acum + precio;
    } , 0);
  }

  totalTiempo(index: number) {
    return CabinasService.listCabinas[index].llamadas.reduce((acum, llamada) => acum + llamada.duracion,0);
  }

  totalT() {
    return CabinasService.listCabinas.reduce((acum, cabina) => {
      const tiempo = cabina.llamadas.reduce((res, llamada) => {
        const duracion = llamada.duracion;
        return res + duracion;
      }, 0);
      return acum + tiempo;
    } , 0);
  }

  show() {
    return CabinasService.listCabinas;
  }
}
