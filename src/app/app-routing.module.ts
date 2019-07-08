import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
    path: 'about',
    loadChildren: './about/about.module#AboutPageModule'
  },
  {
    path: 'business',
    loadChildren: './business/business.module#BusinessPageModule'
  },
  {
    path: 'entertainment',
    loadChildren: './entertainment/entertainment.module#EntertainmentPageModule'
  },
  {
    path: 'sports',
    loadChildren: './sports/sports.module#SportsPageModule'
  },
  {
    path: 'technology',
    loadChildren: './technology/technology.module#TechnologyPageModule'
  },
  { path: 'health', loadChildren: './health/health.module#HealthPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
