import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class EditCarModule {
  // les attributs

  public id_car!: number;
  public model!: string;
  public hp!: number;
  public marque!: string;
  // public user_id!: number;
}
