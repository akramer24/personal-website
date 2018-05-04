import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import {AllProjects} from '../components';

describe('AllProjects', () => {
  let wrapper;
  beforeEach('set up wrapper', () => {
    wrapper = shallow(<AllProjects />);
  })

  it('displays a header', () => {
    const text = wrapper.text();
    expect(text).to.include('These are my projects.');
  })
})
