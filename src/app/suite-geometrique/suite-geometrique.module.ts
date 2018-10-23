import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SuiteGeometriquePage } from './suite-geometrique.page';

const routes: Routes = [
  {
    path: '',
    component: SuiteGeometriquePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SuiteGeometriquePage]
})
export class SuiteGeometriquePageModule {}
