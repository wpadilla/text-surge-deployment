import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { verticalSlideAnimate, verticalSlideOutAnimate } from "./common.animation";

export const fadeListAnimation = trigger('fadeListAnimation', [
  transition('* <=> *', [
    query(':enter',
      [style({ opacity: 0 }), stagger('60ms', animate('300ms ease-out', style({ opacity: 1 })))],
      { optional: true }
    ),
    query(':leave',
      animate('200ms', style({ opacity: 0 })),
      { optional: true}
    )
  ])
]);


export const verticalSlideListAnimation = trigger('verticalSlideList', [
  transition('* <=> *', [
    query(':enter', [
      style({transform: 'translateY({{yPosition}})', opacity: '{{initialOpacity}}'}),
      stagger('300ms', verticalSlideAnimate),
    ], {params: {initialOpacity: 0, yPosition: '-30px', delay: '0s', duration: '.3s' }, optional: true }),
    query(':leave', [
      verticalSlideOutAnimate,
    ], {params: {initialOpacity: 0, yPosition: '-30px', delay: '0s', duration: '.3s' }, optional: true }),
  ])
]);
