import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guards/auth-guards.service';
import { DummyComponent } from './components/dummy/dummy.component';


const routes: Routes = [
  {
    path:'login',
    loadChildren: ()=> import('./login/login.module').then(m=>m.LoginModule)
  },
  {
    path:'blog',
    canActivate:[AuthGuard],
    component:DummyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
