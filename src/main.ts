import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { RouterModule } from '@angular/router';
import { routes } from './app/app.routes'; // Adjust the path according to your project

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes) // This replaces the older use of RouterModule.forRoot
  ]
});
