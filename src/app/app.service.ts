import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AppService {
  private apiUrl =
    'https://dqcdrwacr8.execute-api.ap-northeast-1.amazonaws.com/test/yusuke_testGET/100/suzukiTest100/';

  constructor(private http: HttpClient) {}

  private httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    observe: 'response',
    body: null,
  };

  getApi(id: string, name: string): Observable<any> {
    return this.http.get<any>(this.apiUrl, this.httpOptions).pipe(
      tap((response) => console.log(response.type)),
      catchError((error) => {
        throw new Error(error.message);
      })
    );
  }

  postApi(): Observable<any> {
    return this.http.post<any>(this.apiUrl, this.httpOptions).pipe(
      tap((response) => console.log(response)),
      catchError((error) => {
        throw new Error(error.message);
      })
    );
  }
  putAPi =
    'https://dqcdrwacr8.execute-api.ap-northeast-1.amazonaws.com/test/yusukeapi/500/suzukiTest500/';

  putApi(): Observable<any> {
    return this.http.put<any>(this.putAPi, this.httpOptions).pipe(
      tap((response) => console.log(response)),
      catchError((error) => {
        throw new Error(error.message);
      })
    );
  }

  deleteApi(): Observable<any> {
    return this.http.delete<any>(this.apiUrl, this.httpOptions).pipe(
      tap((response) => console.log(response)),
      catchError((error) => {
        throw new Error(error.message);
      })
    );
  }
}
