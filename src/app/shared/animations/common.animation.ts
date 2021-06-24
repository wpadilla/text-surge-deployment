import {
  animate, style, trigger, transition,
} from '@angular/animations';

export const fadeInAnimate = animate('.3s {{delay}}', style({opacity: 1}));
export const fadeOutAnimate = animate('.3s {{delay}}', style({opacity: 0}));

export const fadeAnimation = trigger('fade', [
  transition(':enter', [
    style({opacity: 0}),
    fadeInAnimate,
  ], { params: { delay: '0s' }}),
  transition(':leave', [
    fadeOutAnimate
  ], { params: { delay: '0s' }}),
]);

export const popInAnimate = animate('300ms {{delay}}', style({transform: 'scale(1)', transformOrigin: '{{transformOrigin}}'}));
export const popOutAnimate = animate('300ms {{delay}}', style({transform: 'scale(0)'}));

export const popInAnimation = trigger('popIn', [
  transition(':enter', [
    style({transform: 'scale(0)', transformOrigin: '{{transformOrigin}}'}),
    popInAnimate,
  ], {params: {delay: '0s', transformOrigin: 'none'}}),
  transition(':leave', [
    popOutAnimate,
  ], {params: {delay: '0s', transformOrigin: 'none'}}),
]);

export const horizontalSlideAnimate = animate('{{duration}} {{delay}}', style({
  transform: 'translateX(0)',
  opacity: 1
}));
export const horizontalSlideOutAnimate = animate('{{duration}} {{delay}}',
  style({transform: 'translateX(-100%)', opacity: '{{initialOpacity}}'}));

export const horizontalSlideAnimation = trigger('horizontalSlide', [
  transition(':enter', [
    style({transform: 'translateX({{xPosition}})', opacity: '{{initialOpacity}}'}),
    horizontalSlideAnimate,
  ], {params: {initialOpacity: 1, xPosition: '-1000px', duration: '.3s', delay: '0s'}}),
  transition(':leave', [
    horizontalSlideOutAnimate,
  ], {params: {initialOpacity: 1, xPosition: '-1000px', duration: '.3s', delay: '0s'}}),
]);

export const verticalSlideAnimate = animate('.2s {{delay}}', style({transform: 'translateY(0)', opacity: 1}));
export const verticalSlideOutAnimate = animate('.2s {{delay}}', style({
  transform: 'translateY({{yPosition}})',
  opacity: '{{initialOpacity}}'
}));
export const verticalSlideAnimation = trigger('verticalSlide', [
  transition(':enter', [
    style({transform: 'translateY({{yPosition}})', opacity: '{{initialOpacity}}'}),
    verticalSlideAnimate,
  ], {params: {initialOpacity: 1, yPosition: '-30px', delay: '0s' }}),
  transition(':leave', [
    verticalSlideOutAnimate,
  ], {params: {initialOpacity: 1, yPosition: '-30px', delay: '0s' }}),
]);

export const expandHeightInitAnimate = animate('.2s', style({opacity: 1, maxHeight: '50px'}));
export const expandHeightInAnimate = animate('.3s', style({opacity: 1, maxHeight: '1000px'}));
export const expandHeightOutAnimate = animate('.3s', style({ maxHeight: '0'}));
export const expandHeightAnimation = trigger('expandHeight', [
  transition(':enter', [
    style({opacity: 1, maxHeight: '0px', overflow: 'hidden'}),
    expandHeightInitAnimate,
    expandHeightInAnimate,
  ]),
  transition(':leave', [
    style({maxHeight: '1000px', overflow: 'hidden'}),
    expandHeightInitAnimate,
    expandHeightOutAnimate,
  ]),
]);
