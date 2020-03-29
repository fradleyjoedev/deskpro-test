import React from 'react';
import { Link } from "react-router-dom";
import { IRouteData } from '../interfaces/IRouteData';

interface IProps {
  links: IRouteData[];
}

export const NavBar: React.FunctionComponent<IProps> = ({links}): JSX.Element => {
  return (
    <ul>
      {links.map((route: IRouteData, i: number) => {
          return (<li>
            <Link to={route.path}>{route.linkTitle}</Link>
          </li>)
      })}
    </ul>
  );
};

