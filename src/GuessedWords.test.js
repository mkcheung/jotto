import React from 'react';
import { shallow } from 'enzyme';
import checkPropTypes from 'check-prop-types';

import GuessedWords from './components/GuessedWords';
import { checkProps, findByTestAttr } from '../test/testUtils';


const defaultProps = {
	guessedWords: [
		{
			guessedWord: 'train',
			letterMatchCount:3
		}
	]
};


const setup = (props={}, state=null) => {
	const setupProps = { ...defaultProps, ...props };
	const wrapper = shallow(<GuessedWords {...setupProps} />);
	if(state){
		wrapper.setState(state);
	}
	return wrapper;
}


test('does not throw warning with expected props', () => {
	checkProps(GuessedWords, defaultProps);
});

describe('if there are no words guessed', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = setup({guessedWords:[]});
	});
	test('renders without error', () => {
		const component = findByTestAttr(wrapper, 'component-guessed-words');
		expect(component.length).toBe(1);
	});

	test('renders instructions to guess a word', () => {
		const instructions = findByTestAttr(wrapper, 'guess-instructions'); 
		expect(instructions.length).not.toBe(0);
	});
})

describe('if there are words guessed', () => {
	let wrapper;
	let guessedWords = [
		{
			guessedWord: 'train',
			letterMatchCount:3,
		},
		{
			guessedWord: 'agile',
			letterMatchCount:1,
		},
		{
			guessedWord: 'party',
			letterMatchCount:5,
		}
	];

	beforeEach(() => {
		wrapper = setup({guessedWords});
	});
	test('renders without error', () => {
		const component = findByTestAttr(wrapper, 'component-guessed-words');
		expect(component.length).toBe(1);
	});
	
	test('renders "guessed words" section', () => {
		const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words');
		expect(guessedWordsNode.length).toBe(1);
	});

	test('correct number of guessed words', () => {
		const guessedWordNodes = findByTestAttr(wrapper, 'guessed-word');
		expect(guessedWordNodes.length).toBe(guessedWords.length);
	});

})
