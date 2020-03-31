import React from "react";
import { shallow } from 'enzyme';
import { NavBar } from './index';
import { ITableElement } from '../../interfaces/ITableElement';
import { IRouteData } from "##/interfaces/IRouteData";

const data: IRouteData[] = [{
  path: "/page-a",
  items: [],
  linkTitle: "Page A",
  pageTitle: "Info about Page A"
}]

describe('Test for NavBar', () => {
  it('snapshot', () => {
    const link = shallow(<NavBar links={data} />);
    expect(link).toMatchSnapshot();
  });
});