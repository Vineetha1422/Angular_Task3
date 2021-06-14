import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AllExamsComponent } from './all-exams/all-exams.component';
import { AllStudentsComponent } from './all-students/all-students.component';

@NgModule({
  declarations: [
    AppComponent,
    AllExamsComponent,
    AllStudentsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
