import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SommeSuitePage } from './somme-suite.page';

const routes: Routes = [
  {
    path: '',
    component: SommeSuitePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SommeSuitePage]
})
export class SommeSuitePageModule {}
