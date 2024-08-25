import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegisterPageRoutingModule } from './register-routing.module';  // Import your routing module
import { RegisterPage } from './register.page';  // Import the RegisterPage component
import { Router } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule  // Include routing module
  ],
  declarations: [RegisterPage]  // Declare RegisterPage component
})

export class RegisterPageModule implements OnInit {

  constructor(private router: Router) {}  // Correctly inject Router

  ngOnInit(): void {}

  register() {
    this.router.navigate(['home']);  // Corrected navigation syntax
  }
}
