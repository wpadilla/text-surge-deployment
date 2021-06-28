import { animate, animateChild, group, query, stagger, style, transition, trigger } from '@angular/animations';
import {
  popInAnimate,
} from './common.animation';

const slideLeftGroup = [
  query(':leave', [
    animate('400ms ease-out', style({opacity: 0, left: '-100%', background: '#fff'}))
  ], {optional: true}),
  query(':enter', [
    animate('400ms ease-out', style({opacity: 1, left: '0%', background: '#fff'}))
  ], {optional: true})
];

const slideRightGroup = [
  query(':leave', [
    animate('300ms ease-out', style({left: '100%', background: '#fff'}))
  ], {optional: true}),
  query(':enter', [
    animate('300ms ease-out', style({left: '0%', background: '#fff'}))
  ], {optional: true})
];
const slideXTransitionSteps = (reverse?: boolean) => [
  style({position: 'relative'}),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: -30,
      left: 0,
      width: '100%',
      background: '#fff',
    })
  ], {optional: true}),
  query(':enter', [
    style({left: reverse ? '-100%' : '100%'})
  ], {optional: true}),
  query(':leave', animateChild(), {optional: true}),
  group(reverse ? slideRightGroup : slideLeftGroup),

  query(':enter', animateChild(), {optional: true}),
];
export const createCampaignRouterAnimations =
  trigger('createCampaignRoute', [
    transition('Details => *', slideXTransitionSteps()),
    transition('* => Details', slideXTransitionSteps(true)),
    transition('Contacts => *', slideXTransitionSteps()),
    transition('* => Contacts', slideXTransitionSteps(true)),
    transition('Texters => *', slideXTransitionSteps()),
    transition('* => Texters', slideXTransitionSteps(true)),
    transition('Scripts <=> *', slideXTransitionSteps(true)),
  ]);

export const appRoutingAnimations = trigger('appRouting', [
  transition('Auth => Main', [
    group([
      query(':enter',
        [
          query('@horizontalSlide, @verticalSlide, @fade', [
            stagger('.3s', animateChild()),
          ], { optional: true }),
        ], { optional: true }),
      query(':enter',
        [
          query('@popIn', [
            style({transform: 'scale(0)'}),
            stagger('.1s', popInAnimate),
          ], {params: {delay: '0s', transformOrigin: '50% 50% 0', duration: '.3s'}, optional: true}),
        ]),
      query(':leave',
        [
          query('@fade, @horizontalSlide',
            [
              style({zIndex: 10}),
              animateChild(),
            ], { optional: true }),
        ], { optional: true }),
    ]),
  ])
]);

export const mainRoutingAnimations = trigger('mainRouting', []);
