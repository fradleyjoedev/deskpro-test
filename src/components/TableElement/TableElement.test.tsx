import React from "react";
import { shallow } from 'enzyme';
import { TableElement } from './index';
import { ITableElement } from '../../interfaces/ITableElement';

const data: ITableElement = {
  componentType: 'HTMLElement',
  columns: [
    { "heading": "Name", "data": ["Billy", "Joe", "Dave"]}, 
    { "heading": "Email", "data": ["billy@mcgun.co.uk", "joe@hotmail.com", "dave@gtimes.com"]},
    { "heading": "Location", "data": ["Manchester", "Newcastle", "London"]}
  ]
}

describe('Test for TableElement', () => {
  it('snapshot', () => {
    const link = shallow(<TableElement {...data} />);
    expect(link).toMatchSnapshot();
  });
});