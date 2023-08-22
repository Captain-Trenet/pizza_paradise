"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";
import Menu from "../menu/Menu";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.container}>
      <div className={styles.navbar}>
        <Link href={"/"} className={styles.left}>
          <Image width={56} height={56} alt="" src={"/logo.png"} />
          <span className={styles.logo}>Pizza Paradise</span>
        </Link>
        <div className={styles.middle}>
          <Link className={pathname === "/" ? styles.active : ""} href="/">
            Home
          </Link>
          <Link
            className={pathname === "/menu" ? styles.active : ""}
            href="/menu"
          >
            Menu
          </Link>
          <Link href="/">Delivery</Link>
          <Link href="/">About</Link>
          <Link
            className={pathname === "/orders" ? styles.active : ""}
            href="/orders"
          >
            Orders
          </Link>
        </div>
        <div className={styles.right}>
          <Image width={24} height={24} alt="" src={"/search.png"} />
          <Link
            style={{ display: "flex", alignItems: "center" }}
            href={"/cart"}
          >
            <Image width={24} height={24} alt="" src={"/cart.png"} />
            (4)
          </Link>
          <Link href="/login">
            <div className={styles.button}>SIGN IN</div>
          </Link>
        </div>
        <Menu />
      </div>
    </nav>
  );
};

export default Navbar;
