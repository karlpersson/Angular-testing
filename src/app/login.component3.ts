//nmodel driven forms
import { Component, EventEmitter, Input, Output} from '@angular/core';
import { User } from './login.component2';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    template: `
        <form (ngSubmit)="login()"
               [formGroup]="form">
               <label>Email</label>
               input type "email" fromControlName="email">
               <label>Password</label>
               <input type="password"
                      formContorlName="password">
               <button type="submit">Login</button>
        </form>
     `
})
export class LoginComponent3{
    @Output() loggedIn = new EventEmitter<User>();
    form: FormGroup;

    constructor(private fb: FormBuilder){}

    ngOnInit() {
        this.form = this.fb.group({
            email: ['',[Validators.required, Validators.pattern("[^ @]*@[^ @]*")]],
            password: ['', [Validators.required, Validators.minLength(8)]],
        })
    }

    login() {
        console.log(`Login ${this.form.value}`);
        if(this.form.valid){
            this.loggedIn.emit(
                new User(
                    this.form.value.email,
                    this.form.value.password
                )
            )
        };

    }
};