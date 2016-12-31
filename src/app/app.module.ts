import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { MyApp } from './app.component';
import { NewTodoPage } from '../pages/newtodo/newtodo';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    NewTodoPage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NewTodoPage,
    HomePage,
    TabsPage
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler,
    },
    Storage
  ]
})
export class AppModule { }
