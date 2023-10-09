"use client";
import styles from "../app/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Mousewheel } from 'swiper/modules';
import { useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import cocklogos2 from "../../public/logo/cocklogos2.png";
import facebook from '../../public/logo/facebook.png';
import instagram from '../../public/logo/instagram.png';
import twitter from '../../public/logo/twitter.png';
import whatsapp from '../../public/logo/whatsapp.png';
import drink7 from '../../public/drinks/drink7.png';
import drink8 from '../../public/drinks/drink8.png';
import drink3 from '../../public/drinks/drink3.png';
import drink4 from '../../public/drinks/drink4.png';
import drink6 from '../../public/drinks/drink6.png';
export default function Home() {
  {
    const swiper = useSwiper();
  }
  return (
    <>
      <div className={styles.circle}>
        <div className={styles.section}>
          <div className={styles.header}>
              <Image
                className={styles.logo}
                src={cocklogos2}
                width={"130"}
                height={""}
                alt="/"
              />
            <ul className={styles.navigation}>
              <li>
                <Link className="a" href={"/home"}>Home</Link>
              </li>
              <li>
                <Link className="a" href={"/products"}>Products</Link>
              </li>
              <li>
                <Link className="a" href={"/about-us/kiebot"}>About us</Link>
              </li>
              <li>
                <Link className="a" href={"/myaccount/profile"}>Profile</Link>
              </li>
              <li>
                <Link className="a" href={"/login"}>Login</Link>
              </li>
            </ul>
          </div>
          
          <div className={styles.content}>
            <div className={styles.textBox}>
              <h2>Taste the feeling</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard dummy
                text ever since the 1500s, when an unknown printer took a galley.
              </p>
              <Link className={styles.Learn} href={""}>Learn More</Link>
            </div>
          </div>
          <Swiper className={styles.banner}

          direction={'horizontal'}
        slidesPerView={3}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
    >
      <SwiperSlide><Image src={drink7} height={""} width={"170"} alt=""/></SwiperSlide>
      <SwiperSlide><Image src={drink8} height={""} width={"120"} alt=""/></SwiperSlide>
      <SwiperSlide><Image src={drink3} height={""} width={"110"} alt=""/></SwiperSlide>
      <SwiperSlide><Image src={drink4} height={""} width={"110"} alt=""/></SwiperSlide>
      <SwiperSlide><Image src={drink6} height={""} width={"45"} alt=""/></SwiperSlide>
    
    </Swiper>
        </div>
        <div classnameName={styles.scroll}>
          <Link href={"#"}><Image src={facebook} width={"45"} height={""} alt="" /></Link>
          <Link href={"#"}><Image src={twitter} width={"45"} height={""} alt="" /></Link>
          <Link href={"#"}><Image src={instagram} width={"45"} height={""} alt="" /></Link>
          <Link href={"#"}><Image src={whatsapp} width={"45"} height={""} alt="" /></Link>
        </div>
      </div>
    </>
  );
}