import {
  animate,
  state,
  style,
  transition,
  trigger,
  AnimationTriggerMetadata,
} from '@angular/animations';

export const daffTreeAnimations: {
  readonly openTree: AnimationTriggerMetadata;
} = {
  openTree: trigger('openTree', [
    state('open', style({
      visibility: 'visible',
      opacity: '1',
      height: '*',
    })),
    state('void',style({
      visibility: 'hidden',
      overflow: 'hidden',
      opacity: '0',
      height: '0',
    })),
    transition('void <=> open',
      animate('150ms ease-in'),
    ),
  ]),
};
