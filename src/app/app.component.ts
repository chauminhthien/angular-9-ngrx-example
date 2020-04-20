import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import AppState from './store/model';
import { TodoItemState } from './store/todo/model';
import { TodoAdd } from './store/todo/action';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  list: Observable<TodoItemState[]>;

  constructor(private store: Store<AppState>) { 
    this.list = this.store.select(state => state.todo.data);
  }
  ngOnInit(){
    setTimeout(() => {
      this.store.dispatch(new TodoAdd({
        id: +(new Date()),
        name: "ascasc",
        level: 2
      }))
    }, 2000)
  }
}
