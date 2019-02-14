import { Component, Output, EventEmitter } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { Store, StoreModule, combineReducers } from '@ngrx/store';

import { DaffSidebarModule, DaffSidebarViewportComponent } from '@daffodil/design';

import { DaffioSidebarViewportContainer } from './sidebar-viewport.component';
import * as fromSidebar from '../../reducers/index';
import { ToggleSidebar, OpenSidebar, CloseSidebar, SetSidebarState } from '../../actions/sidebar.actions';

@Component({selector: 'daffio-sidebar', template: ''})
class MockDaffioSidebarContainerComponent {
  @Output() close: EventEmitter<any> = new EventEmitter();
}

describe('DaffioSidebarViewportContainer', () => {
  let component: DaffioSidebarViewportContainer;
  let fixture: ComponentFixture<DaffioSidebarViewportContainer>;
  
  let daffSidebarViewport: DaffSidebarViewportComponent;

  let store: Store<fromSidebar.State>;
  let stubShowSidebar: boolean;
  let daffioSidebarContainer: MockDaffioSidebarContainerComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          daffioSidebar: combineReducers(fromSidebar.reducers),
        }),
        NoopAnimationsModule,
        DaffSidebarModule,
      ],
      declarations: [ 
        DaffioSidebarViewportContainer,
        MockDaffioSidebarContainerComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioSidebarViewportContainer);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    spyOn(store, 'dispatch');

    fixture.detectChanges();

    daffSidebarViewport = fixture.debugElement.query(By.css("daff-sidebar-viewport")).componentInstance;
    daffioSidebarContainer = fixture.debugElement.query(By.css("daffio-sidebar")).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the `daff-sidebar-viewport` mode to over', () => {
    expect(daffSidebarViewport.mode).toEqual("over");
  });

  describe('when the `daff-sidebar-viewport` emits `backdropClicked`', () => {
    it('should call close', () => {
      spyOn(component, 'close');

      daffSidebarViewport.backdropClicked.emit()

      expect(component.close).toHaveBeenCalledWith(); 
    });   
  });

  describe('when sidebarContainer emits close', () => {
    
    it('should call close', () => {
      spyOn(component, 'close');

      daffioSidebarContainer.close.emit();
      
      expect(component.close).toHaveBeenCalled();
    });
  });

  describe('ngOnInit', () => {
    it('should initialize showSidebar$', () => {
      stubShowSidebar = false;
      spyOn(fromSidebar, 'selectShowSidebar').and.returnValue(stubShowSidebar);

      component.ngOnInit();

      component.showSidebar$.subscribe((showSidebar) => {
        expect(showSidebar).toEqual(stubShowSidebar);
      });
    });
  });

  describe('methods', () => {
    describe('close', () => {
      it('should call store.dispatch with a CloseSidebar action', () => {
        component.close();
  
        expect(store.dispatch).toHaveBeenCalledWith(new CloseSidebar());
      });
    });

    describe('open', () => {
      it('should call store.dispatch with a OpenSidebar action', () => {
        component.open();
  
        expect(store.dispatch).toHaveBeenCalledWith(new OpenSidebar());
      });
    });

    describe('toggle', () => {
      it('should call store.dispatch with a ToggleSidebar action', () => {
        component.toggle();
  
        expect(store.dispatch).toHaveBeenCalledWith(new ToggleSidebar());
      });
    });

    describe('setVisibility', () => {
      it('should call store.dispatch with a SetSidebarAction action', () => {
        component.setVisibility(true);
  
        expect(store.dispatch).toHaveBeenCalledWith(new SetSidebarState(true));
      });
    });
  });
});
