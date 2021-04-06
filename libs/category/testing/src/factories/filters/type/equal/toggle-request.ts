import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';

import {
  DaffToggleCategoryFilterEqualRequest,
  DaffCategoryFilterType,
} from '@daffodil/category';
import { DaffModelFactory } from '@daffodil/core/testing';

export class MockDaffToggleCategoryFilterEqualRequest implements DaffToggleCategoryFilterEqualRequest {
  type: DaffCategoryFilterType.Equal = DaffCategoryFilterType.Equal;
  name = faker.random.word();
  value = faker.random.uuid();
}

@Injectable({
  providedIn: 'root',
})
export class DaffCategoryFilterToggleRequestEqualFactory extends DaffModelFactory<DaffToggleCategoryFilterEqualRequest>{
  constructor(){
    super(MockDaffToggleCategoryFilterEqualRequest);
  }
}