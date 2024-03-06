import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
})
export class LoginComponent {
  formData = {
    username: '',
    password: '',
    isLoged: false,
  };

  login() {
    if (
      this.formData.username === 'Liza' &&
      this.formData.password === '1111'
    ) {
      this.formData.isLoged = true;
    } else {
      this.formData.isLoged = false;
    }
  }
}
