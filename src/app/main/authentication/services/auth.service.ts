import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private readonly _baseUrl;
    private currentDate;
    private expiresIn;
    private expiresTime;


    constructor(private _http: HttpClient,
                private _router: Router) {
        this._baseUrl = environment.baseUrl;
    }

    signIn(name: string, password: string): Observable<any> {
        return this._http.post<any>(`${this._baseUrl}login`, {name, password});
    }

    getRefreshToken(): Observable<any> {
        return this._http.get<any>(`${this._baseUrl}refresh-Token`);
    }

    setAuthInfoInLocalStorage(accessToken, payload): void {
        localStorage.clear();
        localStorage.setItem('auth', JSON.stringify({
            accessToken: accessToken,
            username: payload.username,
            phone: payload.phone,
            roleId: payload.role_id,
            loggedIn: true
        }));
    }

    get authInfo(): any {
        return JSON.parse(localStorage.getItem('auth'));
    }

    get loggedInStatus(): boolean {
        return this.authInfo && this.authInfo.loggedIn ? this.authInfo.loggedIn : false;
    }
}
