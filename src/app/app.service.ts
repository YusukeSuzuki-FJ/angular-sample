import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AppService {
  private apiUrl =
    'https://dqcdrwacr8.execute-api.ap-northeast-1.amazonaws.com/test/yusukeAngularTest/';

  constructor(private http: HttpClient) {}

  private httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    observe: 'response',
    body: null,
  };

  getApi(id: string): Observable<any> {
    this.apiUrl =
      'https://dqcdrwacr8.execute-api.ap-northeast-1.amazonaws.com/test/yusukeAngularTest/' +
      id +
      '/';
    return this.http.get<any>(this.apiUrl, this.httpOptions).pipe(
      tap((response) => console.log(response)),
      catchError((error) => {
        throw new Error(error.message);
      })
    );
  }

  putAPi =
    'https://dqcdrwacr8.execute-api.ap-northeast-1.amazonaws.com/test/yusukeAngularTest/';

  postApi(id: string, name: string): Observable<any> {
    this.apiUrl = this.putAPi + id + '/' + name + '/';
    return this.http
      .post<any>(this.apiUrl, {
        pathParameters: {
          id: id,
          name: name,
        },
      })
      .pipe(
        tap((response) => console.log(response)),
        catchError((error) => {
          throw new Error(error.message);
        })
      );
  }

  putApi(id: string, name: string): Observable<any> {
    this.apiUrl = this.putAPi + id + '/' + name + '/';
    console.log(this.apiUrl);
    return this.http
      .put<any>(this.apiUrl, {
        pathParameters: {
          id: id,
          name: name,
        },
      })
      .pipe(
        tap((response) => console.log(response)),
        catchError((error) => {
          throw new Error(error.message);
        })
      );
  }

  deleteApi(id: string): Observable<any> {
    this.apiUrl = this.putAPi + id + '/' + name + '/';
    return this.http.delete<any>(this.apiUrl, this.httpOptions).pipe(
      tap((response) => console.log(response)),
      catchError((error) => {
        throw new Error(error.message);
      })
    );
  }
}
