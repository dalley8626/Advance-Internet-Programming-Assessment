import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Counter} from './counter';


@Injectable()
export class CounterService {

  constructor(private http: HttpClient) {

  }

  getCount() {
    return this.http.get('http://localhost:3000/counters', {});
  }
}
