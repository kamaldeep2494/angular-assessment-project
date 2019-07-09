import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './WarningAlert/WarningAlert.component';
import { DirectivePracticeComponent } from './directive-practice/directive-practice.component';
@NgModule({
  declarations: [
    AppComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    DirectivePracticeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
