import { Component } from '@angular/core';
import { CapacitorHttp } from '@capacitor/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor() { }

  async test() {
    const url = `https://www.qatarairways.com/en/qhub.caas.json?__qr_ex_ea_t__=token`;
    const result = await CapacitorHttp.request({ method: 'GET', url });
    console.log(result);
  }
}
