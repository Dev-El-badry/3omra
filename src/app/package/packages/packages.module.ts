import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PackagesPageRoutingModule } from './packages-routing.module';

import { PackagesPage } from './packages.page';
import { CreateBookingComponent } from '../create-booking/create-booking.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, PackagesPageRoutingModule],
  declarations: [PackagesPage, CreateBookingComponent],
  entryComponents: [CreateBookingComponent]
})
export class PackagesPageModule {}
