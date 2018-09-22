import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddComponent} from '../math/add/add.component'
import {SubtractComponent} from '../math/subtract/subtract.component'
import {MultiplyComponent} from '../math/multiply/multiply.component'
import {MathComponent} from '../math/math.component';
import {DevideComponent} from '../math/devide/devide.component';

const routes :Routes =[
{path :'add', component:AddComponent},
{path:'subtract', component :SubtractComponent},
{path:'multiply', component :MultiplyComponent},
{path:'devide', component :DevideComponent},
{path:'math' ,component :MathComponent}
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class AppRoutingModule {

 }
