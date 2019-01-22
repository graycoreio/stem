import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { SelectValidatorComponent } from './select-validator.component';
import { ErrorStateMatcher } from '../error-state-matcher/error-state-matcher';

@Component({template: '<select daff-select-validator [formSubmitted]="formSubmittedValue" [formControl]="formControlValue" [errorStateMatcher]="errorStateMatcherValue"></select>'})
class WrapperComponent {
  formSubmittedValue: boolean;
  formControlValue: FormControl;
  errorStateMatcherValue: ErrorStateMatcher;
}

describe('SelectValidatorComponent', () => {
  let stubFormControl;
  let stubFormSubmitted: boolean;
  let mockErrorStateMatcher: ErrorStateMatcher;
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let component: SelectValidatorComponent;
  let hostNativeElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        SelectValidatorComponent,
        WrapperComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    stubFormControl = new FormControl();
    stubFormSubmitted = false;
    mockErrorStateMatcher = new ErrorStateMatcher();

    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    wrapper.formControlValue = stubFormControl;
    wrapper.formSubmittedValue = stubFormSubmitted;
    fixture.detectChanges();

    component = fixture.debugElement.query(By.css('[daff-select-validator]')).componentInstance;
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should be able to take formControl as select', () => {
    expect(component.formControl).toEqual(stubFormControl);
  });

  it('should be able to take formSubmitted as select', () => {
    expect(component.formSubmitted).toEqual(stubFormSubmitted);
  });

  it('should be able to take an ErrorStateMatcher as select', () => {
    expect(component.errorStateMatcher).toEqual(mockErrorStateMatcher);
  });

  describe('ngOnInit', () => {
    
    describe('when errorStateMatcher is not provided by the host component', () => {
      
      let errorStateMatcherTestFixture: ComponentFixture<WrapperComponent>;

      beforeEach(() => {
        errorStateMatcherTestFixture = TestBed.createComponent(WrapperComponent);
        wrapper = errorStateMatcherTestFixture.componentInstance;
        wrapper.formControlValue = stubFormControl;
        wrapper.formSubmittedValue = stubFormSubmitted;
        errorStateMatcherTestFixture.detectChanges();

        component = errorStateMatcherTestFixture.debugElement.query(By.css('[daff-select-validator]')).componentInstance;
      });

      it('should initialize a default ErrorStateMatcher', () => {
        expect(component.errorStateMatcher).toEqual(jasmine.any(ErrorStateMatcher));
      });
    });

    describe('when formControl is not provided by the host component', () => {
      
      let noFormControlTestFixture: ComponentFixture<WrapperComponent>;

      beforeEach(() => {
        noFormControlTestFixture = TestBed.createComponent(WrapperComponent);
        wrapper = noFormControlTestFixture.componentInstance;
        wrapper.formSubmittedValue = stubFormSubmitted;
      });

      it('should throw an error', () => {
          expect(function() {
            noFormControlTestFixture.detectChanges()
          }).toThrow(new Error('formControl: FormControl and formSubmitted: boolean are required fields'));
      });
    });

    describe('when formSubmitted is not provided by the host component', () => {
      
      let noFormSubmittedTestFixture: ComponentFixture<WrapperComponent>;

      beforeEach(() => {
        noFormSubmittedTestFixture = TestBed.createComponent(WrapperComponent);
        wrapper = noFormSubmittedTestFixture.componentInstance;
        wrapper.formControlValue = stubFormControl;
      });

      it('should throw an error', () => {
          expect(function() {
            noFormSubmittedTestFixture.detectChanges()
          }).toThrow(new Error('formControl: FormControl and formSubmitted: boolean are required fields'));
      });
    });
  });

  describe('ngDoCheck - when the control is touched', () => {

    let returnedValue;

    beforeEach(() => {
      returnedValue = false;

      fixture.debugElement.query(By.css('select')).nativeElement.touched = true;
    });
    
    it('should call errorStateMatcher.isErrorState', () => {
      spyOn(component.errorStateMatcher, 'isErrorState').and.returnValue(returnedValue)
      fixture.detectChanges();

      expect(component.errorStateMatcher.isErrorState).toHaveBeenCalledWith(stubFormControl, stubFormSubmitted);
    });

    it('should set errorState to returned value of errorStateMatcher.isErrorState', () => {
      spyOn(component.errorStateMatcher, 'isErrorState').and.returnValue(returnedValue)
      fixture.detectChanges();

      expect(component.errorState).toEqual(returnedValue);
    });

    describe('when formControl has not been touched', () => {
      
      it('should set validState to false', () => {
        stubFormControl.touched = false;
        component.formControl = stubFormControl;
     
        fixture.detectChanges();

        expect(component.validState).toBeFalsy();
      });
    });

    describe('when formControl has been touched', () => {

      beforeEach(() => {
        stubFormControl.touched = true;        
      });
      
      describe('and has an error', () => {
        
        it('should set validState to false', () => {
          spyOn(component.errorStateMatcher, 'isErrorState').and.returnValue(true);
          component.formControl = stubFormControl;
      
          fixture.detectChanges();

          expect(component.validState).toBeFalsy();
        });
      });

      describe('and does not have an error', () => {
        
        it('should set validState to true', () => {
          stubFormControl.errors = false;
          component.formControl = stubFormControl;
      
          fixture.detectChanges();

          expect(component.validState).toBeTruthy();
        });
      });
    });
  });

  describe('when errorState is true', () => {
    
    beforeEach(() => {
      stubFormControl.errors = true;
      stubFormControl.touched = true;
      component.formControl = stubFormControl;
      fixture.detectChanges();
    });
    
    it('should set daff-select-validator__error class on host component', () => {
      hostNativeElement = fixture.debugElement.query(By.css('select')).nativeElement;

      expect(hostNativeElement.classList.contains('daff-select-validator__error')).toBeTruthy();
    });
  });

  describe('when errorState is false', () => {
    
    beforeEach(() => {
      stubFormControl.errors = false;
      stubFormControl.touched = false;
      component.formControl = stubFormControl;
      fixture.detectChanges();
    });
    
    it('should set not set daff-select-validator__error class on host component', () => {
      hostNativeElement = fixture.debugElement.query(By.css('select')).nativeElement;

      expect(hostNativeElement.classList.contains('daff-select-validator__error')).toBeFalsy();
    });
  });

  describe('when validState is true', () => {
    
    beforeEach(() => {
      stubFormControl.errors = false;
      stubFormControl.touched = true;
      component.formControl = stubFormControl;
      fixture.detectChanges();
    });
    
    it('should set set daff-select-validator__valid class on host component', () => {
      hostNativeElement = fixture.debugElement.query(By.css('select')).nativeElement;

      expect(hostNativeElement.classList.contains('daff-select-validator__valid')).toBeTruthy();
    });
  });

  describe('when validState is false', () => {
    
    beforeEach(() => {
      stubFormControl.errors = false;
      stubFormControl.touched = false;
      component.formControl = stubFormControl;
      fixture.detectChanges();
    });
    
    it('should set not set daff-select-validator__valid class on host component', () => {
      hostNativeElement = fixture.debugElement.query(By.css('select')).nativeElement;

      expect(hostNativeElement.classList.contains('daff-select-validator__valid')).toBeFalsy();
    });
  });
});
