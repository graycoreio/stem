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

import { DaffTreeItemContentDirective } from './tree-item-content.directive';

@Component({
  template: `
    <div daffTreeItemContent>Content</div>
  `,
})
class WrapperComponent {}

describe('DaffTreeItemContentDirective', () => {
  let treeItemContent: DaffTreeItemContentDirective;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffTreeItemContentDirective,
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    de = fixture.debugElement.query(By.css('[daffTreeItemContent]'));
    treeItemContent = de.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(treeItemContent).toBeTruthy();
  });

  describe('[daffTreeItemContent]', () => {
    it('should add a class of "daff-tree-item__content" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-tree-item__content': true,
      }));
    });
  });
});
