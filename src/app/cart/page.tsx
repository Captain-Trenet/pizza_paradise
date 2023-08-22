import Image from "next/image";
import styles from "./page.module.scss";

const CartPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.cartCard}>
          <Image
            className={styles.img}
            src={"/pizza-01.png"}
            alt=""
            width={100}
            height={100}
          />

          <div className={styles.name}>
            <h2 className={styles.title}>SICILIAN</h2>
            <div className={styles.size}>Large</div>
          </div>

          <h2 className={styles.price}>$78.90</h2>

          <div className={styles.btn}>Remove</div>
        </div>
        <div className={styles.cartCard}>
          <Image
            className={styles.img}
            src={"/pizza-01.png"}
            alt=""
            width={100}
            height={100}
          />

          <div className={styles.name}>
            <h2 className={styles.title}>SICILIAN</h2>
            <div className={styles.size}>Large</div>
          </div>

          <h2 className={styles.price}>$78.90</h2>

          <div className={styles.btn}>Remove</div>
        </div>
        <div className={styles.cartCard}>
          <Image
            className={styles.img}
            src={"/pizza-01.png"}
            alt=""
            width={100}
            height={100}
          />

          <div className={styles.name}>
            <h2 className={styles.title}>SICILIAN</h2>
            <div className={styles.size}>Large</div>
          </div>

          <h2 className={styles.price}>$78.90</h2>

          <div className={styles.btn}>Remove</div>
        </div>
        <div className={styles.cartCard}>
          <Image
            className={styles.img}
            src={"/pizza-01.png"}
            alt=""
            width={100}
            height={100}
          />

          <div className={styles.name}>
            <h2 className={styles.title}>SICILIAN</h2>
            <div className={styles.size}>Large</div>
          </div>

          <h2 className={styles.price}>$78.90</h2>

          <div className={styles.btn}>Remove</div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.subTotal}>
          <span>Subtotal (3 Items)</span>
          <span>36.20</span>
        </div>
        <div className={styles.subTotal}>
          <span>Service Cost</span>
          <span>0</span>
        </div>
        <div className={styles.subTotal}>
          <span>Delivery Cost</span>
          <span style={{ color: "#4caf50" }}>FREE!</span>
        </div>
        <div className={styles.line} />
        <div className={styles.subTotal}>
          <span>TOTAL(INC. TAX)</span>
          <span>$36.20</span>
        </div>
        <div className={styles.btn}>Checkout</div>
      </div>
    </div>
  );
};

export default CartPage;
