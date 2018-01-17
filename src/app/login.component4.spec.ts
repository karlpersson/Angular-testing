import {LoginComponent} from './login.component';
import {AuthService} from './auth.service';

describe('Component: Login with spy', () => {
    let component: LoginComponent;
    let service: AuthService;
    let spy: any;

    beforeEach(() => {
        service = new AuthService();
        component = new LoginComponent(service);
    });

    afterEach(() => {
        service = null;
        component = null;
    });

    it('canLogin returns false when the user is not authenticated', () => {
        spy = spyOn(service, 'isAuthenticated').and.returnValue(false);
        expect(component.needsLogin()).toBeTruthy();
        expect(service.isAuthenticated).toHaveBeenCalled();
    })

    it('canLogin returns true when the user is authenticated', () => {
        spy = spyOn(service, 'isAuthenticated').and.returnValue(true);
        expect(component.needsLogin()).toBeFalsy();
        expect(service.isAuthenticated).toHaveBeenCalled();
    })

})