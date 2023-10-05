import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Pork M Size set",
    description: "Contains lots of pork",
    price: 5,
  },
  {
    id: "m2",
    name: "Pork L Size set",
    description: "Contains lots of pork",
    price: 7,
  },
  {
    id: "m3",
    name: "Beef set",
    description: "Contains lots of beef",
    price: 10,
  },
  {
    id: "m4",
    name: "Seafood set",
    description: "Contains fresh seafood",
    price: 10,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
