import { Component, OnInit, Input } from '@angular/core';
import { Reminder } from '../reminderclass';

@Component({
  selector: 'app-reminder-detail',
  templateUrl: './reminder-detail.component.html',
  styleUrls: ['./reminder-detail.component.css']
})
export class ReminderDetailComponent implements OnInit {

  @Input() reminder: Reminder;
  
  constructor() { }

  ngOnInit() {
  }

}
