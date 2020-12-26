import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LegalNotificationComponent } from './legal-notification/legal-notification.component';
import { MinorNotificationComponent } from './minor-notification/minor-notification.component';

@NgModule({
  declarations: [
    AppComponent,
    LegalNotificationComponent,
    MinorNotificationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
