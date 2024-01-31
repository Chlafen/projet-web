import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ENDPOINT } from '../app.config';
import { Transfer, Transfers } from '../common/types/transfers';

@Injectable({
  providedIn: 'root'
})
export class TransfersService {
  http = inject(HttpClient);

  getTransfers(): Observable<Transfer[]> {
    return this.http.get<Transfer[]>(ENDPOINT + 'transfers');
  }
}
