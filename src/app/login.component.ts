import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
    selector: 'app-login',
    template: `<a>
                    <span *ngIf="needsLogin()">Login</span>
                    <span *ngIf="!needsLogin()">Logout</span>
               </a>
    `
    /*template: `<a [hidden]="needsLogin()">Login</a>`*/
}) export class LoginComponent implements OnInit {

    needsLoginAsync: boolean = true;

    constructor(private auth: AuthService){}

    ngOnInit() {
        this.auth.isAuthenticatedAsync().then((authenticated) => {
            this.needsLoginAsync = !authenticated;
        })
    }

    needsLogin() {
        return !this.auth.isAuthenticated();
    }

}