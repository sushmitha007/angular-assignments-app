import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatListModule, MatCardModule, MatCheckboxModule, MatSlideToggleModule, MatTabsModule, MatStepperModule, MatSnackBar, MatSnackBarModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { SubmittedDirective } from './shared/submitted.directive';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AssignmentDetailsComponent } from './assignments/assignment-details/assignment-details.component';
import { AddAssignmentComponent } from './assignments/add-assignment/add-assignment.component';
import {AssignmentsService} from './shared/assignments.service';
import { Route, RouterModule, Routes } from '@angular/router';
import { EditAssignmentComponent } from './assignments/assignment-details/edit-assignment/edit-assignment.component';
import { AuthGuard } from './shared/auth.guard';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';


const routes : Routes = [
{path:'',component:AssignmentsComponent},
{path:'home', component:AssignmentsComponent},
{path:'add',component:AddAssignmentComponent},
{path:'assignment/:id', component:AssignmentDetailsComponent},
{path:'assignment/:id/edit',
canActivate:[AuthGuard],
component:EditAssignmentComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    AssignmentsComponent,
    SubmittedDirective,
    AssignmentDetailsComponent,
    AddAssignmentComponent,
    EditAssignmentComponent,
    SnackbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatCardModule,
    MatCheckboxModule,
    RouterModule.forRoot(routes),
    MatSlideToggleModule,
    MatTabsModule,
    MatStepperModule,
    MatSnackBarModule,
    ScrollingModule,
    DragDropModule

  ],
  entryComponents:[
    SnackbarComponent
  ],
  providers: [AssignmentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
// mongodb+srv://sushmitha:<password>@cluster0-1hiwi.mongodb.net/test?retryWrites=true