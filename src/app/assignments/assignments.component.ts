import { Component, OnInit } from '@angular/core';
import { Assignment} from './assignement.model'
import { AssignmentsService } from '../shared/assignments.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  title = 'My Assigments Application';
  enabled = false;
  formVisible = false;
  name:string;
  dueDate:Date;
  selectedAssignment:Assignment;
  assignments: Assignment[];
  constructor(private assignmentsService: AssignmentsService,
    private router:Router) { }

  ngOnInit() {
    // this.assignments = this.assignmentsService.getAssignments();
    this.getAssignments();
  }
  getAssignments(){
    this.assignmentsService.getAssignments().
    subscribe(assignments=>this.assignments = assignments)
  }
//   onSubmit() {
//     const assignment = new Assignment(); 
//     assignment.name = this.name;
//     assignment.dueDate = this.dueDate;
//     assignment.submitted = false;
//     this.assignments.push(assignment)
  

// }

setSelected(assignment: Assignment) {
  // this.selectedAssignment = assignment;

  this.router.navigate(['/assignment/' + assignment.id]);
}
addOnBtnClick() {
// this.formVisible = true;
this.selectedAssignment = null;
}
// onNewAssignment(event:Assignment){
//   this.assignmentsService.addAssignment(event).subscribe(success=> console.log(success));
//   this.formVisible = false;
// }
}
