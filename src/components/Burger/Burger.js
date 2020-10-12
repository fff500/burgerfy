import React from 'react';

import classes from './Burger.module.css'
import Ingredient from './Ingredient/Ingredient';

const Burger = () => {
  return (
    <div className={classes.Burger}>
      <Ingredient type="bread-top" />
      <Ingredient type="cheese" />
      <Ingredient type="meat" />
      <Ingredient type="bread-bottom" />
    </div>
  );
};

export default Burger
