import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ErrorMessageComponent } from './error-message.component';
import { FormControl, FormGroup } from '@angular/forms';

describe('ErrorMessageComponent', () => {
  let component: ErrorMessageComponent;
  let fixture: ComponentFixture<ErrorMessageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorMessageComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create the component', () => {
    expect(component).toBeTruthy(); // Corrected assertion syntax
  });

  it('should show error message on field touched and error present', () => {
    component.field = new FormGroup({
      anyField: new FormControl()
    });

    component.field.get('email')!.markAsTouched();
    component.field.get('email')!.setErrors({ required: true });
    component.error = "anyError";
    fixture.detectChanges();

    expect(component.shouldshowComponent()).toBeTruthy();
  });

  it('should hide error message on field not touched', () => {
    component.field = new FormGroup({
      anyField: new FormControl()
    });

    component.field.get('email')!.setErrors({ required: true });
    component.error = "anyError";
    fixture.detectChanges();

    expect(component.shouldshowComponent()).toBeFalsy();
  });

  it('should hide error message on field touched, but no error', () => {
    component.field = new FormGroup({
      anyField: new FormControl()
    });
    component.field.get('email')!.markAsTouched();
    component.field.get('email')!.setErrors({ required: true });
    fixture.detectChanges();

    expect(component.shouldshowComponent()).toBeFalsy();
  });

  it('should hide error message on field touched and has error, but it is a diffenrent error', () => {
    component.field = new FormGroup({
      anyField: new FormControl()
    });

    component.field.get('email')!.markAsTouched();
    component.field.get('email')!.setErrors({ required: true });
    component.error = "anyError";
    fixture.detectChanges();

    expect(component.shouldshowComponent()).toBeFalsy();
  });
});
