import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { NavBar } from './components/navbar';
import { MapRoute } from './utils/MapRoute';
import { IRouteData } from './interfaces/IRouteData';
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

const Index: React.FunctionComponent = (): JSX.Element => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        './data/page-data.json',
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <Router>
      <div>
        <NavBar/>
        <Switch>
          {data.map((route: IRouteData, i: number) => {
            return <MapRoute key={i} {...route} />
          })}
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));
