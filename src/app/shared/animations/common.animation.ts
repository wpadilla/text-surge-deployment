import {
  animate, style, trigger, transition
} from '@angular/animations';

export const fadeInAnimate = animate('.3s', style({ opacity: 1 }));
export const fadeOutAnimate = animate('.3s', style({ opacity: 0 }));

export const fadeAnimation = trigger('fade', [
  transition(':enter',  [
    style({ opacity: 0}),
    fadeInAnimate,
  ]),
  transition(':leave', [
    fadeOutAnimate
  ]),
]);

export const popInAnimate = animate('300ms {{delay}}', style({ transform: 'scale(1)' }));
export const popOutAnimate = animate('300ms {{delay}}', style({ transform: 'scale(0)' }));

export const popInAnimation = trigger('popIn', [
  transition(':enter', [
    style({ transform: 'scale(0)' }),
    popInAnimate,
  ], { params: { delay: '0s' }}),
  transition(':leave', [
    popOutAnimate,
  ], { params: { delay: '0s' }}),
]);

export const horizontalSlideAnimate = animate('{{duration}} {{delay}}', style({ transform: 'translateX(0)', opacity: 1 }));
export const horizontalSlideOutAnimate = animate('{{duration}} {{delay}}',
  style({ transform: 'translateX(-100%)', opacity: '{{initialOpacity}}' }));

export const horizontalSlideAnimation = trigger('horizontalSlide', [
  transition(':enter', [
    style({ transform: 'translateX({{xPosition}})', opacity: '{{initialOpacity}}' }),
    horizontalSlideAnimate,
  ], { params: { initialOpacity: 1, xPosition: '-1000px', duration: '.3s', delay: '0s' } }),
  transition(':leave', [
    horizontalSlideOutAnimate,
  ], { params: { initialOpacity: 1, xPosition: '-1000px', duration: '.3s', delay: '0s' } }),
]);

export const verticalSlideAnimate = animate('.2s', style({ transform: 'translateY(0)', opacity: 1 }));
export const verticalSlideOutAnimate = animate('.2s', style({ transform: 'translateY(10)', opacity: '{{initialOpacity}}' }));
export const verticalSlideAnimation = trigger('verticalSlide', [
  transition(':enter', [
    style({ transform: 'translateY({{yPosition}})', opacity: '{{initialOpacity}}' }),
    verticalSlideAnimate,
  ], { params: { initialOpacity: 1, yPosition: '-30px' } }),
  transition(':leave', [
    verticalSlideOutAnimate,
  ], { params: { initialOpacity: 1, yPosition: '-30px' } }),
]);
