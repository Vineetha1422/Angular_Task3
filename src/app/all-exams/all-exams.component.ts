import { Component, OnInit } from '@angular/core';
import { ExamDetails } from '../exam-details';
import { ExamService } from '../exam.service';

@Component({
  selector: 'app-all-exams',
  templateUrl: './all-exams.component.html',
  styleUrls: ['./all-exams.component.css']
})
export class AllExamsComponent implements OnInit {

  __examService:ExamService;
  noOfExams : number = 0;

  constructor(ps:ExamService) { 
   this.__examService = ps;
 }


  ngOnInit(): void {
  }

  getAllExams():ExamDetails[]
  {
    return this.__examService.getAllExams();
  }

  viewExam(exam : any){
    console.log("Exam Details :");
    console.log(exam);
  }

  addNewExam(){
    console.log("Not yet done!")
  }

}
