import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarModule } from '../car/car.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class CarsModule {
  cars!: CarModule[];
}
