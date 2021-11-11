import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
//import { NgSelectModule } from '@ng-select/ng-select';
//import { NgxDatatableModule } from '@swimlane/ngx-datatable';
//import { NgPipesModule } from 'ngx-pipes';
//import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
//import { DollarComponent } from './components/dollar/dollar.component';
//import { FooterComponent } from './components/footer/footer.component';
//import { NavItemComponent } from './components/navigation/nav-item/nav-item.component';
//import { NavigationComponent } from './components/navigation/navigation.component';
//import { PhireButtonGroupComponent } from './components/phire-button-group/phire-button-group.component';
//import { TfIconComponent } from './components/tf-icon/tf-icon.component';
import { MaterialModule } from './material.module';
//import { CustomPipesModule } from './pipes/custom-pipes.module';

// sharedModules are going to be available for all modules that import SharedModule
const sharedModules = [
  MaterialModule,
 // CustomPipesModule,
  HttpClientModule,
 // NgPipesModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
 // NgSelectModule,
 // NgxDatatableModule
];

// componentItems are going to be available for all modules that import SharedModule
// if a component should not be available outside of the SharedModule,
// only include it in the declarations and exclude it from the componentItems
//const componentItems = [
//  PhireButtonGroupComponent,
//  NavigationComponent,
//  NavItemComponent,
//  FooterComponent,
//  TfIconComponent,
//  ConfirmationDialogComponent,
//  DollarComponent
//];

const resolvers = [];
@NgModule({
  declarations: [], // add componentItems when defined
  imports: [CommonModule, sharedModules],
  exports: [sharedModules] // add componentItems when defined
})
export class SharedModule {}