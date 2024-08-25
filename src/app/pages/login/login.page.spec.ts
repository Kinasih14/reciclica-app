import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
  TestBed.configureTestingModule({
    declarations: [LoginPage],
    imports: [
      IonicModule.forRoot(),
      AppRoutingModule,
      ReactiveFormsModule
    ]
  }).compileComponents();
    fixture = TestBed.createComponent(LoginPage);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create form on init', () => {
    component.ngOnInit();
    expect(component.form).toBeDefined(); // Use toBeDefined() to check if the form is defined
  });

  it('should go to home page on login', () => {
    spyOn(router, 'navigate');

    component.login();

    expect(router.navigate).toHaveBeenCalledWith(['home']);
  });

  it('hould go to home page on register', () => {
    spyOn(router, 'navigate');
    component.register();

    expect(router.navigate).toHaveBeenCalledWith(['register']);
});
});
