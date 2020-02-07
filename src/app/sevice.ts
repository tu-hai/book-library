import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, filter, switchMap } from 'rxjs/operators';
@Injectable()
export class Service {
    constructor (private http: HttpClient) {}
    url  = ''
    getUser(param: any): Observable<any>  {
        return this.http.post(this.url, param).pipe(map((response: any) => response.json()));
    }
}