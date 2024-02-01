import { Pipe, PipeTransform } from '@angular/core';
import { ENDPOINT } from 'src/app/app.config';

@Pipe({
  name: 'leagueUrl'
})
export class LeagueUrlPipe implements PipeTransform {

  transform(id: number): string {
    return `/leagues/${id}/overview`;
  }

}
