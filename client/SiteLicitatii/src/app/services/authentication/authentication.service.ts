import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private login_api : string = "http://localhost:31338/api/login";
    private register_api : string = "http://localhost:31338/api/register";
    private currentUserSubject: BehaviorSubject<string>;
    public currentUser: Observable<string>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<string>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): string {
        return this.currentUserSubject.value;
    }

    login(email: string, password: string) {
      let params = new HttpParams()
      .set('email',email)
      .set('password',password);
      
        return this.http.get<any>(this.login_api, {params})
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user.jwt));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    } 

    register(email:string,password:string) : Observable<any> {
        let params = new HttpParams()
        .set('email',email)
        .set('password',password);
        
        return this.http.get<any>(this.register_api, {params});
    }
}