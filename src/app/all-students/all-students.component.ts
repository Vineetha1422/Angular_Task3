import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { StudentDetails } from '../student-details';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent implements OnInit {

  __studentService:StudentService;
 unitsInfee:number = 0; 

 

 constructor(ps:StudentService) { 
   this.__studentService = ps;
 }

  ngOnInit(): void {
  }

  getAllStudents():StudentDetails[]
  {
    return this.__studentService.getAllStudents();
  }

}
