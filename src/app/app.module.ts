import { APP_INITIALIZER, NgModule } from '@angular/core';
import { NoPreloading, RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '@shared'
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';

// export function initUser(userService: UserService): () => any {
//   return () => userService.getIdentity();

    // // getIdentity(): Promise<any> {
    // //   return this.http.get<User>(`${environment.baseUrl}/common/GetIdentity`)
    // //       .toPromise().then((result: User) => {
    // //           if(result)
    // //              console.info(`Identity information for ${result.umsUserId} loaded successfully.`);

    // //           this.identity = result;
    // //           return result;
    // //       }, (error: any) => {
    // //           console.error('Could not get identity information from the server!');
    // //           console.error(error);
    // //           return error;
    // //       });
    // // }

// }

// export function getEnvironment(bootstrapService: BootstrapService): () => any {
//   return () => bootstrapService.getEnvironmentName();

@NgModule({
  imports: [ 
    BrowserModule, 
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  //providers: [
  //  { provide: APP_INITIALIZER, useFactory: initUser, multi: true, deps: [UserService] },
  //  { provide: APP_INITIALIZER, useFactory: getEnvironment, multi: true, deps: [BootstrapService] },
  //  httpInterceptorProviders
  //],
})
export class AppModule { }
