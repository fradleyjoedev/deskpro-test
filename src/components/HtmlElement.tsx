import React from 'react';
import { IRouteData } from '../interfaces/IRouteData';

export const HtmlElement: React.FunctionComponent<IRouteData> = (data: IRouteData): JSX.Element => {
  return (
    <div>
      <h1>{data.pageTitle}</h1>
      <p>{data.pageDescription}</p>
    </div>
  );
};

