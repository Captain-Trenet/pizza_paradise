import Image from "next/image";
import styles from "./page.module.scss";
import Price from "@/components/price/Price";
import { product } from "@/data";

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image alt="" src={product.img} fill />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>{product.name}</h1>
        <p className={styles.desc}>{product.desc}</p>
        <Price
          price={product.price}
          id={product.id}
          options={product.options}
        />
      </div>
    </div>
  );
};

export default SingleProductPage;
