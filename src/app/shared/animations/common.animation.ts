import {
  animate, style, trigger, transition, query, animateChild, group
} from '@angular/animations';

export const fadeAnimation = trigger('fade', [
  transition(':enter',  [
    style({ opacity: 0}),
    animate('.3s', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    animate('.3s', style({ opacity: 0 })),
  ]),
]);

export const popInAnimation = trigger('popIn', [
  transition(':enter', [
    style({ transform: 'scale(0)' }),
    animate('300ms {{delay}}', style({ transform: 'scale(1)' })),
  ], { params: { delay: '0s' }}),
  transition(':leave', [
    animate('300ms {{delay}}', style({ transform: 'scale(0)' })),
  ], { params: { delay: '0s' }}),
]);

export const horizontalSlideAnimation = trigger('horizontalSlide', [
  transition(':enter', [
    style({ transform: 'translateX({{xPosition}})', opacity: '{{initialOpacity}}' }),
    animate('{{duration}}', style({ transform: 'translateX(0)', opacity: 1 })),
  ], { params: { initialOpacity: 1, xPosition: '1000px', duration: '.3s' } }),
  transition(':leave', [
    animate('{{duration}}', style({ transform: 'translateX({{xPosition}})', opacity: '{{initialOpacity}}' })),
  ], { params: { initialOpacity: 1, xPosition: '1000px', duration: '.3s' } }),
]);

export const verticalSlideAnimation = trigger('verticalSlide', [
  transition(':enter', [
    style({ transform: 'translateY({{yPosition}})', opacity: '{{initialOpacity}}' }),
    animate('.2s', style({ transform: 'translateY(0)', opacity: 1 })),
  ], { params: { initialOpacity: 1, yPosition: '-30px' } }),
  transition(':leave', [
    animate('.2s', style({ transform: 'translateY({{yPosition}})',  opacity: '{{initialOpacity}}'})),
  ], { params: { initialOpacity: 1, yPosition: '-30px' } }),
]);
