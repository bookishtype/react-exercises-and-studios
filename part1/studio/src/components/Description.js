import React from 'react';
import styles from './Description.module.css';

function RecipeAuthor() {
    const authorLink = "http://www.larissaanotherday.com/2013/10/apple-week-apple-bacon-grilled-cheese.html";
    const authorPhoto = "http://4.bp.blogspot.com/-86rtDYEg02s/Wa3IvVODSqI/AAAAAAAAX9M/9Id7exNzPrMSJxRFfpRetkW0DOx7njw_wCK4BGAYYCw/s1600/Blog%2BPhoto.jpg";
    const authorName = "Larissa";
    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Larissa smiles off camera on a bright sunny day while holding her hat to her head." 
            className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Larissa Another Day</a> 
           </div>
        </div>
     );
}

class RecipeDescription extends React.Component {
    render() {
       return(
        <div> 
        <div>
           <h1>Apple Bacon Grilled Cheese Sandwich with Sriracha Butter</h1>
           <p> The slight heat that comes from the sriracha butter perfectly 
            compliments the apple and the bacon.<br/>This butter is the secret weapon of this delicious sandwich!</p>
        </div>
        <RecipeAuthor />
     </div>
       );
    }
 }

 export default RecipeDescription;