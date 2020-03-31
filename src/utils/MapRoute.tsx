import React from 'react';
import { Route } from "react-router-dom";
import { HtmlElement } from '../components/HtmlElement';
import { IRouteData } from '##/interfaces/IRouteData';
import { TableElement } from '../components/TableElement';
import { IHTMLElement } from '##/interfaces/IHtmlElement';
import { ITableElement } from '##/interfaces/ITableElement';

interface IComponent {
  [key: string]: React.FunctionComponent<IHTMLElement | ITableElement>;
}

export function MapRoute(route: IRouteData): JSX.Element {
  // Creates a object to map string to the appropriate component
  // from data
  const components: IComponent = {
    "HtmlElement": HtmlElement,
    "TableElement": TableElement,
  };

  if(!route.items || route.items.length == 0)
    return null;

  return (
    <> 
      {route.items.map((item: IHTMLElement, i: number) => {
        const Component: React.FunctionComponent<IHTMLElement | ITableElement> = components[item.componentType];
        
        return (
          <Route
            key={i}
            path={route.path}
            component={() => <Component {...item} />}
          />
        )
      })} 
    </>
  );
}