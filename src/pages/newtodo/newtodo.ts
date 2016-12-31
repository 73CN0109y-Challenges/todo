import { Component } from '@angular/core';
import { NavController, Tabs } from 'ionic-angular';

import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todoService';

@Component({
  selector: 'todo-new',
  templateUrl: 'newtodo.html'
})
export class NewTodoPage {
  todo: Todo = new Todo();

  constructor(public navCtrl: NavController, private todoService: TodoService) {

  }

  save(cancel: boolean = false) {
    if(!cancel) this.todoService.add(this.todo);
    this.todo = new Todo();
    let t: Tabs = this.navCtrl.parent;
    t.select(0);
  }

  updateTitle(e: Event) {
    this.todo.Title = e.target['value'];
  }
}
