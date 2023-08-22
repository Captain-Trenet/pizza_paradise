import Image from "next/image";
import styles from "./page.module.css";
import Slider from "@/components/slider/Slider";
import Featured from "@/components/featured/Featured";
import Delivery from "@/components/delivery/Delivery";
import Offer from "@/components/offer/Offer";

export default function Home() {
  return (
    <main>
      <Slider />
      <Featured />
      <Offer />
      <Delivery />
    </main>
  );
}
