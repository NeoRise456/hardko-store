import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import { Router } from '@angular/router';
import { AuthService } from '../data-accsess/auth.service';
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'app-log-in-page',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './log-in-page.component.html',
  styles: ``
})
export default class LogInPageComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(event: Event) {
    event.preventDefault();
    this.authService.login(this.email, this.password).subscribe(
      response => {
        // Handle successful authentication
        console.log('Login successful', response);
        this.router.navigate(['/products']);
      },
      error => {
        // Handle authentication error
        console.error('Login failed', error);
      }
    );
  }
}
