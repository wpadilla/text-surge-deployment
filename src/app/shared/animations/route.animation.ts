import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';
const slideLeftGroup = [
  query(':leave', [
    animate('300ms ease-out', style({ opacity: 0, left: '-100%', background: '#fff' }))
  ], { optional: true }),
  query(':enter', [
    animate('300ms ease-out', style({ opacity: 1, left: '0%', background: '#fff' }))
  ])
];

const slideRightGroup = [
  query(':leave', [
    animate('300ms ease-out', style({ left: '100%', background: '#fff' }))
  ], { optional: true }),
  query(':enter', [
    animate('300ms ease-out', style({ left: '0%', background: '#fff' }))
  ])
];
const slideXTransitionSteps = (reverse?: boolean) => [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: -30,
        left: 0,
        width: '100%',
        background: '#fff',
      })
    ]),
    query(':enter', [
      style({ left: reverse ? '-100%' : '100%'} )
    ]),
    query(':leave', animateChild(), { optional: true }),
    group(reverse ? slideRightGroup : slideLeftGroup),

    query(':enter', animateChild()),
  ];
export const createCampaignRouterAnimations =
  trigger('createCampaignRoute', [
    // transition('Contacts => *', slideXTransitionSteps()),
    transition('Details => *', slideXTransitionSteps()),
    transition('* => Details', slideXTransitionSteps(true)),
    transition('Contacts => *', slideXTransitionSteps()),
    transition('* => Contacts', slideXTransitionSteps(true)),
    transition('Texters => *', slideXTransitionSteps()),
    transition('* => Texters', slideXTransitionSteps(true)),
    transition('Scripts <=> *', slideXTransitionSteps(true)),
  ]);
