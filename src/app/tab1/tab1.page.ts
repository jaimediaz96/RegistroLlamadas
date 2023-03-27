import { Component } from '@angular/core';
import { CabinasService } from '../servicios/cabinas.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private tiempoInicial: number = 0;

  public numero : string = '';
  public duracion : number = 0;
  public precio : number = 0;

  constructor() { }

  iniciar(index: number) {
    CabinasService.listCabinas[index].botonInicio = false;
    CabinasService.listCabinas[index].botonFinal = true;
    this.tiempoInicial = Date.now();
  }

  obtenerTiempoTranscurrido(index: number) {
    this.numero = CabinasService.listCabinas[index].numero;
    CabinasService.listCabinas[index].botonInicio = false;
    CabinasService.listCabinas[index].botonFinal = false;
    this.duracion = Date.now() - this.tiempoInicial;
    this.duracion = Math.floor((this.duracion/1000)/60) + 1;
    this.precio = this.duracion * 50;
    CabinasService.listCabinas[index].precio = this.precio + " $";
    this.addLlamada(this.numero, this.duracion, this.precio, index);
    CabinasService.listCabinas[index].numero = '';
  }

  addLlamada(numero:string, duracion:number, precio:number, index: number) {
    const llamada = {
      numero,
      duracion,
      precio
    };
    CabinasService.listCabinas[index].llamadas.push(llamada);
  }

  habilitarBoton(index: number) {
    CabinasService.listCabinas[index].botonInicio = true;
    CabinasService.listCabinas[index].precio = '';
  }

  cabina() {
    return CabinasService.listCabinas;
  }
}
