export class AuthService{
    isAuthenticated(): boolean{
        return !!localStorage.getItem('token');
    }

    isAuthenticatedAsync(): Promise<boolean>{
        return Promise.resolve(!!localStorage.getItem('token'));
    }

}