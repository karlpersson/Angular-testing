import {TestBed, async, fakeAsync, tick, ComponentFixture} from '@angular/core/testing';
import {LoginComponent} from './login.component';
import {AuthService} from "./auth.service";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

describe('Component: Login (async)', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let authService: AuthService;
    let el: DebugElement;

    beforeEach(() => {

        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
          declarations: [LoginComponent],
          providers: [AuthService]
        });
    
        // create component and test fixture
        fixture = TestBed.createComponent(LoginComponent);
    
        // get test component from the fixture
        component = fixture.componentInstance;
    
        // UserService provided to the TestBed
        authService = TestBed.get(AuthService);
    
        //  get the "a" element by CSS selector (e.g., by class name)
        el = fixture.debugElement.query(By.css('a'));
      });

      it('Button label via async() and whenStable()', async(() => {
            fixture.detectChanges();
            expect(el.nativeElement.textContent.trim()).toBe('Login');
            spyOn(authService, 'isAuthenticated').and.returnValue(Promise.resolve(true));
            fixture.whenStable().then(() => { 
                fixture.detectChanges();
                expect(el.nativeElement.textContent.trim()).toBe('Logout');
              });
            component.ngOnInit();

      }))
});