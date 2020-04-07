import { ActionReducerMap } from '@ngrx/store';

import { daffGeographyReducer } from './geography/geography.reducer';
import { DaffGeographyFeatureState } from './geography-reducers-state.interface';
import { daffCountryEntitiesReducer } from './country-entities/country-entities.reducer';

export const daffGeographyReducers = {
  geography: daffGeographyReducer,
  countries: daffCountryEntitiesReducer
}
