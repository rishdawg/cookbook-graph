const popcorn_ing = ["3 tbsp Sunflower Seed Oil","1 tbsp Pink Salt","1 tbsp Black Pepper", "1 tbsp chilli powder","1 tbsp tumeric","2 cups popcorn"];
const peanuts_ing = ["2 tsp vege oil", "2 cups unsalted Peanuts","1 tbsp Pink Salt","1 tbsp Black Pepper", "1 tbsp chilli powder"];
const popcorn_steps = ["Take a big pot and place heat on medium", "Put oil into the pot", "put popcorn seeds into pot and cover the pot", "raise heat to high","Shut off heat when seeds are done popping","Mix all spices in thoroughly"];
const peanuts_steps = ["Heat oil on medium heat on a skillet","place in peanuts and stir for 2 mins","put in all spices and stir for 2 mins", "Let it sit on pan for 10-15 mins with no cover", "Seal in ziplock or container that does not allow air to come in"]

const all_snacks = [
  {
    image: "https://s3.us-east-2.amazonaws.com/cookbookpic/SpicyPopcornWeb.jpg",
    title: 'Popcorn',
    ingredients: popcorn_ing,
    instructions: popcorn_steps
  },
  {
    image: "https://s3.us-east-2.amazonaws.com/cookbookpic/spicy_peanuts.JPG",
    title: 'Peanuts',
    ingredients: peanuts_ing,
    instructions: peanuts_steps
  }
];

export default all_snacks;
