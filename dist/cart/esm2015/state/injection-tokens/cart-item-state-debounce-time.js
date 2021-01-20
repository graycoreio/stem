/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
/**
 * An injection token for setting how long (in ms) a cart item remains in a temporary state before
 * reverting back to a default state. These temporary states are set after mutating or adding a cart item.
 * Daffodil has a timer that resets the state of all cart items after this debounce time, but the timer will
 * reset if a new item addition or mutation occurs. The default is 4000.
 * @type {?}
 */
export const DaffCartItemStateDebounceTime = new InjectionToken('DaffCartItemStateDebounceTime');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLXN0YXRlLWRlYm91bmNlLXRpbWUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9zdGF0ZS8iLCJzb3VyY2VzIjpbImluamVjdGlvbi10b2tlbnMvY2FydC1pdGVtLXN0YXRlLWRlYm91bmNlLXRpbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0FBUS9DLE1BQU0sT0FBTyw2QkFBNkIsR0FBRyxJQUFJLGNBQWMsQ0FBUywrQkFBK0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQW4gaW5qZWN0aW9uIHRva2VuIGZvciBzZXR0aW5nIGhvdyBsb25nIChpbiBtcykgYSBjYXJ0IGl0ZW0gcmVtYWlucyBpbiBhIHRlbXBvcmFyeSBzdGF0ZSBiZWZvcmVcbiAqIHJldmVydGluZyBiYWNrIHRvIGEgZGVmYXVsdCBzdGF0ZS4gVGhlc2UgdGVtcG9yYXJ5IHN0YXRlcyBhcmUgc2V0IGFmdGVyIG11dGF0aW5nIG9yIGFkZGluZyBhIGNhcnQgaXRlbS5cbiAqIERhZmZvZGlsIGhhcyBhIHRpbWVyIHRoYXQgcmVzZXRzIHRoZSBzdGF0ZSBvZiBhbGwgY2FydCBpdGVtcyBhZnRlciB0aGlzIGRlYm91bmNlIHRpbWUsIGJ1dCB0aGUgdGltZXIgd2lsbFxuICogcmVzZXQgaWYgYSBuZXcgaXRlbSBhZGRpdGlvbiBvciBtdXRhdGlvbiBvY2N1cnMuIFRoZSBkZWZhdWx0IGlzIDQwMDAuXG4gKi9cbmV4cG9ydCBjb25zdCBEYWZmQ2FydEl0ZW1TdGF0ZURlYm91bmNlVGltZSA9IG5ldyBJbmplY3Rpb25Ub2tlbjxudW1iZXI+KCdEYWZmQ2FydEl0ZW1TdGF0ZURlYm91bmNlVGltZScpO1xuIl19