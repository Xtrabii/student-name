import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';  // Import RouterModule
import { FormsModule } from '@angular/forms';  // Import FormsModule if needed

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule  // Add other necessary modules
  ],
})
export class AppModule { }
