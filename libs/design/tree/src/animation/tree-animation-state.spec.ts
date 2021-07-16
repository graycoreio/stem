import { getAnimationState } from './tree-animation-state';

describe('treeAnimationState Calculation', () => {

  it('should return `open` if it is open', () => {
    expect(getAnimationState(true)).toEqual('open');
  });

  it('should return `closed` if it is not show', () => {
    expect(getAnimationState(false)).toEqual('closed');
  });
});
