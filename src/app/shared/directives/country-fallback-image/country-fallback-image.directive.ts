import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[countryFallbackImage]',
})
export class CountryFallbackImageDirective {
  constructor(private eleRef: ElementRef) { }

  @HostListener('error') onError() {
    this.eleRef.nativeElement.src = "https://www.fotmob.com/img/league_fallback.png"
  }
}
