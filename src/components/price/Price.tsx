"use client";

import styles from "./page.module.scss";
import { useState, useEffect } from "react";

type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ id, price, options }: Props) => {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    );
  }, [quantity, selected, options, price]);

  return (
    <div className={styles.priceContainer}>
      <h2 className={styles.total}>${total.toFixed(2)}</h2>
      {/* OPTIONS CONTAINER */}
      <div className={styles.optionsContainer}>
        {options?.map((option, index) => (
          <div
            style={{
              backgroundColor: selected === index ? "#f44a25" : "#fff",
              color: selected === index ? "#fff" : "#f44a25",
            }}
            onClick={() => setSelected(index)}
            className={styles.optionBtn}
            key={option.title}
          >
            {option.title}
          </div>
        ))}
      </div>

      {/* QUANTITY AND CART CONTAINER */}
      <div className={styles.quantityContainer}>
        {/* QUANTITY */}
        <div className={styles.quantity}>
          <span>Quantity</span>
          <div className={styles.quantityinput}>
            <div
              className={styles.multiply}
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {"<"}
            </div>
            <span>{quantity}</span>
            <div
              className={styles.multiply}
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              {">"}
            </div>
          </div>
        </div>

        {/*  CART  */}
        <div className={styles.cartBtn}>Add to Cart</div>
      </div>
    </div>
  );
};

export default Price;
