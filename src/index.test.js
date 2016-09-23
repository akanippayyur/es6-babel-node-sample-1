import {expect} from 'chai';
import {index} from './index';

describe('Check if the specs are working', function(){
	it('Expect to be true always.', function() {
		expect(true).equals(true);
	});

	it('Expect to be false never.', function() {
		expect(false).equals(false);
	});
});