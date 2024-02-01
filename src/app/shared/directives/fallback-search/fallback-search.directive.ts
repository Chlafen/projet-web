import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFallbackSearch]',
})
export class FallbackSearchDirective {
  @Input() type!: 'League' | 'Team';
  constructor(private eleRef: ElementRef) {}

  @HostListener('error') onError() {
    this.eleRef.nativeElement.src =
      this.type === 'Team'
        ? 'https://www.fotmob.com/_next/static/media/team_fallback.3ae01170.png'
        : 'https://www.fotmob.com/img/league_fallback.png';
  }
}
