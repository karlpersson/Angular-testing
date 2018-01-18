import {TestBed, async, fakeAsync, tick, ComponentFixture, inject} from '@angular/core/testing';
import {LoginComponent3} from './login.component3';
import {User} from './login.component2';
import {AuthService} from "./auth.service";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('Component: Login (model driven forms)', () => {
    let component: LoginComponent3;
    let fixture: ComponentFixture<LoginComponent3>

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, FormsModule],
            declarations: [LoginComponent3]
        });

        fixture = TestBed.createComponent(LoginComponent3);
        component = fixture.componentInstance;

        component.ngOnInit();

    });

    it('form invalid when empty', () => {
        expect(component.form.valid).toBeFalsy();
    });
    
    it('email field validity 1', () => {
        let email = component.form.controls['email'];
        expect(email.valid).toBeFalsy();
    });

    it('email field validity 2', () => {
        let errors = {};
        let email = component.form.controls['email'];
        errors = email.errors || {};
        expect(errors['required']).toBeTruthy(); //Because errors contains a key of required
    });

    
    it('email field validity 3', () => {
        let errors = {};
        let email = component.form.controls['email'];
        
        email.setValue("test");

        errors = email.errors || {};
        expect(errors['pattern']).toBeTruthy(); 
    });

    it('submitting a form emits a user', () => {
        expect(component.form.valid).toBeFalsy();
        component.form.controls['email'].setValue("test@test.com");
        component.form.controls['password'].setValue("123456789");
        expect(component.form.valid).toBeTruthy();

        let user: User;

        component.loggedIn.subscribe((value) => user = value);

        component.login();

        expect(user.email).toBe("test@test.com");
        expect(user.password).toBe("123456789");
    });
});