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
        // this._baseUrl = environment.baseUrl;
    }

    // @ts-ignore
    signIn(name: string, password: string): Observable<any> {
        // return this._http.post<any>(`${this._baseUrl}login`, {name, password});
    }

    getRefreshToken(): Observable<any> {
        return this._http.get<any>(`${this._baseUrl}refresh-Token`);
    }

    setAuthInfoInLocalStorage(accessToken, payload): void {
        localStorage.clear();
        this.expiresIn = accessToken.original.expires_in;
        localStorage.setItem('auth', JSON.stringify({
            access_token: accessToken.original.access_token,
            name: payload.name,
            staff_id: payload.staff_id,
            group_id: payload.group_id,
            role_id: payload.role_id,
            expires_in: accessToken.original.expires_in,
            loggedIn: true
        }));
    }
}
