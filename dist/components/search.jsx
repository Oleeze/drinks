import React, { Component } from "react";
import axios from "axios";
import cleaner from "../drinkCleaner";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      listOfDrinks: []
    };
  }

  search() {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${
          this.state.input
        }`
      )
      .then(result => {
        let drinks = cleaner(result);
        this.setState({ listOfDrinks: drinks });
      });
  }

  listen(e) {
    this.setState({ input: e.target.value });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={e => this.listen(e)}
          placeholder="Search Drinks or what ever you want"
        />
        <button onClick={() => this.search()}>Search</button>
        <ul>
          {this.state.listOfDrinks.map(drink => {
            return (
              <li onClick={() => this.props.grabId(drink.idDrink)}>
                <img src={drink.strDrinkThumb} width="50" height="50" />
                {drink.strDrink}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Search;
