import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SearchComponent } from './search/search.component';
import { NewBranchComponent } from './new-branch/new-branch.component';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';
import {NgOptimizedImage} from "@angular/common";
import { RegistrComponent } from './registr/registr.component';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    NotificationsComponent,
    SearchComponent,
    NewBranchComponent,
    LoginComponent,
    PostComponent,
    RegistrComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgOptimizedImage,
        FormsModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
          enabled: !isDevMode(),
          // Register the ServiceWorker as soon as the application is stable
          // or after 30 seconds (whichever comes first).
          registrationStrategy: 'registerWhenStable:30000'
        })
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
