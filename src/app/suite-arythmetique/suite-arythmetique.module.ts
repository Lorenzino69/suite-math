import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SuiteArythmetiquePage } from './suite-arythmetique.page';

const routes: Routes = [
  {
    path: '',
    component: SuiteArythmetiquePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SuiteArythmetiquePage]
})
export class SuiteArythmetiquePageModule {}
