import { Component, OnInit, Input } from '@angular/core';
import { Assignment } from '../assignement.model';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-assignment-details',
  templateUrl: './assignment-details.component.html',
  styleUrls: ['./assignment-details.component.css']
})
export class AssignmentDetailsComponent implements OnInit {
  // @Input() passedAssignment:Assignment;
  passedAssignment:Assignment;
  constructor(private assignmentService:AssignmentsService,private route:ActivatedRoute,
    private router:Router,private authService:AuthService) { }

  ngOnInit() {
    this.getAssignment();
  }
  getAssignment(){
    const id = +this.route.snapshot.params.id;
    this.assignmentService.getAssignment(id).subscribe(assignment=>this.passedAssignment=assignment);
  }
  onAssignmentSubmitted(){
    this.passedAssignment.submitted = true;
    this.assignmentService.updateAssignment(this.passedAssignment)
    .subscribe(res => console.log(res))

  }
  onDelete(){
  this.assignmentService.deleteAssignment(this.passedAssignment)
  .subscribe(res =>console.log(res))  
  // this.passedAssignment = null;  
  this.router.navigate(['/home']);

  }
  onClickEdit(){
    this.router.navigate(['/assignment',this.passedAssignment.id,'edit'],{queryParams:{name:this.passedAssignment.name},fragment:'editing'});
  }
  isAdmin():boolean{
    return this.authService.loggedIn
  }

}
