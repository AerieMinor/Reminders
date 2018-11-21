import { Component, OnInit } from '@angular/core';
import { Reminder } from '../reminderclass';
import {REMINDERS} from '../listreminders';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.css']
})
export class RemindersComponent implements OnInit {

  reminders = REMINDERS;
  selectedReminder: Reminder;

  constructor() { }

  ngOnInit() {
  }
  
onSelect(reminder: Reminder) : void{
  this.selectedReminder = reminder;
}
}
