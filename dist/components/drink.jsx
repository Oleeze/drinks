import React, { Component } from "react";

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
          <div className="left">
            {this.props.cocktail.ingredients.map(ingredient => (
              <div>
                <img
                  src={`https://www.thecocktaildb.com/images/ingredients/${ingredient}-Small.png`}
                />
                <p>{ingredient}</p>
              </div>
            ))}
          </div>
          <h1>Measurements</h1>
          <div className="right">
            {this.props.cocktail.measurements.map(measurement => (
              <p>{measurement}</p>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Drink;
