import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { NavBar } from './components/NavBar';
import { MapRoute } from './utils/MapRoute';
import { IRouteData } from './interfaces/IRouteData';
import { DATA_URL } from './constants';
import { BrowserRouter as Router, Switch } from "react-router-dom";
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
        // Proper error handling should be here. 
        // Added console log for demo purposes.
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <Router>
      <div>
        <NavBar links={data} />
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
