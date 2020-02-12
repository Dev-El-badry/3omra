import { Component, OnInit, Input } from "@angular/core";
import {ModalController} from '@ionic/angular';
@Component({
  selector: "app-create-booking",
  templateUrl: "./create-booking.component.html",
  styleUrls: ["./create-booking.component.scss"]
})
export class CreateBookingComponent implements OnInit {
  @Input() selectedMode: "ramadan" | "non-ramadan";
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  closeModal() {
    this.modalController.dismiss(null, "cancel");
  }
}
