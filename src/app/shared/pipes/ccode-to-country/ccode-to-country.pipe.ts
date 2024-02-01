import { Pipe, PipeTransform } from '@angular/core';
import { getCountryName } from 'src/app/common/utils';

@Pipe({
  name: 'ccodeToCountry',
})
export class CcodeToCountryPipe implements PipeTransform {
  transform(code?: string): string {
    return getCountryName(code);
  }
}
