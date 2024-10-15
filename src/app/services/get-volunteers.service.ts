import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Volunteer } from '../types/volunteer.interface';

@Injectable({
  providedIn: 'root'
})
export class GetVolunteersService {

  readonly apiUrl = "https://aprender-para-vida-api.onrender.com"

  private allVolunteers: BehaviorSubject<Volunteer[]> = new BehaviorSubject<Volunteer[]>([])

  constructor(private http: HttpClient) {
    this.http.get<Volunteer[]>(`${this.apiUrl}/volunteers`).subscribe(data => {
      this.allVolunteers.next(data)
    })
  }

  getAllVolunteers(): Observable<Volunteer[]> {
    return this.allVolunteers
  }
}
