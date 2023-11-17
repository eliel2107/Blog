import styles from './styles.module.scss';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

type SlideType = {
  id: number;
  title: string;
  text: string;
  imageUrl: string;
};

export default function Conheca() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides: SlideType[] = [
    {
      id: 1,
      title: 'Locadora',
      text: 'Lorem ipsum dolor sit amet consectetur. Nulla est nec imperdiet arcu tellus lorem enim egestas. Diam dis et vulputate pellentesque consectetur tellus.',
      imageUrl: '/depoimentPerson.png',
    },
    {
      id: 2,
      title: 'Fleet',
      text: 'Lorem ipsum dolor sit amet consectetur. Nulla est nec imperdiet arcu tellus lorem enim egestas. Diam dis et vulputate pellentesque consectetur tellus.',
      imageUrl: '/depoimentPerson.png',
    },
    {
      id: 3,
      title: 'Transportadora',
      text: 'Lorem ipsum dolor sit amet consectetur. Nulla est nec imperdiet arcu tellus lorem enim egestas. Diam dis et vulputate pellentesque consectetur tellus.',
      imageUrl: '/depoimentPerson.png',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftside}>
            <div className={styles.title}>
              <h2>CONHEÇA NOSSAS SOLUÇÕES</h2>
            </div>
            <div className={styles.subtitle}></div>
            <div className={styles.serviços}>
              <h2>IDEAL PARA LOCADORA</h2>
              <div className={styles.top}>
                <div className={styles.serviceslefttop}>
                  <img src="./lefttop.gif" alt="" />
                  <p>Maior prazo para indicação do condutor</p>
                  <button>Saiba mais</button>
                </div>
                <div className={styles.servicesrighttop}>
                  <img src="./righttop.gif" alt="" />
                  <p>
                    {' '}
                    Gerencie o processo por loja (documentos, indicação do
                    condutor)
                  </p>
                  <button>Saiba mais</button>
                </div>
              </div>
              <div className={styles.bottom}>
                <div className={styles.servicesrightbottom}>
                  <img src="./rightbottom.gif" alt="" />
                  <p>Antecipe a cobrança no cartão de crédito</p>
                  <button>Saiba mais</button>
                </div>
                <div className={styles.servicesleftbottom}>
                  <img src="./leftbottom.gif" alt="" />
                  <p>Pagamento das multas com desconto</p>
                  <button>Saiba mais</button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rightside}>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className={styles.card}>
                    <img src="/Locadora.png" alt="" />
                    <div className={styles.footerCard}></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className={styles.card}>
                    <img src="/Fleet.png" alt="" />
                    <div className={styles.footerCard}></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
