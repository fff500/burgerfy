import React, { Component } from 'react';

import Aux from '../hoc/Auxiliary';
import Burger from '../components/Burger/Burger';
import BuildControls from '../components/Burger/BuildControls/BuildControls/BuildControls';

const INGREDIENTS_PRICES = {
  salad: 0.5,
  cheese: 1,
  bacon: 1.5,
  meat: 2
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4
  }

  addIngredientHandler = (type) => {
    const updatedCount = this.state.ingredients[type] + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const newPrice = this.state.totalPrice + INGREDIENTS_PRICES[type];
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const newPrice = this.state.totalPrice - INGREDIENTS_PRICES[type];
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
  }

  render() {
    const disabledData = {
      ...this.state.ingredients
    }
    for (let key in disabledData) {
      disabledData[key] = disabledData[key] <= 0
    }

    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls
          price={this.state.totalPrice}
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledData}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
