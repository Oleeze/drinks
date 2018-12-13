import React, { Component } from "react";
import "../styles/drink.scss";

class Drink extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.cocktail.strDrink}</h1>
        <img src={this.props.cocktail.strDrinkThumb} />
        <h3>Instructions</h3>
        <p>{this.props.cocktail.strInstructions} </p>
        <div>
          <h1>Ingredients</h1>
          <div className="ingredient-wrapper">
            {this.props.cocktail.ingredients.map((ingredient, i) => (
              <div className="ingredient">
                <img
                  src={`https://www.thecocktaildb.com/images/ingredients/${ingredient}-Small.png`}
                />
                <div className="ingredient-info">
                  <p>{ingredient}</p>
                  <p>{this.props.cocktail.measurements[i]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Drink;
