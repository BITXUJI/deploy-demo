import { AppError } from './../common/app-errors';
import { NotFoundError } from './../common/not-found-error';
import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { BadRequestError } from '../common/bad-request-error';
import { catchError, firstValueFrom, lastValueFrom, switchMap, throwError } from 'rxjs';
import { URL_TOKEN } from '../common/url-token';




@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(@Inject(URL_TOKEN) private url: string,
        private http: HttpClient) { }

    getAll<T>() {
        return this.http.get<T>(this.url).
            pipe(
                catchError(this.handleError)
            );
    }
    create<T>(resource: any) {
        // return throwError(() => new AppError());
        return this.http.post<T>(this.url, resource).
            pipe(
                catchError(this.handleError)
            );
    }

    update<T>(Resource: any) {
        // return throwError(() => new AppError());
        return this.http.put<T>(this.url + '/' + Resource.id, Resource).
            pipe(
                catchError(this.handleError)
            );
    }

    delete<T>(id: any) {
        // return throwError(() => new AppError());
        return this.http.delete<T>(this.url + '/' + id).
            pipe(
                // switchMap(() => throwError({ 'status': 404 })),
                catchError(this.handleError)
            );
    }
    private handleError(error: Response) {
        if (error.status === 400)
            return throwError(() => new BadRequestError(error));
        if (error.status === 404)
            return throwError(() => new NotFoundError());
        return throwError(() => new AppError(error));
    }
}
