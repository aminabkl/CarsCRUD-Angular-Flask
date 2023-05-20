import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarModule } from './car/car.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarServiceService {
  token = localStorage.getItem('jwt');
  // url principal
  url: string = 'http://127.0.0.1:5000';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: `${this.token}`,
      Authorization: `Bearer ${this.token}`,
    }),
  };

  constructor(private http: HttpClient) {}

  saveCare(car: CarModule) {
    console.log(this.url + '/savecar');
    console.log('car service' + car);
    return this.http.post(this.url + '/savecar', car, this.httpOptions);
  }

  getAllcars(): Observable<CarModule[]> {
    return this.http.get<CarModule[]>(this.url + '/cars', this.httpOptions);
  }

  editCar(car: CarModule): Observable<any> {
    const editUrl = `${this.url}/editcar/${car.id_car}`;
    return this.http.put(editUrl, car, this.httpOptions);
  }

  deleteCar(id_car: number): Observable<any> {
    const deleteUrl = `${this.url}/deletecar/${id_car}`;
    return this.http.delete(deleteUrl, this.httpOptions);
  }
}
