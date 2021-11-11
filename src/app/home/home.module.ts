import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '@shared';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
//import { ViewDetailComponent } from './view-detail/view-detail.component';

@NgModule({
  declarations: [
    HomeComponent
  //  , ViewDetailComponent
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule]
})
export class HomeModule {}