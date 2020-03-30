import React from "react";
import { shallow } from 'enzyme';
import { HtmlElement } from './index';
import { IHTMLElement } from "##/interfaces/IHtmlElement";

const data: IHTMLElement = {
  componentType: 'HTMLElement',
  title: 'test',
  description: 'test'
}

describe('Test for HtmlElement', () => {
  it('snapshot', () => {
    const link = shallow(<HtmlElement {...data} />);
    expect(link).toMatchSnapshot();
  });
});