import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "leagueImage",
})
export class LeagueImagePipe implements PipeTransform {
  transform(id: number): string {
    return `https://images.fotmob.com/image_resources/logo/leaguelogo/dark/${id}.png`
  }
}
