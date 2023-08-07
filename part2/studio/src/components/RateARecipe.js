let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe(props) {
  function GiveRating() {
    return <h3>{stars[props.rating - 1]}</h3>;
 }
 //Create a ternary that checks the value of props.
 //If the number is between 1 and 5, then render GiveRating else render null
 return props.rating >= 1 && props.rating <= 5 ? <GiveRating /> : null;
}

export default RateARecipe;


//conditional to render stars based on a number provided in App.js 
