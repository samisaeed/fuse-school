import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardComponent } from './dash-board.component';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
    {
        path: '',
        component: DashBoardComponent
    },
];

@NgModule({
  declarations: [DashBoardComponent],
  imports: [
    CommonModule,
      RouterModule.forChild(routes),

  ]
})
export class DashBoardModule { }
