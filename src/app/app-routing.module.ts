import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
        {
          path: 'home',
          loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
        },
        {
          path: 'portfolio',
          loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule)
        },
        {
          path: '',
          redirectTo: '/home',
          pathMatch: 'full'
        }
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
