import React from 'react';
import { IHTMLElement } from '../interfaces/IHtmlElement';

export const HtmlElement: React.FunctionComponent<IHTMLElement> = (data: IHTMLElement): JSX.Element => {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
};

