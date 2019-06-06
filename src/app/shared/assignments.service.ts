import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignement.model';
import { Observable,of } from 'rxjs';
import { LoggingService } from './logging.service';
@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  assignments: Assignment[] = [{
    id:1,
    name: 'One',
    dueDate: new Date('2019-08-05'),
    submitted: true
  },
  {
    id:2,
    name: 'Two',
    dueDate: new Date('2019-08-06'),
    submitted: false
  }]
  constructor(private loggingService:LoggingService) { }

  getAssignments(): Observable<Assignment[]> {
    return of(this.assignments)
  }
  getAssignment(id:number): Observable<Assignment>{
    return of(this.assignments.find(x=>x.id=== id));
  }
  addAssignment(assignement:Assignment): Observable<string> {
    this.assignments.push(assignement);
    this.loggingService.log(assignement.name,'added');
    return of('assignment added!')
  }
  updateAssignment(newAssignment:Assignment): Observable<string> {
    this.assignments.forEach((assignment,i)=>{
      if(assignment === newAssignment){
        this.assignments[i] =newAssignment;
      }});
      this.loggingService.log(newAssignment.name,'updated')
      return of("assignment updated!")

    }
    deleteAssignment(deletedAssignment:Assignment): Observable<string> {
      this.assignments.forEach((assignment,i)=>{
        if(assignment === deletedAssignment){
          this.assignments.splice(i,1);
        }
      });
      this.loggingService.log(this.deleteAssignment.name,'delelted')
      return of('assignment deleted successfully')
    }
    
  }
