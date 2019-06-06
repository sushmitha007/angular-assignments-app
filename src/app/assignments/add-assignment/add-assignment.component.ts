import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Assignment} from '../assignement.model';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { MatSnackBar } from '@angular/material';
import { SnackbarComponent } from 'src/app/snackbar/snackbar.component';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
  [x: string]: any;
  name:string;
  dueDate:Date;
  // @Output() newAssignment = new EventEmitter<Assignment>();
  newAssignment:Assignment;
  constructor(private assignmentsService:AssignmentsService,private snackBar:MatSnackBar) { }

  ngOnInit() {
    // setTimeout( () =>{
    //   this.enabled=true
    // },2000);
  }
  onSubmit() {
    const assignment = new Assignment(); 
    assignment.name = this.name;
    assignment.dueDate = this.dueDate;
    assignment.submitted = false;
    this.assignmentsService.addAssignment(assignment)
    this.openSnackBar();
  }
  openSnackBar(){
    this.snackBar.openFromComponent(SnackbarComponent, {duration:1000 });
  }
}
