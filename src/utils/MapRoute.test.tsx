import React from "react";
import { shallow } from 'enzyme';
import { MapRoute } from './MapRoute';
import { IRouteData } from "##/interfaces/IRouteData";

const data: IRouteData = {
  "path": "/page-a",
  "linkTitle": "Page A",
  "pageTitle": "Info about Page A",
  "items": [
    {
      "componentType": "HtmlElement",
      "title": "Info about Page A",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis nunc vitae quam lobortis, et mollis lorem commodo. In hac habitasse platea dictumst. Integer eget metus vitae felis sodales commodo a et tortor. Phasellus pulvinar tortor ac dui egestas ultricies. Ut ut pharetra metus. Duis imperdiet pulvinar pellentesque."
    }
  ]
}

const dataNoItems: IRouteData = {
  "path": "/page-a",
  "linkTitle": "Page A",
  "pageTitle": "Info about Page A",
  "items": []
}

describe('Tests for MapRoute', () => {
  it('Check props on route', () => {
    const route = shallow(<MapRoute {...data} />);

    expect(route.find('Route').props()).toHaveProperty('component');
    expect(route.find('Route').props()).toHaveProperty('path');
  });

  it('If no items return null', () => {
    const route = shallow(<MapRoute {...dataNoItems} />);

    expect(route.get(0)).toBe(null);
  });
});