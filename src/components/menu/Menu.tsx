"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import { useState } from "react";
import Link from "next/link";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.menu}>
      <Image
        onClick={() => setOpen(!open)}
        alt=""
        src={!open ? "/bar.png" : "/close.png"}
        width={24}
        height={24}
      />

      {/* {open && (
        <div className={styles.links}>
          <Link href="/">Home</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/menu">Delivery</Link>
          <Link href="/login">About</Link>
          <Link href="/cart">Blog</Link>
        </div>
      )} */}
    </div>
  );
};

export default Menu;
