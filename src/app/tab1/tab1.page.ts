import { Component } from '@angular/core';
import { CabinasService } from '../servicios/cabinas.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {

  public numero: string = '';
  public duracion: number = 0;
  public precio: number = 0;

  constructor(public alertController: AlertController) {}

  iniciar(index: number) {
    CabinasService.listCabinas[index].botonInicio = false;
    CabinasService.listCabinas[index].botonFinal = true;
    CabinasService.listCabinas[index].timeStart = Date.now();
    CabinasService.listCabinas[index].timeInterval = setInterval(() => {
      const tiempo = Math.floor((Date.now() - CabinasService.listCabinas[index].timeStart) / 1000);
      const minutos = Math.floor(tiempo / 60);
      const segundos = tiempo % 60;
      const tiempoEnFormatoMMSS = `${minutos.toString()
        .padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
      CabinasService.listCabinas[index].tiempo = tiempoEnFormatoMMSS;
    }, 100);
  }

  obtenerTiempoTranscurrido(index: number) {
    this.numero = CabinasService.listCabinas[index].numero;
    CabinasService.listCabinas[index].botonInicio = false;
    CabinasService.listCabinas[index].botonFinal = false;
    clearInterval(CabinasService.listCabinas[index].timeInterval);
    this.duracion = Date.now() - CabinasService.listCabinas[index].timeStart;
    this.duracion = Math.floor(this.duracion / 1000 / 60) + 1;
    this.precio = this.duracion * 50;
    CabinasService.listCabinas[index].precio = this.precio + ' $';
    this.addLlamada(this.numero, this.duracion, this.precio, index);
    CabinasService.listCabinas[index].numero = '';
  }

  addLlamada(numero: string, duracion: number, precio: number, index: number) {
    const llamada = {
      numero,
      duracion,
      precio,
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

  addCabina() {
    const nombre: string = 'Cabina ' + (CabinasService.listCabinas.length + 1);
    CabinasService.listCabinas.push({
      nombre,
      numero: '',
      precio: '',
      tiempo: '00:00',
      timeStart: 0,
      timeInterval: undefined,
      botonInicio: false,
      botonFinal: false,
      llamadas: [],
    });
  }

  async removeCabina() {
    const alert = await this.alertController.create({
      header: 'Eliminar Cabina',
      message:
        '¿Está seguro que desea eliminar la última cabina? Se borrarán todas las llamadas, precios y tiempos de esa cabina.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          handler: () => {
            CabinasService.listCabinas.pop();
          },
        },
      ],
    });

    await alert.present();
  }
}
