import {LoginComponent} from './login.component';

class MockAuthService{
    authenticated = false;

    isAuthenticated() {
        return this.authenticated;
    }

}

describe('Component: Login with mocked service',() => {
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