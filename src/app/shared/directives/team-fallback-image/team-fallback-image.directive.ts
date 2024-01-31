import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTeamFallbackImageDirective]',
})
export class TeamFallbackImageDirective {
  constructor(private eleRef: ElementRef) {}

  @HostListener('error') onError() {
    this.eleRef.nativeElement.src =
      'https://www.fotmob.com/_next/static/media/team_fallback.3ae01170.png';
  }
}
