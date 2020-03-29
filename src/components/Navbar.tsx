import React from 'react';
import { Link } from "react-router-dom";
import { IRouteData } from '../interfaces/IRouteData';

interface IProps {
  links: IRouteData[];
}

const setDocumentTitle = (title: string) => {
  document.title = title;
}

export const NavBar: React.FunctionComponent<IProps> = ({links}): JSX.Element => {
  return (
    <ul>
      {links.map((route: IRouteData, i: number) => {
          return (<li key={i}>
            <Link to={route.path} onClick={() => setDocumentTitle(route.pageTitle)}>{route.linkTitle}</Link>
          </li>)
      })}
    </ul>
  );
};

