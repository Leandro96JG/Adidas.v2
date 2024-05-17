import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path: 'adidas',
      loadChildren: () => import('./adidas/adidas.module').then(m => m.AdidasModule)
 },
 {
    path:'**',
    redirectTo:'adidas'
 }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
