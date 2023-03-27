import { Component } from '@angular/core';
import { CabinasService } from '../servicios/cabinas.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  show() {
    return CabinasService.listCabinas;
  }

}
