import Image from "next/image";
import styles from "./page.module.scss";

const Offer = () => {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <div>
          Make Your First Order and Get <span>50% Off</span>
        </div>
        <p>
          Experience unbeatable savings with our exclusive offer! Make your
          debut order now and enjoy an incredible 50% discount. Don&rsquo;t miss
          this chance to treat yourself while saving big on your first purchase.
        </p>
        <button className={styles.btn}>ORDER NOW!</button>
      </div>
      <div className={styles.right}>
        <Image
          className={styles.img}
          width={632}
          height={584}
          alt=""
          src={"/offer-pizza.png"}
        />
      </div>
    </section>
  );
};

export default Offer;
