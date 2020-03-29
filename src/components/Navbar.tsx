import React from 'react';
import { Link } from "react-router-dom";

export const NavBar: React.FunctionComponent = (): JSX.Element => {
  return (
    <ul>
      <li>
        <Link to="/page-a">Page A</Link>
      </li>
      <li>
        <Link to="/page-b">Page B</Link>
      </li>
    </ul>
  );
};

