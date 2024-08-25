import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RegisterPage } from './register.page';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('RegisterPage', () => {
  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterPage],
      imports: [IonicModule.forRoot(), AppRoutingModule], // Correct placement of AppRoutingModule
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterPage);
    router = TestBed.get(Router); // Use TestBed.inject instead of TestBed.get
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go to home page on register', () => {
    spyOn(router, 'navigate'); // Spy on the navigate method

    component.register();

    expect(router.navigate).toHaveBeenCalledWith(['home']); // Use toHaveBeenCalledWith
  });
});
