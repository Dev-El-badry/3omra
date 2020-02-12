import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreateBookingComponent } from '../create-booking/create-booking.component';
@Component({
  selector: "app-packages",
  templateUrl: "./packages.page.html",
  styleUrls: ["./packages.page.scss"]
})
export class PackagesPage implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  onBookingModal(mode: "ramadan" | "non-ramadan") {
    console.log(mode);

    this.modalController.create({
      component: CreateBookingComponent,
      componentProps: {selectedMode: mode}
    })
    .then(modalCreate => {
      modalCreate.present();
      return modalCreate.onDidDismiss();
    })
    .then(modalDismiss => {
      console.log(modalDismiss.data, modalDismiss.role);

      if(modalDismiss.role === 'confirm') {
        console.log('Booking');
      }
    })
  }
}
