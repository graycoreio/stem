import { randomSubset } from './random-subset';

describe('Core | Utils | random-subset', () => {
	it('should return a random subset of the given array', () => {
		const initialArray = [1,2,3,4,5,6,7,8,9];
		const result = randomSubset(initialArray);
		result.forEach(item => {
			expect(initialArray.includes(item));
		});
	});
});
