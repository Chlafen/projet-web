import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPlayerFallbackImage]',
})
export class PlayerFallbackImageDirective {
  constructor(private eleRef: ElementRef) {}

  @HostListener('error') onError() {
    this.eleRef.nativeElement.src =
      'https://www.fotmob.com/_next/static/media/player_fallback_dark.2f00a83e.png';
  }
}
