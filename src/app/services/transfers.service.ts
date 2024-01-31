import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ENDPOINT } from '../app.config';
import { Transfers } from '../common/types/transfers';

@Injectable({
  providedIn: 'root',
})
export class TransfersService {
  http = inject(HttpClient);

  getTransfers(getTransfersQuery: GetTransfersQuery): Observable<Transfers> {
    return this.http.get<Transfers>(ENDPOINT + 'transfers', {
      params: {
        ...getTransfersQuery,
      },
    });
  }
}

export interface GetTransfersQuery {
  page?: number;
  showTop?: boolean;
  orderBy?: 'fee' | 'value';
}
