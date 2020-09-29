import React from 'react';
import App from '../client/src/components/app';
import { shallow, mount, render } from 'enzyme';

//mock a request

describe('First test', () => {
  it('should display Hello World', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('#hello').text();
    expect(text).toEqual('Hello World!');
  });
});


//If Play Experience, Level of Difficulty, or Value for Money are NULL, it should not appear

//test if each component has the correct text displaying