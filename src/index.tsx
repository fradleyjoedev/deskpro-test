import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { NavBar } from './components/NavBar';
import { MapRoute } from './utils/MapRoute';
import { IRouteData } from './interfaces/IRouteData';
import { DATA_URL } from './constants';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import './styles/index.scss';

const Index: React.FunctionComponent = (): JSX.Element => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(
          DATA_URL,
        );
        setData(result.data);
      } catch (err) {
        new Error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <Router>
      <div>
        <NavBar links={data} />
        <Switch>
          <Route exact path="/">
            <Redirect to="/deskpro-test" />
          </Route>
          {data.map((route: IRouteData, i: number) => {
            return <MapRoute key={i} {...route} />
          })}
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));
