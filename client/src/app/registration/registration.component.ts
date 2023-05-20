import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegisterComponent {
  hide: boolean = true;
  username: string = '';
  isUserNameValid = true;
  password: string = '';
  isPasswordNameValid = true;
  responseErrorMessage = '';

  constructor(private router: Router) {
    localStorage.removeItem('jwt');
  }

  async submitHandler(event: Event) {
    event.preventDefault();
    if (this.username.length < 3) {
      this.isUserNameValid = false;
      return;
    }
    if (this.password.length < 3) {
      this.isPasswordNameValid = false;
      return;
    }
    // Reset the state
    this.isUserNameValid = true;
    this.isPasswordNameValid = true;
    this.responseErrorMessage = '';

    const requestOptions: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.username,
        password: this.password,
      }),
      redirect: 'follow',
    };

    fetch('http://localhost:5000/register', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status === 'error') {
          this.responseErrorMessage = result.data;
        } else {
          localStorage.setItem('jwt', result.access_token);
          this.router.navigate(['/login']);
        }
      })
      .catch((error) => console.log('error', error));
  }
}
