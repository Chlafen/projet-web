import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ENDPOINT } from '../app.config';
import { Transfer, Transfers } from '../common/types/transfers';

@Injectable({
  providedIn: 'root',
})
export class TransfersService {
  http = inject(HttpClient);

  getTransfers(getTransfersQuery: GetTransfersQuery): Observable<Transfer[]> {
    let res = this.http.get<Transfers>(ENDPOINT + 'transfers', {
      params: {
        ...getTransfersQuery,
      },
    });

    return res.pipe(map((transfers) => transfers.transfers));
  }
}

export interface GetTransfersQuery {
  page?: number;
  showTop?: boolean;
  orderBy?: 'fee' | 'value';
}
