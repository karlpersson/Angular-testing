import {Location} from '@angular/common';
import {TestBed, fakeAsync, tick} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';
import { AppComponent } from './app.component';
import {routes} from './app.routing.module';
import { AppRoutingModule } from './app.routing.module';
import { APP_BASE_HREF } from '@angular/common';

import {
    HomeComponent,
    SearchComponent
} from './routing';

describe('Router App', () => {
    let location: Location;
    let router: Router;
    let fixture;

    beforeEach(() =>  {
        TestBed.configureTestingModule({
            declarations:[
                HomeComponent,
                SearchComponent,
                AppComponent
            ],
            imports: [
                AppRoutingModule
            ],
            providers:[ { provide: APP_BASE_HREF, useValue : '/' }]

        });

        
        router = TestBed.get(Router);
        location = TestBed.get(Location);

        fixture = TestBed.createComponent(AppComponent);

        router.initialNavigation();
    });

    it('fakeAsync works', fakeAsync(() => {
        let promise = new Promise((resolve) => {
          setTimeout(resolve, 10)
        });
        let done = false;
        promise.then(() => done = true);
        tick(50);
        expect(done).toBeTruthy();
      }));


    it('navigate to "" redirects you to /home', fakeAsync(() => {
        //router.navigate(['']);
        //tick(50);
        //expect(location.path()).toBe('/home');

        router.navigate(['']).then(() => expect(router.url).toBe('/home'));
    }));

    it('navigate to "search" takes you to /search', fakeAsync(() => {
        router.navigate(['search']).then(() => expect(router.url).toBe('/search'));

        //router.navigate(['search']);
        //tick(50);
        //expect(location.path()).toBe('/search');
    }))



});