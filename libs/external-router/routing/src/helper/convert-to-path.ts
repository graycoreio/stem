import {
	UrlSegment,
} from '@angular/router';

/**
 * Converts a UrlSegment into its complete Url.
 * 
 * @docs-private
 */
export const daffConvertToPath = (segments: UrlSegment[]) => {
	return segments.map(seg => seg.path).join('/');
};
