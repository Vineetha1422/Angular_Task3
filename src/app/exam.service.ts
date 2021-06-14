import { ExamDetails } from './exam-details';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor() { }

  getAllExams():ExamDetails[]
  {
    let e1 : ExamDetails = {
        examId : 201,
        examType : "ANALYTICAL",
        maxMarks : 75,
        subject : "English",
        examdatetime : new Date(2021,4,6,10,30,0)
    }

    let e2 : ExamDetails = {
        examId : 202,
        examType : "MCQS",
        maxMarks : 20,
        subject : "Science",
        examdatetime : new Date(2021,4,6,14,30,0)
    }

    let e3 : ExamDetails = {
        examId : 203,
        examType : "DESCRIPTIVE",
        maxMarks : 100,
        subject : "Social",
        examdatetime : new Date(2021,7,19,14,0,0)
    }

    let e4 : ExamDetails = {
        examId : 204,
        examType : "ANALYTICAL",
        maxMarks : 75,
        subject : "Math",
        examdatetime : new Date(2021,1,23,14,30,0)
    }

    
    return [e1,e2,e3,e4];
  }

}//end of service class

