import {TestBed, async, fakeAsync, tick, ComponentFixture, inject} from '@angular/core/testing';
import {LoginComponent} from './login.component';
import {AuthService} from "./auth.service";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

class MockAuthService extends AuthService {
    isAuthenticatedAsync() {
      return Promise.resolve(true);
    }

    isAuthenticated() {
        return true;
      }
  }

describe('Component: Login (async)', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let authService: AuthService;
    let el: DebugElement;
    let componentService: AuthService;
    beforeEach(() => {

        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
          providers: [AuthService],
          declarations: [LoginComponent]
        });

        TestBed.overrideComponent(
            LoginComponent,
            {set: {providers: [{provide: AuthService, useClass: MockAuthService}]}}
        );

        // create component and test fixture
        fixture = TestBed.createComponent(LoginComponent);

        // get test component from the fixture
        component = fixture.componentInstance;
    
        // UserService provided to the TestBed
        authService = TestBed.get(AuthService);

        componentService = fixture.debugElement.injector.get(AuthService);
    });

    it('Service injected via inject(...) and TestBed.get(...) should be the same instance',
        inject([AuthService], (injectService: AuthService) => {
            expect(injectService).toBe(authService);
        }));

    it('Component needslogin should return false', () => {
        expect(component.needsLogin()).toBe(false);
    });
    
    it('Service injected via component should be and instance of MockAuthService', () => {
        expect(componentService instanceof MockAuthService).toBeTruthy();
      });

});