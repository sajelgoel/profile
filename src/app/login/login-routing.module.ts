import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { LoginParentComponent } from './components/login-parent/login-parent.component';


const routes: Routes = [
  {
    path:'',
    component:LoginParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
