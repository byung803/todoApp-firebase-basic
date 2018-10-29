import React from 'react';
import { shallow } from 'enzyme';
import Index from '../../components';

test('should test components index', () => {
    const wrapper = shallow(<Index />);
    expect(wrapper).toMatchSnapshot();
});