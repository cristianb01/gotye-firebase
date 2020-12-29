import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { GotyPageComponent } from './pages/goty-page/goty-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'goty', component: GotyPageComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
