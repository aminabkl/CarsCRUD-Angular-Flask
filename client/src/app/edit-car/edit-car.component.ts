import { Component } from '@angular/core';
import { CarServiceService } from '../car-service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CarModule } from '../car/car.module';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css'],
})
export class EditCarComponent {
  id_car!: number;
  model!: string;
  hp!: number;
  marque!: string;

  constructor(
    private myservice: CarServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id_car = params['id'];
      this.id_car = id_car;
    });
  }
  editCar(id_car: number): void {
    let updatedCar = new CarModule();
    updatedCar.id_car = this.id_car;
    updatedCar.model = this.model;
    updatedCar.hp = this.hp;
    updatedCar.marque = this.marque;

    this.myservice.editCar(updatedCar).subscribe();
    console.log('Car updated successfully');
    this.router.navigate(['/home']);
  }
}
