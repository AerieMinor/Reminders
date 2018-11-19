import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'call-mom';
  call = 'Call Mom'
  remind = 'Remind me on a day and time'
  status = 'High'
  message = 'Call Mom to wish her a happy birthday'
}
