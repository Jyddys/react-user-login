import React from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = (props) => {
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <p>Remember to <span style={{ color: "red" }}>sleep </span>enough!</p>
    </Card>
  );
};

export default Home;
