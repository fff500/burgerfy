import React from 'react';
import PropTypes from 'prop-types';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const BuildControls = ({ price, ingredientAdded, ingredientRemoved, disabled }) => (
  <div className={classes.BuildControls}>
    <p>Current price: <strong>{price.toFixed(2)}</strong></p>
    {controls.map((control) => {
      return <BuildControl
        key={control.label}
        label={control.label}
        added={() => ingredientAdded(control.type)}
        removed={() => ingredientRemoved(control.type)}
        disabled={disabled[control.type]}
      />
    })}
  </div>
);

BuildControls.propTypes = {
  price: PropTypes.number.isRequired,
  ingredientAdded: PropTypes.func.isRequired,
  ingredientRemoved: PropTypes.func.isRequired,
  disabled: PropTypes.object.isRequired
};

export default BuildControls;
