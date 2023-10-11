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
import drink9 from '../../public/drinks/drink9.png';
import drink10 from '../../public/drinks/drink10.png';
import drink11 from '../../public/drinks/drink11.png';
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
                <Link className={styles.link} href={"/"}>Home</Link>
              </li>
              <li>
                <Link className={styles.link} href={"/products"}>Products</Link>
              </li>
              <li>
                <Link className={styles.link} href={"/about-us/kiebot"}>About us</Link>
              </li>
              <li>
                <Link className={styles.link} href={"/myaccount/profile"}>Profile</Link>
              </li>
              <li>
                <Link className={styles.link} href={"/login"}>Login</Link>
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
        effect="coverflow"
        centeredSlides={true}
        cubeEffect={true}
        // coverflowEffect={
        //   {
        //     rotate:0,
        //     stretch:0,
        //     depth:200,
        //     modifier:1,
        //   slideShadows:true          }
        // }
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
    >
      <SwiperSlide><Image src={drink11} height={"250"} width={"300"} alt="" /></SwiperSlide>
      <SwiperSlide><Image src={drink8} height={"250"} width={"230"} alt=""/></SwiperSlide>
      <SwiperSlide><Image src={drink3} height={""} width={"190"} alt=""/></SwiperSlide>
      <SwiperSlide><Image src={drink4} height={""} width={"190"} alt=""/></SwiperSlide>
      <SwiperSlide><Image src={drink9} height={""} width={"250"} alt=""/></SwiperSlide>
      <SwiperSlide><Image src={drink10} height={""} width={"360"} alt=""/></SwiperSlide>
      <SwiperSlide><Image src={drink11} height={""} width={"340"} alt=""/></SwiperSlide>
    
    </Swiper>
        </div>
        <div className={styles.scroll}>
          <Link href={"#"}><Image src={facebook} width={"45"} height={""} alt="" /></Link>
          <Link href={"#"}><Image src={twitter} width={"45"} height={""} alt="" /></Link>
          <Link href={"#"}><Image src={instagram} width={"45"} height={""} alt="" /></Link>
          <Link href={"#"}><Image src={whatsapp} width={"45"} height={""} alt="" /></Link>
        </div>
      </div>
    </>
  );
}