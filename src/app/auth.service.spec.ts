import {AuthService} from './auth.service';

describe('Service: Auth',() => {
    let service = new AuthService();

    beforeEach(() => {
        service = new AuthService();
    })

    afterEach(() => {
        service = null;
        localStorage.removeItem('token');
    });

})