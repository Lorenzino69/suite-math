import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'suite-arythmetique', loadChildren: './suite-arythmetique/suite-arythmetique.module#SuiteArythmetiquePageModule' },
  { path: 'suite-geometrique', loadChildren: './suite-geometrique/suite-geometrique.module#SuiteGeometriquePageModule' },
  { path: 'somme-suite', loadChildren: './somme-suite/somme-suite.module#SommeSuitePageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
