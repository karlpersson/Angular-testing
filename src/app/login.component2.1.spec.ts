import {TestBed, async, fakeAsync, tick, ComponentFixture, inject} from '@angular/core/testing';
import {LoginComponent2, User} from './login.component2';
import {AuthService} from "./auth.service";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";


describe('Component: Login', () => {
    let component: LoginComponent2;
    let fixture: ComponentFixture<LoginComponent2>;
    let submitEl: DebugElement;
    let loginEl: DebugElement;
    let passwordEl: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent2]
        });

        fixture = TestBed.createComponent(LoginComponent2);

        component = fixture.componentInstance;
    
        submitEl = fixture.debugElement.query(By.css('button'));
        loginEl = fixture.debugElement.query(By.css('input[type=email]'));
        passwordEl = fixture.debugElement.query(By.css('input[type=password]'));


    });

    //testing inputs
    it('Setting enabled to false disables the submit button', () => {
        component.enabled = false;
    });

    it('Setting enabled to false disables the submit button', () => {
        component.enabled = false;
        fixture.detectChanges();
        expect(submitEl.nativeElement.disabled).toBeTruthy();
    });

    //testing outputs
    it('Entering email and password emits loggedIn event', () => {
        let user: User;

        loginEl.nativeElement.value = "test@example.com";
        passwordEl.nativeElement.value = "123456";

        component.loggedIn.subscribe((value) => user = value);

        submitEl.triggerEventHandler('click', null);

        expect(user.email).toBe("test@example.com");
        expect(user.password).toBe("123456");

    });

});