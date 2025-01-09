import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  constructor(private router:Router) { }

  courses = [
    { id: 1, name: 'Web Design & Development Course for Beginners ', instructor: 'John Doe', price: 100,students:26 ,time:'1.5 Hrs',Image:'../../assets/img/course-1.jpg'  },
    { id: 2, name: 'Android App Development', instructor: 'Jane Doe', price: 150,students:30,time:'2 Hrs',Image:'../../assets/img/android.jpg' },
    { id: 3, name: 'Cyber Security', instructor: 'Smith ', price: 200,students:40,time:'2.5 Hrs',Image:'../../assets/img/cyber-security.jpg' },
    { id: 4, name: 'Data Science', instructor: 'John Smith', price: 250,students:50,time:'3 Hrs',Image:'../../assets/img/data-science.jpg' },
    { id: 5, name: 'Machine Learning', instructor: 'Jane Smith', price: 300,students:60,time:'4 Hrs',Image:'../../assets/img/machine-learning.jpg' },
    { id: 6, name: 'Cloud Computing', instructor: 'Dale Styn', price: 350,students:70,time:'5 Hrs',Image:'../../assets/img/cloud-computing.jpg' },
    { id: 7, name: 'Full Stack Development', instructor: 'Olivia Carter', price: 400,students:80,time:'6.5 Hrs',Image:'../../assets/img/course-2.jpg' },
    { id: 8, name: 'Ethical Hacking', instructor: 'John Carter', price: 450,students:90,time:'7 Hrs',Image:'../../assets/img/Hacking.jpg' },
    { id: 9, name: 'Internet of Things', instructor: 'Jane Carter', price: 500,students:100, time:'8 Hrs',Image:'../../assets/img/iot.jpg' },
    { id: 10, name: 'Artificial Intelligence', instructor: 'Smith Carter', price: 550,students:110,time:'9 Hrs',Image:'../../assets/img/AI.jpg' },
    { id: 11, name: 'Blockchain', instructor: 'John Doe', price: 600,students:120,time:'10 Hrs',Image:'../../assets/img/bloackchain.jpg' },
    { id: 12, name: 'Quantum Computing', instructor: 'Jane Doe', price: 650,students:130,time:'11 Hrs',Image:'../../assets/img/quantum.jpg' },
    
  ];

  onEnroll(course: any) {
    alert(`You have successfully enrolled in ${course.name} course`);
    


  }
  oReadMore(course:any){
    alert(`You have clicked on Read More of ${course.name} course`);

  }

}
