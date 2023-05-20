import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { CarComponent } from './car/car.component';
import { CarsTableComponent } from './cars-table/cars-table.component';
import { EditCarComponent } from './edit-car/edit-car.component';
import { RegisterComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // url avec la componenent
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: CarsTableComponent,
  },
  { path: 'addcar', component: CarComponent },
  {
    path: 'editcar/:id',
    component: EditCarComponent,
  },
  {
    path: 'deletecar/:id',
    component: CarsTableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(private router: Router) {
    const jwt = localStorage.getItem('jwt');
    if (jwt === null) {
      this.router.navigateByUrl('/');
    }
  }
}
