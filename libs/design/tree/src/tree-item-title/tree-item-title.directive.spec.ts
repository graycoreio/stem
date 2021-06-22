import {
  Component,
  DebugElement,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffTreeItemTitleDirective } from './tree-item-title.directive';

@Component({
  template: `
    <div daffTreeItemTitle>Title</div>
  `,
})
class WrapperComponent {}

describe('DaffTreeItemTitleDirective', () => {
  let treeItemTitle: DaffTreeItemTitleDirective;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffTreeItemTitleDirective,
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    de = fixture.debugElement.query(By.css('[daffTreeItemTitle]'));
    treeItemTitle = de.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(treeItemTitle).toBeTruthy();
  });

  describe('[daffTreeItemTitle]', () => {
    it('should add a class of "daff-tree-item__title" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-tree-item__title': true,
      }));
    });
  });
});
