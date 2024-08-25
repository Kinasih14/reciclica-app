import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PickupCallPage } from './pickup-call.page';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('PickupCallPage', () => {
  let component: PickupCallPage;
  let fixture: ComponentFixture<PickupCallPage>;
  let router: Router;

  beforeEach(() => {
    fixture = TestBed.createComponent(PickupCallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PickupCallPage],
      imports: [IonicModule.forRoot(),
        AppRoutingModule], // Correct placement of AppRoutingModule
    }).compileComponents();

    fixture = TestBed.createComponent(PickupCallPage);
    router = TestBed.get(Router); // Use TestBed.inject instead of TestBed.get
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go to home on create new pickup call', () => {
    spyOn(router, 'navigate');

    component.newPickupCall();

    expect(router.navigate).toHaveBeenCalledOnceWith(['home']);
  });
});
