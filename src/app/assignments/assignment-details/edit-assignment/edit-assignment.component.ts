import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Assignment } from '../../assignement.model';

@Component({
  selector: 'app-edit-assignment',
  templateUrl: './edit-assignment.component.html',
  styleUrls: ['./edit-assignment.component.css']
})
export class EditAssignmentComponent implements OnInit {
  assignmentName:string;
  dueDate:Date;
  assignment:Assignment;
  constructor(private route:ActivatedRoute,
    private router:Router,
    private assignmentsService:AssignmentsService) { }

  ngOnInit() {
    const id = +this.route.snapshot.params.id;
    this.getAssignment(id);
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    this.route.queryParams.subscribe(params=>console.log(params))

    
  }
  getAssignment(id){
    this.assignmentsService.getAssignment(id).subscribe(
      assignment=>this.assignment=assignment);
  }
  onSaveAssignment(){
    if(this.assignmentName){
      this.assignment.name =this.assignmentName;
    }
    if(this.dueDate){
      this.assignment.dueDate = this.dueDate;
    }
    this.assignmentsService.updateAssignment(this.assignment)
    .subscribe(assignment=>console.log(assignment+ 'updated'));
    this.router.navigate(['/home'])

  }

}
