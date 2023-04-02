import { Injectable } from '@angular/core';

interface Llamada {
  numero: string;
  duracion: number;
  precio: number;
}

interface Cabinas {
  nombre: string;
  numero: string;
  precio: string;
  tiempo: string;
  timeStart: number;
  timeInterval: any;
  botonInicio: boolean;
  botonFinal: boolean;
  llamadas: Llamada[];
}

@Injectable({
  providedIn: 'root',
})
export class CabinasService {
  public static listCabinas = [] as Cabinas[];

  constructor() {}
}
