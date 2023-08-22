import Link from "next/link";
import styles from "./page.module.scss";

const Slider = () => {
  return (
    <section className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.headingPrimary}>
          We Have The <span>Best pizza!</span>
        </div>
        <div className={styles.headingSecondary}>
          Time to enjoy our delicious pizza.
        </div>
        <Link href={"/menu"}>
          <div className={styles.btn}>ORDER ONLINE</div>
        </Link>
      </div>
    </section>
  );
};

export default Slider;
