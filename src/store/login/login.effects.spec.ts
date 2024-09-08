import { Observable, of, throwError } from 'rxjs';
import { LoginEffects } from './login.effects';
import { Action, StoreModule } from '@ngrx/store';
import { login, loginFail, loginSuccess, recoverPassword, recoverPasswordFail, recoverPasswordSuccess } from './login.actions';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { AuthService } from 'src/app/services/auth/auth.service';
import { provideMockActions } from '@ngrx/effects/testing';
import { User } from 'src/app/model/user/User';

describe('Login effects', () => {
  let effects: LoginEffects;
  let actions$: Observable<Action>;
  const error = { error: 'error' };
  const user = new User();
  user.id = 'anyUserId';

  const authServiceMock = {
    recoverEmailPassword: (email: string) => {
      if (email === 'error@email.com') {
        return throwError(() => error);  // Updated syntax for throwError
      }
      return of({});
    },
    login: (email: string, password: string) => {
      if (email === 'error@email.com') {
        return throwError(() => error);  // Updated syntax for throwError
      }
      return of(user);
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([LoginEffects])
      ],
      providers: [
        provideMockActions(() => actions$),
        { provide: AuthService, useValue: authServiceMock } // Provide the mock service
      ]
    });

    effects = TestBed.inject(LoginEffects);  // Use TestBed.inject instead of TestBed.get
  });

  it('should recover password with existing email and return success', (done) => {
    actions$ = of(recoverPassword({ email: 'any@email.com' }));

    effects.recoverPassword$.subscribe(newAction => {
      expect(newAction).toEqual(recoverPasswordSuccess());
      done();
    });
  });

  it('should recover password with non-existing email and return an error', (done) => {
    actions$ = of(recoverPassword({ email: 'error@email.com' }));

    effects.recoverPassword$.subscribe(newAction => {
      expect(newAction).toEqual(recoverPasswordFail({ error }));
      done();
    });
  });

  it('should login with valid credentials and return success', (done) => {
    actions$ = of(login({ email: 'valid@email.com', password: 'anyPassword' }));

    effects.login$.subscribe(newAction => {
      expect(newAction).toEqual(loginSuccess({ user }));
      done();
    });
  });

  it('should login with invalid credentials and return error', (done) => {
    actions$ = of(login({ email: 'error@email.com', password: 'anyPassword' }));

    effects.login$.subscribe(newAction => {
      expect(newAction).toEqual(loginFail({ error }));
      done();
    });
  });
});
