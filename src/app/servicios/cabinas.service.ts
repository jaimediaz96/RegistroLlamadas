import { Injectable } from '@angular/core';

interface Llamada {
  numero: string;
  duracion: number;
  precio: number;
}

@Injectable({
  providedIn: 'root'
})
export class CabinasService {

  public static listCabinas = [{
    nombre: "Cabina 1",
    numero: "",
    precio: "",
    llamadas: [] as Llamada[],
    botonInicio: false,
    botonFinal: false
  }, {
    nombre: "Cabina 2",
    numero: "",
    precio: "",
    llamadas: [] as Llamada[],
    botonInicio: false,
    botonFinal: false
  }, {
    nombre: "Cabina 3",
    numero: "",
    precio: "",
    llamadas: [] as Llamada[],
    botonInicio: false,
    botonFinal: false
  }];

  constructor() {
  }
}
