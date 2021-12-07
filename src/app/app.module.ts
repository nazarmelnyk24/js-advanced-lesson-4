import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhonebookInputComponent } from './components/phonebook-input/phonebook-input.component';
import { SearchPipe } from './search.pipe';
import { SortPipe } from './sort.pipe';
import { SortlnamePipe } from './sortlname.pipe';
import { SortnumberPipe } from './sortnumber.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PhonebookInputComponent,
    SearchPipe,
    SortPipe,
    SortlnamePipe,
    SortnumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
