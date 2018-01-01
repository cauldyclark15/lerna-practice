import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mountToJson } from 'enzyme-to-json';
import ImageComponent from '../';

Enzyme.configure({ adapter: new Adapter() });

describe('<ImageComponent />', () => {
  it('<ImageComponent />', () => {
    const wrapper = mount(<ImageComponent height={40} width={40} />);
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });
});
