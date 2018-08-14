import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import {Rental } from './rental.model';
import {HttpClient} from '@angular/common/http'

@Injectable()
export class RentalService {
    
    constructor(private http : HttpClient) {

    }

    public getRentals(): Observable<any> {

        return this.http.get('/api/v1/rentals');
    }

    public getRentalById (id): Observable<any> {

       return this.http.get('/api/v1/rentals/'+ id);

    }
}