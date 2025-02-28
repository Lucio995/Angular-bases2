import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { MainPageComponent } from './pages/main-pages.componente';
import { ListDbzComponent } from './componentes/list/list.component';
import { AddCaracterComponent } from './componentes/addCaracter/addCaracter.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListDbzComponent,
    AddCaracterComponent
  ],
  exports:[
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule

]
})
export class DbzModule {

}
