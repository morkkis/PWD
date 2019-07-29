import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsViewComponent } from './components/cards-view/cards-view.component';


const routes: Routes = [
  { path: '', component: CardsViewComponent },
  { path: 'about', loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
