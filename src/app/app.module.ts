import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RemindersComponent } from './reminders/reminders.component';
import { FormsModule } from '@angular/forms';
import { ReminderDetailComponent } from './reminder-detail/reminder-detail.component'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    RemindersComponent,
    ReminderDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
