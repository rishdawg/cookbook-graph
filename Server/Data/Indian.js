const paratha_ing = ["1.5 cups of cooked rice","1 cup wheat flour",".25 tsp ajwai seed and cumin seeds", "coriander leaves","1 tbsp yogurt","3 crushed green chillies"];
const Biryani_ing = ["1 lb of diced chicken", "2 cups basmati rice","2 tbsp yogurt, garlic paste, ginger paste","1 stick of butter", "shan biryani powder", "tumeric", "salt","1 diced onion","1 tsp Saffron"];
const paratha_steps = ["Take cooked rice and add flour", "add ajwai seeds and cumin seeds", "add chopped coriander leaves", "add yougurt","add green chillies and Salt to taste","Mix and make dough, roll it and shallow fry it"];
const Biryani_steps = ["In a bowl add chicken,tumeric,salt, and keep out side for half hour.","soak rice for half hr in big pan add cumin seeds,add 3 tbsp oil salt then sauté for 3 mins, add water, rice, and saffron cook until rice done"," In a seperate pot take 1 stick butter add onion, shan masala, both pastes, chicken, cook until chicken is tender","layer rice and chicken and mix well"]

const all_indian = [
  {
    image: "https://s3.us-east-2.amazonaws.com/cookbookpic/rice_paratha.jpg",
    title: 'Rice Paratha',
    ingredients: paratha_ing,
    instructions: paratha_steps
  },
  {
    image: "https://s3.us-east-2.amazonaws.com/cookbookpic/Chicken_Biryani.jpg",
    title: 'Biryani',
    ingredients: Biryani_ing,
    instructions: Biryani_steps
  }
];

export default all_indian;
