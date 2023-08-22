import Image from "next/image";
import styles from "./page.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <Image width={56} height={56} alt="" src={"/logo.png"} />
            <span className={styles.logo}>Pizza Paradise</span>
          </div>
        </div>
        <div className={styles.middle}>
          <div className={styles.join}>
            Join Our <span>Newsletter</span>
          </div>
          <div className={styles.newsletter}>
            <input
              type="email"
              placeholder="Email Address"
              className={styles.input}
            />
            <div className={styles.btn}>Subscribe</div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.social}>
            <div className={styles.socialBg}>
              <Image alt="" width={32} height={32} src={"/yelp.png"} />
            </div>
            <div className={styles.socialBg}>
              <Image alt="" width={32} height={32} src={"/twitter.png"} />
            </div>
            <div className={styles.socialBg}>
              <Image alt="" width={32} height={32} src={"/facebook.png"} />
            </div>
            <div className={styles.socialBg}>
              <Image alt="" width={32} height={32} src={"/instagram.png"} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
