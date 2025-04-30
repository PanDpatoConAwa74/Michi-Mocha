import cat_drink_1_1 from './cat_drinks/cat_drink_1_1.jpg';
import cat_drink_1_2 from './cat_drinks/cat_drink_1_2.jpg';
import cat_drink_1_3 from './cat_drinks/cat_drink_1_3.jpg';
import cat_drink_2_1 from './cat_drinks/cat_drink_2_1.jpg';
import cat_drink_2_2 from './cat_drinks/cat_drink_2_2.jpg';
import cat_drink_2_3 from './cat_drinks/cat_drink_2_3.jpg';
import cat_drink_3_1 from './cat_drinks/cat_drink_3_1.jpg';
import cat_drink_3_2 from './cat_drinks/cat_drink_3_2.jpg';

export function Home() {
  const recipes = [
    { name: "KittyOrange juice", image: cat_drink_1_1 },
    { name: "Felimonade and weeds", image: cat_drink_1_2 },
    { name: "Green tea fresh", image: cat_drink_1_3 },
    { name: "FitCat", image: cat_drink_2_1 },
    { name: "Wide fruity juice", image: cat_drink_2_2 },
    { name: "Peachy flufCat", image: cat_drink_2_3 },
    { name: "KittySour", image: cat_drink_3_1 },
    { name: "Pinky promise", image: cat_drink_3_2 }
  ];

  return (
    <div className="recipes">
      {recipes.map((item, index) => (
        <div className="recipe" key={index}>
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <button>Cook it</button>
        </div>
      ))}
    </div>
  );
}
