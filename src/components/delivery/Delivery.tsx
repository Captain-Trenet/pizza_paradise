import Image from "next/image";
import styles from "./page.module.scss";

const Delivery = () => {
  const data = [
    {
      id: 1,
      width: 247,
      height: 54,
      img: "/doordash.png",
    },
    {
      id: 2,
      width: 187,
      height: 131,
      img: "/ubereats.png",
    },
    {
      id: 3,
      width: 171,
      height: 37,
      img: "/favor.png",
    },
    {
      id: 4,
      width: 171,
      height: 37,
      img: "/grubhub.png",
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <span>Delivery</span> Now Powered By
      </div>
      <div className={styles.deliveryContainer}>
        {data.map((item) => (
          <div key={item.id} className={styles.item}>
            <Image
              width={item.width}
              height={item.height}
              src={item.img}
              alt=""
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Delivery;
