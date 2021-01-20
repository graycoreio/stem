/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DaffAuthActionTypes } from '../../actions/auth.actions';
import { daffAuthInitialState } from './auth-initial-state';
/**
 * @template T, U, S
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function daffAuthReducer(state = daffAuthInitialState, action) {
    switch (action.type) {
        case DaffAuthActionTypes.AuthCheckAction:
            return Object.assign({}, state, { loading: true });
        case DaffAuthActionTypes.AuthCheckSuccessAction:
            return Object.assign({}, state, { loading: false });
        case DaffAuthActionTypes.AuthCheckFailureAction:
            return Object.assign({}, state, { loading: false, errors: [action.errorMessage] });
        default:
            return state;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2F1dGgvIiwic291cmNlcyI6WyJyZWR1Y2Vycy9hdXRoL2F1dGgucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLG1CQUFtQixFQUFtQixNQUFNLDRCQUE0QixDQUFDO0FBS2xGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7O0FBRTVELE1BQU0sVUFBVSxlQUFlLENBSzdCLEtBQUssR0FBRyxvQkFBb0IsRUFDNUIsTUFJQztJQUVELFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLG1CQUFtQixDQUFDLGVBQWU7WUFDdEMseUJBQ0ssS0FBSyxJQUNSLE9BQU8sRUFBRSxJQUFJLElBQ2I7UUFFSixLQUFLLG1CQUFtQixDQUFDLHNCQUFzQjtZQUM3Qyx5QkFDSyxLQUFLLElBQ1IsT0FBTyxFQUFFLEtBQUssSUFDZDtRQUVKLEtBQUssbUJBQW1CLENBQUMsc0JBQXNCO1lBQzdDLHlCQUNLLEtBQUssSUFDUixPQUFPLEVBQUUsS0FBSyxFQUNkLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFDN0I7UUFFSjtZQUNFLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhZmZBdXRoQWN0aW9uVHlwZXMsIERhZmZBdXRoQWN0aW9ucyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvYXV0aC5hY3Rpb25zJztcbmltcG9ydCB7IERhZmZBdXRoUmVkdWNlclN0YXRlIH0gZnJvbSAnLi9hdXRoLXJlZHVjZXItc3RhdGUuaW50ZXJmYWNlJztcbmltcG9ydCB7IERhZmZBdXRoVG9rZW4gfSBmcm9tICcuLi8uLi9tb2RlbHMvYXV0aC10b2tlbic7XG5pbXBvcnQgeyBEYWZmTG9naW5JbmZvIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2xvZ2luLWluZm8nO1xuaW1wb3J0IHsgRGFmZkFjY291bnRSZWdpc3RyYXRpb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvYWNjb3VudC1yZWdpc3RyYXRpb24nO1xuaW1wb3J0IHsgZGFmZkF1dGhJbml0aWFsU3RhdGUgfSBmcm9tICcuL2F1dGgtaW5pdGlhbC1zdGF0ZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBkYWZmQXV0aFJlZHVjZXI8XG4gIFQgZXh0ZW5kcyBEYWZmTG9naW5JbmZvLFxuICBVIGV4dGVuZHMgRGFmZkF1dGhUb2tlbixcbiAgUyBleHRlbmRzIERhZmZBY2NvdW50UmVnaXN0cmF0aW9uLFxuPihcbiAgc3RhdGUgPSBkYWZmQXV0aEluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBEYWZmQXV0aEFjdGlvbnM8XG4gICAgVCxcbiAgICBVLFxuICAgIFNcbiAgPlxuKTogRGFmZkF1dGhSZWR1Y2VyU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBEYWZmQXV0aEFjdGlvblR5cGVzLkF1dGhDaGVja0FjdGlvbjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2FkaW5nOiB0cnVlXG4gICAgICB9O1xuXG4gICAgY2FzZSBEYWZmQXV0aEFjdGlvblR5cGVzLkF1dGhDaGVja1N1Y2Nlc3NBY3Rpb246XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgIH07XG5cbiAgICBjYXNlIERhZmZBdXRoQWN0aW9uVHlwZXMuQXV0aENoZWNrRmFpbHVyZUFjdGlvbjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiBbYWN0aW9uLmVycm9yTWVzc2FnZV1cbiAgICAgIH07XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iXX0=