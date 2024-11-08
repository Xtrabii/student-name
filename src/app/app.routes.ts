import { Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';

export const routes: Routes = [
  { path: 'students', component: StudentComponent },
  { path: '', redirectTo: '/students', pathMatch: 'full' },
  // add other routes as needed
];
