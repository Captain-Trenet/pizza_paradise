import { featured } from "@/data";
import PizzaCard from "../pizzacard/PizzaCard";
import styles from "./page.module.scss";

const Featured = () => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>Trending Recipes</div>
      <div className={styles.cardsContainer}>
        {featured.map((item) => (
          <PizzaCard
            name={item.name}
            desc={item.desc}
            key={item.id}
            price={item.price}
            img={item.img}
            id={item.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Featured;
