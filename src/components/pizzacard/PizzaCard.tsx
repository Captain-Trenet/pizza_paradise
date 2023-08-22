import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";

type Prop = {
  name: string;
  desc?: string;
  price: number;
  img?: string;
  id?: number | string;
};

const PizzaCard = ({ name, desc, price, img, id }: Prop) => {
  return (
    <Link href={`/product/${id}`}>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src={img ? img : "/pizza-01.png"} fill alt="" />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.title}>
            {name
              ? name.length > 23
                ? name.slice(0, 21)
                : name
              : "Cheese Lovers"}
          </div>
          <p className={styles.desc}>
            {desc
              ? desc.length >= 88
                ? desc.slice(0, 88)
                : desc.length <= 44
                ? desc + " and two cheeses – Romano"
                : desc
              : "Combination of Alfredo sauce and two cheeses – Romano, and Parmesan."}
          </p>
          <div className={styles.price}>${price ? price : 20.0}</div>
          <div className={styles.button}>Add to Cart</div>
        </div>
      </div>
    </Link>
  );
};

export default PizzaCard;
