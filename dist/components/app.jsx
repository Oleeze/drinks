import React, { Component } from "react";
import Drink from "./drink.jsx";
import axios from "axios";
import Search from "./search.jsx";
import cleaner from "../drinkCleaner";
import "../styles/app.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinkss: []
    };
  }

  componentDidMount() {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then(result => {
        let drink = cleaner(result);
        this.setState({ drinkss: drink });
        console.log(drink);
      });
  }

  grabId(drinkId) {
    axios
      .get(
        "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkId
      )
      .then(result => {
        let drink = cleaner(result);
        this.setState({ drinkss: drink });
        console.log(drink);
      });
  }

  render() {
    return (
      <div>
        <Search grabId={drink => this.grabId(drink)} />
        <div>
          {this.state.drinkss.map(drink => {
            return <Drink cocktail={drink} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
