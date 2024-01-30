import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "countryImage",
})
export class CountryImagePipe implements PipeTransform {
  transform(ccode: string): string {
    return `https://images.fotmob.com/image_resources/logo/teamlogo/${ccode.toLowerCase()}.png`
  }
}
