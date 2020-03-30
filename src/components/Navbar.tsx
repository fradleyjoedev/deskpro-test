import React from 'react';
import { Link } from "react-router-dom";
import { IRouteData } from '../interfaces/IRouteData';
import './NavBar.scss';

interface IProps {
  links: IRouteData[];
}

const setDocumentTitle = (title: string): void => {
  document.title = title;
}

export const NavBar: React.FunctionComponent<IProps> = ({links}): JSX.Element => {
  return (
    <ul className='navbar'>
      {links.map((route: IRouteData, i: number) => {
          return (<li key={i} className='navbar__item'>
            <Link to={route.path} onClick={() => setDocumentTitle(route.pageTitle)}>{route.linkTitle}</Link>
          </li>)
      })}
    </ul>
  );
};

