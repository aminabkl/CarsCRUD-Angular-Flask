import { Component } from '@angular/core';
import { CarServiceService } from '../car-service.service';
import { CarModule } from './car.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent {
  // two way binding
  model!: string;
  hp!: number;
  marque!: string;
  // user_id!: number;
  constructor(private carservice: CarServiceService, private router: Router) {}

  //event bindding

  saveMe() {
    let mycar = new CarModule();

    mycar.id_car = 0;
    mycar.hp = this.hp;
    mycar.model = this.model;
    mycar.marque = this.marque;
    // mycar.user_id = this.user_id;

    console.log(mycar);
    this.carservice.saveCare(mycar).subscribe();
    alert('Car added successfully');
    this.router.navigate(['/home']);
  }
}
