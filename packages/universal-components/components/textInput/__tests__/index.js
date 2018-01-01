import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mountToJson } from 'enzyme-to-json';
import InputComponent from '../';

Enzyme.configure({ adapter: new Adapter() });

describe('<InputComponent />', () => {
  it('<InputComponent />', () => {
    const wrapper = mount(<InputComponent onKeyPress={() => {}} />);
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });

  it('onKeyPress()', () => {
    const spy = jest.fn();
    const wrapper = mount(<InputComponent onKeyPress={spy} />);
    wrapper
      .find('TextInput')
      .first()
      .props()
      .onKeyPress();

    expect(spy).toBeCalled();
  });
});
