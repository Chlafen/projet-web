import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'playerImage',
})
export class PlayerImagePipe implements PipeTransform {
  transform(id: number): string {
    return `https://images.fotmob.com/image_resources/playerimages/${id}.png`;
  }
}
