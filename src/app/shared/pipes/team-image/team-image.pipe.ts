import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'teamImage',
})
export class TeamImagePipe implements PipeTransform {
  transform(id: number): string {
    return `https://images.fotmob.com/image_resources/logo/teamlogo/${id}.png`;
  }
}
