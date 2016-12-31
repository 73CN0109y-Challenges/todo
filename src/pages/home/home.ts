import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todoService';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  todos: Todo[] = [];

  constructor(public navCtrl: NavController, private todoService: TodoService, private toastCtrl: ToastController) {
    this.todoService.dataChanged.subscribe(data => this.todos = data);
  }

  remove(index: number) {
    this.todoService.remove(index);
    this.toastCtrl.create({
      message: 'Todo has been removed!',
      duration: 3000,
      position: 'top'
    }).present();
  }
}
