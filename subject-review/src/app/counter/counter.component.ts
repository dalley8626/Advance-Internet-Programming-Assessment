import { Component, OnInit } from '@angular/core';
import {SubjectService} from '../services/subject.service';
import {CounterService} from './counter.service';
import {Subject} from '../models/subject';
import {Counter} from './counter';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  providers: [CounterService]
})
export class CounterComponent implements OnInit {
  textValue = 'initial value';
  flag: boolean;
  isHigher: boolean;
  counter: Counter;

  constructor(private counterService: CounterService) { this.counter = new Counter; }

  ngOnInit() {
    this.getCount();
  }

  getCount(): void {
    this.counterService.getCount()
    // TODO, it is shoing first four subjects but later it is to display the best rated subjects
      .subscribe(result => this.counter = result['data']);
  }


  addTodo(title: string) {
    if (title === this.counter.name) {
      console.log('yes');
      this.flag = true;
    }
    else if (title < this.counter.name) {
      console.log('try higher');
      this.flag = false;
      this.isHigher = false;
    }
    else {
      console.log('try lower');
      this.flag = false;
      this.isHigher = true;
    }
  }

}
