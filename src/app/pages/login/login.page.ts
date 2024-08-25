import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginPageForm } from './login.page.form';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form!: FormGroup; // Define the form property

  constructor(private router: Router, private formBuilder: FormBuilder) { }


  ngOnInit() {
    // Initialize the form using LoginPageForm
    this.form = new LoginPageForm(this.formBuilder).createForm();
  }

  login() {
    // Navigate to the home page
    if (this.form.valid) {
      this.router.navigate(['home']);
    }
  }

  register() {
    // Navigate to the register page
    this.router.navigate(['register']);
  }
}
