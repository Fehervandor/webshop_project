import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { HotToastService } from '@ngneat/hot-toast'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private authService: AuthService, 
              private router: Router, 
              private toast: HotToastService) {}

  ngOnInit(): void {
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  submit() {
    if(!this.loginForm.valid) {
      return;
    }

    const { email, password } = this.loginForm.value;
    this.authService.login(email, password).pipe(
      this.toast.observe({
        success: 'Logged in succesfully',
        loading: 'Logging in...',
        error: 'There was an error'
      })
    ).subscribe(() => {
      this.router.navigate(['/home']);
    });

  }

}
