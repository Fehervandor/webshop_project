import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from '../shared/services/auth.service';
import { User } from '../models/User';
import { UsersService } from '../shared/services/users.service';

export function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if(password && confirmPassword && password !== confirmPassword) {
      return {
        passwordsDontMatch: true
      }
    }

    return null;
  };
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user: User = {
    name: '',
    email: '',
    id: ''
  }

  signUpForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  }, {validators: passwordMatchValidator() })

  constructor(private authService: AuthService, private toast: HotToastService, private router: Router, private auth: AngularFireAuth, private userService: UsersService) { }

  ngOnInit(): void {
    console.log(this.user?.name)
  }

  get name() {
    return this.signUpForm.get('name');
  }

  get email() {
    return this.signUpForm.get('email');
  }


  get password() {
    return this.signUpForm.get('password');
  }

  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }

  submit() {
    if(!this.signUpForm.valid) return;
    this.userService.addItem(this.user);
    

    const { name, email, password} = this.signUpForm.value;
    this.authService.signUp(name, email, password).pipe(
      this.toast.observe({
        success: 'Congrats! You are all signep up',
        loading: 'Signing in',
        error: ({ message }) => `${message}`
      })).subscribe(() => {
      this.auth.signOut();
      this.router.navigate(['/login']);
    })
  }



}
