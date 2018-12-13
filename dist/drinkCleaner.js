let cleaner = (result) => {
  let drinks = [];
  result.data.drinks.forEach(element => {
    let drink = { ingredients: [], measurements: [] };
    Object.keys(element).forEach(item => {
      if (element[item]) {
        console.log(`${item}: ${element[item]}`);
        if (item.includes("strIngredient")) {
          drink.ingredients.push(element[item]);
        } else if (item.includes("Measure")) {
          drink.measurements.push(element[item]);
        } else {
          drink[item] = element[item];
        }
      }
    })
    drinks.push(drink);
  })
  return drinks;
}

module.exports = cleaner;