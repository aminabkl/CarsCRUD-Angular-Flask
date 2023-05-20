import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CarModule } from '../car/car.module';
import { MatDialog } from '@angular/material/dialog';
import { CarServiceService } from '../car-service.service';
import { CarsTableDataSource } from './cars-table-datasource';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cars-table',
  templateUrl: './cars-table.component.html',
  styleUrls: ['./cars-table.component.css'],
})
export class CarsTableComponent implements AfterViewInit {
  displayedColumns = ['id_car', 'model', 'hp', 'marque', 'crud'];
  cars!: CarModule[];
  dataSource!: CarsTableDataSource;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<CarModule>;
  // dataSource: CarModule;

  constructor(
    public dialog: MatDialog,
    private myservice: CarServiceService,
    private router: Router,
    private location: Location
  ) {
    // this.dataSource = new CarsTableDataSource();
  }

  ngAfterViewInit(): void {
    this.myservice.getAllcars().subscribe((data) => {
      this.cars = data;
      this.dataSource = new CarsTableDataSource(this.cars);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.table.dataSource = this.dataSource;
    });
  }
  editRoute(car: CarModule) {
    this.router.navigate(['/editcar', car.id_car]);
  }
  deleteCar(id_car: number) {
    this.myservice.deleteCar(id_car).subscribe();
    alert('Car deleted successfully');
    location.reload();
    this.router.navigate(['/home']);
  }
}
