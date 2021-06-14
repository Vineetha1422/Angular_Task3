import { StudentDetails } from './student-details';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StudentService {


  constructor() { }

  imageRootPath:string = 'assets/student.jpg';

  // include code to hit springboot endpoints {}
  getAllStudents(): StudentDetails[]
  {
    let student1 : StudentDetails = {
        imageName: 'assets/student.jpg',
        studentId : 501,
        studentName : 'Chris',
        classId : '7B',
        assignedExamId : 204,
        examStatus : 'Attempted',
        result : "Pass"
        
    }
    let student2 : StudentDetails = {
        imageName: 'assets/student.jpg',
        studentId : 502,
        studentName : 'Felix',
        classId : '6A',
        assignedExamId : 202,
        examStatus : 'Attempted',
        result : "Pass"
        
    }
    let student3 : StudentDetails = {
        imageName: 'assets/student.jpg',
        studentId : 503,
        studentName : 'Kevin',
        classId : '5B',
        assignedExamId : 201,
        examStatus : 'Not Attempted',
        result : 'NA'
        
    }
    let student4 : StudentDetails = {
        imageName: 'assets/student.jpg',
        studentId : 504,
        studentName : 'Mark',
        classId : '7B',
        assignedExamId : 204,
        examStatus : 'Not Attempted',
        result : 'NA'
        
    }
    let student5 : StudentDetails = {
        imageName: 'assets/student.jpg',
        studentId : 505,
        studentName : 'Jacob',
        classId : '9A',
        assignedExamId : 203,
        examStatus : 'Attempted',
        result : 'Fail'
        
    }

    
    return [student1,student2,student3,student4,student5];
  }//end of getAll Products from Server

}//end of service class
