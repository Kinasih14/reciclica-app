import { ComponentFixture, fakeAsync, TestBed, waitForAsync, tick } from '@angular/core/testing'; // Import tick
import { IonicModule } from '@ionic/angular';
import { LoaderPage } from './loader.page';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('LoaderPage', () => {
  let component: LoaderPage;
  let fixture: ComponentFixture<LoaderPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoaderPage],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoaderPage);
    router = TestBed.inject(Router);

    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go to login page after load', fakeAsync(() => {
    spyOn(router, 'navigate');

    component.ngOnInit();
    
    tick(1500); // Adjust the time to match any asynchronous delay in your component

    expect(router.navigate).toHaveBeenCalledWith(['login']);
  }));
});
