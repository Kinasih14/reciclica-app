import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HomePage } from './home.page';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule
      ]
    }).compileComponents();
      fixture = TestBed.createComponent(HomePage);
      router = TestBed.get(Router);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }));

  it('should go to pickup-calls, on see all', () => {

    spyOn(router, 'navigate');
    component.goToPickupCalls();

    expect(router.navigate).toHaveBeenCalledOnceWith(['pickup-calls']);
  });

  it('should go to pickup-call, on create pickup call', () => {

    spyOn(router, 'navigate');
    component.goToPickupCall();

    expect(router.navigate).toHaveBeenCalledOnceWith(['pickup-call']);
  });
});
