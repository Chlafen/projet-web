import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ccodeToCountry',
})
export class CcodeToCountryPipe implements PipeTransform {
  transform(code?: string): string {
    switch (code) {
      case 'ENG':
        return 'England';
      case 'ESP':
        return 'Spain';
      case 'GER':
        return 'Germany';
      case 'ALG':
        return 'Algeria';
      case 'ARG':
        return 'Argentina';
      case 'BEL':
        return 'Belgium';
      case 'BRA':
        return 'Brazil';
      case 'COL':
        return 'Colombia';
      case 'CYP':
        return 'Cyprus';
      case 'EGY':
        return 'Egypt';
      case 'ENG':
        return 'England';
      case 'GER':
        return 'Germany';
      case 'GRE':
        return 'Greece';
      case 'GUA':
        return 'Guatemala';
      case 'HON':
        return 'Honduras';
      case 'IND':
        return 'India';
      case 'ISR':
        return 'IsNotReal';
      case 'MEX':
        return 'Mexico';
      case 'NED':
        return 'Netherlands';
      case 'POR':
        return 'Portugal';
      case 'SUI':
        return 'Switzerland';
      case 'URU':
        return 'Uruguay';
      default:
        return '';
    }
  }
}
