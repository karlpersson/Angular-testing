import { LoginComponent } from './login.component';
import { AuthService } from './auth.service';

class MockAuthService extends AuthService {
    authenticated = false;

    isAuthenticated(){
        return this.authenticated;
    }
}

describe('Component: Login with extended service',() => {
    let component: LoginComponent;
    let service: MockAuthService;

    beforeEach(() => {
        service = new MockAuthService();
        component = new LoginComponent(service);
    });

    afterEach(() => {
        service = null;
        component = null;
    })

    it('canLogin returns false when the user is not authenticated', () => {
        service.authenticated = false;
        expect(component.needsLogin()).toBeTruthy();
    });


    it('canLogin returns true when the user is authenticated', () => {
        service.authenticated = true;
        expect(component.needsLogin()).toBeFalsy();
    })

})

