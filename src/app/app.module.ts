import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {TodoHeaderComponent} from './components/header/header.component';
import {TodoContentComponent} from './components/content/content.component';
import {TodoFooterComponent} from './components/footer/footer.component';
import {TodoService} from './services/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoHeaderComponent,
    TodoContentComponent,
    TodoFooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
