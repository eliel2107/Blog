import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import styles from './styles.module.scss';
import Link from 'next/link';

export default function SimpleSlider() {
  const [selectedSlide, setSelectedSlide] = useState<number>(0);

  const handleSlideChange = (swiper: SwiperType) => {
    setSelectedSlide(swiper.realIndex);
  };

  return (
    <section className={styles.container}>
      <Swiper
        slidesPerView={2}
        spaceBetween={300}
        loop={true}
        onSlideChange={handleSlideChange}
        pagination={{
          clickable: true,
        }}
        className={styles.swiperContainer}
      >
        <SwiperSlide className={styles.card}>
          <div className={styles.middle}>
            <div className={styles.l}>
              <Link href="/post">
                <div className={styles.image}>
                  <button>Evento</button>
                </div>
                <div className={styles.text}>
                  <h1>Integer Maecenas Eget Viverra</h1>
                  <div className={styles.day}>
                    <div className={styles.divisor}></div>
                    <div className={styles.date}>
                      <p>11 de novembro, 2023</p>
                    </div>
                    <div className={styles.time}>
                      <p>3 min leitura</p>
                    </div>
                  </div>
                  <p>
                    Aenean eleifend ante maecenas pulvinar montes lorem et pede
                    dis dolor pretium donec dictum. Vici consequat justo enim.
                    Venenatis eget adipiscing luctus loremVici consequat justo
                    enim. Venenatis eget adipiscing luctus lorem.
                  </p>
                  <div className={styles.link}>
                    <p>Ver post</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.card}>
          <div className={styles.middle}>
            <div className={styles.l}>
              <Link href="/post">
                <div className={styles.image}>
                  <button>Evento</button>
                </div>
                <div className={styles.text}>
                  <h1>Integer Maecenas Eget Viverra</h1>
                  <div className={styles.day}>
                    <div className={styles.divisor}></div>
                    <div className={styles.date}>
                      <p>11 de novembro, 2023</p>
                    </div>
                    <div className={styles.time}>
                      <p>3 min leitura</p>
                    </div>
                  </div>
                  <p>
                    Aenean eleifend ante maecenas pulvinar montes lorem et pede
                    dis dolor pretium donec dictum. Vici consequat justo enim.
                    Venenatis eget adipiscing luctus loremVici consequat justo
                    enim. Venenatis eget adipiscing luctus lorem.
                  </p>
                  <div className={styles.link}>
                    <p>Ver post</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.card}>
          <div className={styles.middle}>
            <div className={styles.l}>
              <Link href="/post">
                <div className={styles.image}>
                  <button>Evento</button>
                </div>
                <div className={styles.text}>
                  <h1>Integer Maecenas Eget Viverra</h1>
                  <div className={styles.day}>
                    <div className={styles.divisor}></div>
                    <div className={styles.date}>
                      <p>11 de novembro, 2023</p>
                    </div>
                    <div className={styles.time}>
                      <p>3 min leitura</p>
                    </div>
                  </div>
                  <p>
                    Aenean eleifend ante maecenas pulvinar montes lorem et pede
                    dis dolor pretium donec dictum. Vici consequat justo enim.
                    Venenatis eget adipiscing luctus loremVici consequat justo
                    enim. Venenatis eget adipiscing luctus lorem.
                  </p>
                  <div className={styles.link}>
                    <p>Ver post</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
