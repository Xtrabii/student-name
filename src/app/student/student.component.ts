import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [FormsModule, CommonModule],  // Include FormsModule and CommonModule
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  students = [
    { name: 'Tom', lastName: 'Hardy' },
    { name: 'We', lastName: 'are' }
  ];
  newStudent = { name: '', lastName: '' };
  editingStudent: boolean = false;
  studentName: string = '';
  studentLastName: string = '';

  addStudent() {
    this.students.push({
      name: this.newStudent.name,
      lastName: this.newStudent.lastName
    });
    this.newStudent.name = '';
    this.newStudent.lastName = '';
  }

  editStudent(index: number) {
    const student = this.students[index];
    this.studentName = student.name;
    this.studentLastName = student.lastName;
    this.editingStudent = true;
  }

  saveStudent() {
    // Find the index of the student being edited
    const index = this.students.findIndex(
      (student) => student.name === this.studentName
    );
    if (index !== -1) {
      this.students[index] = { name: this.studentName, lastName: this.studentLastName };
    }
    this.editingStudent = false;
  }

  deleteStudent(index: number) {
    this.students.splice(index, 1);
  }
}
