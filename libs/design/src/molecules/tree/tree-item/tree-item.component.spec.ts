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
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffTreeComponent } from '../tree/tree.component';
import { DaffTreeItemComponent } from './tree-item.component';


@Component({ template: `
<daff-tree>
	<daff-tree-item [initiallyActive]="initiallyActiveValue">
		<h3 daffTreeItemTitle>Size and Fit</h3>
		<div daffTreeItemContent>no content</div>
	</daff-tree-item>
</daff-tree>
` })
class UsageWrapperComponent {
  initiallyActiveValue: boolean;
}

describe('DaffTreeItemComponent', () => {

  describe('usage', () => {
    let fixture: ComponentFixture<UsageWrapperComponent>;
    let wrapper: UsageWrapperComponent;
    let treeHeader: DebugElement;
    let daffTreeItem: DaffTreeItemComponent;

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          NoopAnimationsModule,
          FontAwesomeModule,
        ],
        declarations: [
          UsageWrapperComponent,
          DaffTreeItemComponent,
          DaffTreeComponent,
        ],
      })
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(UsageWrapperComponent);
      wrapper = fixture.componentInstance;

      fixture.detectChanges();

      daffTreeItem = fixture.debugElement.query(By.css('daff-tree-item')).componentInstance;
      treeHeader = fixture.debugElement.query(By.css('.daff-tree-item__header'));
    });

    it('should create', () => {
      expect(daffTreeItem).toBeTruthy();
    });

    it('should set _open to false by default', () => {
      expect(daffTreeItem._open).toEqual(false);
    });

    it('should set _animationState to void by default', () => {
      expect(daffTreeItem._animationState).toEqual('void');
    });

    it('should be able to accept an initiallyActive input', () => {
      wrapper.initiallyActiveValue = false;

      fixture.detectChanges();

      expect(daffTreeItem.initiallyActive).toEqual(false);

      wrapper.initiallyActiveValue = true;

      fixture.detectChanges();

      expect(daffTreeItem.initiallyActive).toEqual(true);
    });

    describe('ngOnInit', () => {

      describe('when initiallyActive is true', () => {

        beforeEach(() => {
          wrapper.initiallyActiveValue = true;
          fixture.detectChanges();
        });

        it('should set _open to true', () => {
          daffTreeItem.ngOnInit();
          expect(daffTreeItem._open).toBeTruthy();
        });
      });

      describe('when initiallyActive is not set', () => {

        beforeEach(() => {
          wrapper.initiallyActiveValue = undefined;
          fixture.detectChanges();
        });

        it('should set open to false', () => {
          daffTreeItem.ngOnInit();
          expect(daffTreeItem._open).toBeFalsy();
        });
      });
    });

    describe('when tree header is clicked', () => {

      beforeEach(() => {
        spyOn(daffTreeItem, 'toggleActive');

        treeHeader.nativeElement.click();
      });

      it('should call toggleActive', () => {
        expect(daffTreeItem.toggleActive).toHaveBeenCalledWith();
      });
    });

    describe('toggleActive', () => {
      it('should toggle open', () => {
        daffTreeItem._open = false;

        daffTreeItem.toggleActive();
        expect(daffTreeItem._open).toEqual(true);

        daffTreeItem.toggleActive();
        expect(daffTreeItem._open).toEqual(false);
      });

      it('should toggle _animationState between void and open', () =>  {
        daffTreeItem.toggleActive();
        expect(daffTreeItem._animationState).toEqual('open');

        daffTreeItem.toggleActive();
        expect(daffTreeItem._animationState).toEqual('void');
      });
    });
  });

	@Component({ template: `
	<daff-tree>
		<daff-tree-item>
			<daff-tree>
				<daff-tree-item [initiallyActive]="initiallyActiveValue">
					<h3 daffTreeItemTitle>Size and Fit</h3>
					<div daffTreeItemContent>no content</div>
				</daff-tree-item>
			</daff-tree>
		</daff-tree-item>
	</daff-tree>
	` })
  class FirstChildWrapperComponent {
		initiallyActiveValue: boolean;
	}

	describe('when it is the first child tree-item', () => {
	  let fixture: ComponentFixture<FirstChildWrapperComponent>;

	  beforeEach(waitForAsync(() => {
	    TestBed.configureTestingModule({
	      imports: [
	        NoopAnimationsModule,
	        FontAwesomeModule,
	      ],
	      declarations: [
	        FirstChildWrapperComponent,
	        DaffTreeItemComponent,
	        DaffTreeComponent,
	      ],
	    })
	      .compileComponents();
	  }));

	  beforeEach(() => {
	    fixture = TestBed.createComponent(FirstChildWrapperComponent);

	    fixture.detectChanges();
	  });

	  it('should have a level of 0', () => {
	    const treeItemUnderTest: DaffTreeItemComponent =
				fixture.debugElement.queryAll(By.css('daff-tree-item'))[1].componentInstance;

	    expect(treeItemUnderTest._level).toEqual(0);
	  });
	});

	@Component({ template: `
		<daff-tree>
			<daff-tree-item [initiallyActive]="initiallyActiveValue">
				<h3 daffTreeItemTitle>Size and Fit</h3>
				<daff-tree-item [initiallyActive]="initiallyActiveValue">
					<h3 daffTreeItemTitle>Size and Fit</h3>
				</daff-tree-item>
			</daff-tree-item>
		</daff-tree>
	` })
	class NotFirstChildWrapperComponent {
		initiallyActiveValue: boolean;
	}

	describe('when it is not the first child tree-item', () => {
	  let fixture: ComponentFixture<NotFirstChildWrapperComponent>;

	  beforeEach(waitForAsync(() => {
	    TestBed.configureTestingModule({
	      imports: [
	        NoopAnimationsModule,
	        FontAwesomeModule,
	      ],
	      declarations: [
	        NotFirstChildWrapperComponent,
	        DaffTreeItemComponent,
	        DaffTreeComponent,
	      ],
	    })
	      .compileComponents();
	  }));

	  beforeEach(() => {
	    fixture = TestBed.createComponent(NotFirstChildWrapperComponent);

	    fixture.detectChanges();
	  });

	  it('should have a level that matches the depth of the tree-item', () => {
	    const treeItemUnderTest: DaffTreeItemComponent =
				fixture.debugElement.queryAll(By.css('daff-tree-item'))[1].componentInstance;

	    expect(treeItemUnderTest._level).toEqual(1);
	  });
	});

	@Component({ template: `
		<daff-tree>
			<daff-tree-item [initiallyActive]="initiallyActiveValue">
				<h3 daffTreeItemTitle>Size and Fit</h3>
				<daff-tree-item [initiallyActive]="initiallyActiveValue">
					<h3 daffTreeItemTitle>Size and Fit</h3>
				</daff-tree-item>
			</daff-tree-item>
		</daff-tree>
	` })
	class HasChildWrapperComponent {
		initiallyActiveValue: boolean;
	}

	describe('when it has a child tree-item', () => {
	  let fixture: ComponentFixture<HasChildWrapperComponent>;

	  beforeEach(waitForAsync(() => {
	    TestBed.configureTestingModule({
	      imports: [
	        NoopAnimationsModule,
	        FontAwesomeModule,
	      ],
	      declarations: [
	        HasChildWrapperComponent,
	        DaffTreeItemComponent,
	        DaffTreeComponent,
	      ],
	    })
	      .compileComponents();
	  }));

	  beforeEach(() => {
	    fixture = TestBed.createComponent(HasChildWrapperComponent);

	    fixture.detectChanges();
	  });

	  it('should add a chevron to the tree item title', () => {
	    const suffix = fixture.debugElement.query(By.css('[daffSuffix]'));

	    expect(suffix).toBeDefined();
	  });
	});

	@Component({ template: `
		<daff-tree>
			<daff-tree-item [initiallyActive]="initiallyActiveValue">
				<h3 daffTreeItemTitle>Size and Fit</h3>
			</daff-tree-item>
		</daff-tree>
	` })
	class HasNoChildWrapperComponent {
		initiallyActiveValue: boolean;
	}

	describe('when it does not have a child tree-item', () => {
	  let fixture: ComponentFixture<HasNoChildWrapperComponent>;

	  beforeEach(waitForAsync(() => {
	    TestBed.configureTestingModule({
	      imports: [
	        NoopAnimationsModule,
	        FontAwesomeModule,
	      ],
	      declarations: [
	        HasNoChildWrapperComponent,
	        DaffTreeItemComponent,
	        DaffTreeComponent,
	      ],
	    })
	      .compileComponents();
	  }));

	  beforeEach(() => {
	    fixture = TestBed.createComponent(HasNoChildWrapperComponent);

	    fixture.detectChanges();
	  });

	  it('should not add a chevron to the tree item title', () => {
	    const suffix = fixture.debugElement.query(By.css('[daffSuffix]'));

	    expect(suffix).toBeNull();
	  });
	});
});

