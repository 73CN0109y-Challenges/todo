import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Storage } from '@ionic/storage';

import { Todo } from '../models/todo';

@Injectable()
export class TodoService {
    todos: Todo[] = [];
    public dataChanged: Subject<Todo[]> = new Subject<Todo[]>();

    constructor(private storage: Storage) {
        this.storage.get('todo').then(data => {
            if(!data) this.storage.set('todo', '[]');
            else this.todos = JSON.parse(data);
            this.dataChanged.next(this.todos);
        });
    }

    get getData(): Todo[] {
        return this.todos;
    }

    add(item: Todo) {
        this.todos.push(item);
        this.updateStorage();
        this.dataChanged.next(this.todos);
    }

    remove(index: number) {
        if (index <= this.todos.length - 1)
            this.todos.splice(index, 1);
        this.updateStorage();
        this.dataChanged.next(this.todos);
    }

    clear() {
        this.todos = [];
        this.updateStorage();
        this.dataChanged.next(this.todos);
    }

    updateStorage() {
        this.storage.set('todo', JSON.stringify(this.todos));
    }
}