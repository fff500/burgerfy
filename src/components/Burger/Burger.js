import React from 'react';
import PropTypes from 'prop-types';

import classes from './Burger.module.css';
import Ingredient from './Ingredient/Ingredient';

const Burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map( ingredientKey => {
      return [...Array(props.ingredients[ingredientKey])].map((_, index) => {
        return <Ingredient key={ingredientKey + index} type={ingredientKey} />
      })
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, [])

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please, add some ingredients.</p>
  }

  return (
    <div className={classes.Burger}>
      <Ingredient type="bread-top" />
      {transformedIngredients}
      <Ingredient type="bread-bottom" />
    </div>
  );
};

Burger.propTypes = {
  ingredients: PropTypes.object.isRequired
};

export default Burger;
