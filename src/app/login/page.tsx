import Image from "next/image";
import styles from "./page.module.scss";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.googleLogin}>
        <Image
          src="/google.png"
          alt=""
          width={20}
          height={20}
          className="object-contain"
        />
        <span>Sign in with Google</span>
      </div>
      <div className={styles.facebookLogin}>
        <Image
          src="/facebook.png"
          alt=""
          width={20}
          height={20}
          className="object-contain"
        />
        <span>Sign in with Facebook</span>
      </div>
    </div>
  );
};

export default LoginPage;
