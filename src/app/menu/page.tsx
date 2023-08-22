import PizzaCard from "@/components/pizzacard/PizzaCard";
import styles from "./page.module.scss";
import { menu } from "@/data";

const MenuPage = async () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.menuHeader}>Menu</div> */}
      {menu.map((category) => {
        return (
          <div className={styles.category} key={category.category}>
            <h1 className={styles.header}>{category.category}</h1>
            <div className={styles.menu}>
              {category.items.map((item) => (
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
          </div>
        );
      })}
    </div>
  );
};

export default MenuPage;
