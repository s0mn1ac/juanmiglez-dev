import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    data: { animation: 'isLeft' }
  },
  {
    path: 'portfolio',
    loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule),
    // data: { animation: 'isRight' }
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule),
    data: { animation: 'isRight' }
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }


  // {
  //   path: '',
  //   component: LayoutComponent,
  //   children: [
  //       {
  //         path: 'home',
  //         loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  //         data: { animation: 'isLeft' }
  //       },
  //       {
  //         path: 'portfolio',
  //         loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule),
  //         data: { animation: 'isRight' }
  //       },
  //       {
  //         path: '',
  //         redirectTo: '/home',
  //         pathMatch: 'full'
  //       }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
