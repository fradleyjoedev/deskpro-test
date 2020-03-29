import React from 'react';
import { Route } from "react-router-dom";
import { HtmlElement } from '../components/HtmlElement';
import { IRouteData } from '../interfaces/IRouteData';

interface IComponent {
  [key: string]: React.FunctionComponent<any>;
}

export function MapRoute(route: IRouteData){
  // Creates a object to map string to the appropriate component
  const components: IComponent = {
    "HtmlElement": HtmlElement,
  };

  const Component = components[route.component];

  return (
    <Route
      path={route.path}
      component={Component}
    />
  );
}