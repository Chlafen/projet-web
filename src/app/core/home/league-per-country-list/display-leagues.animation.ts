import { trigger, style, animate, transition } from '@angular/animations';

export const DisplayLeaguesAnimation = trigger(
  'inOutAnimation',
  [
    transition(
      ':enter',
      [
        style({ height: 0, opacity: 0, overflow: 'hidden' }),
        animate(
          '100ms ease-in-out',
          style({ height: "*", opacity: 1, overflow: 'visible' }),
        ),
      ]
    ),
    transition(
      ':leave',
      [
        style({ height: "*", opacity: 1, overflow: 'visible' }),
        animate(
          '100ms ease-in-out',
          style({ height: 0, opacity: 0, overflow: 'hidden' }),
        ),
      ]
    )
  ]
)