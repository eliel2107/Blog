import Link from "next/link";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";

type SlideType = {
  id: number;
  title: string;
  text: string;
  imageUrl: string;
};

type ContentItem = {
  imageURL: string;
  text: string;
};

type SlideContent = {
  title: string;
  content: ContentItem[];
};

const slidesContent: SlideContent[] = [
  {
    title: "LOCADORAS",
    content: [
      {
        imageURL: "https://d10fqir6n4h7sq.cloudfront.net/public/lefttop.gif",
        text: "Maior prazo para indicação do condutor",
      },
      {
        imageURL: "https://d10fqir6n4h7sq.cloudfront.net/public/righttop.gif",
        text: "Gerencie o processo por loja (documentos, indicação do condutor)r",
      },
      {
        imageURL:
          "https://d10fqir6n4h7sq.cloudfront.net/public/rightbottom.gif",
        text: "Antecipe a cobrança no cartão de crédito",
      },
      {
        imageURL: "https://d10fqir6n4h7sq.cloudfront.net/public/leftbottom.gif",
        text: "Pagamento das multas com desconto",
      },
    ],
  },
  {
    title: "FLEETS",
    content: [
      {
        imageURL: "https://d10fqir6n4h7sq.cloudfront.net/public/lefttop.gif",
        text: "Maior prazo para indicação do condutor",
      },
      {
        imageURL: "https://d10fqir6n4h7sq.cloudfront.net/public/righttop.gif",
        text: "Relatórios Gerenciais",
      },
      {
        imageURL:
          "https://d10fqir6n4h7sq.cloudfront.net/public/rightbottom.gif",
        text: "Disparo automático de e-mail (notificação de trânsito)",
      },
      {
        imageURL: "https://d10fqir6n4h7sq.cloudfront.net/public/leftbottom.gif",
        text: "Pagamento de multa com 20% de desconto",
      },
    ],
  },
  {
    title: "OPERADORES LOGÍSTICOS",
    content: [
      {
        imageURL: "https://d10fqir6n4h7sq.cloudfront.net/public/lefttop.gif",
        text: "Consulta ativa das multas por excesso de peso",
      },
      {
        imageURL: "https://d10fqir6n4h7sq.cloudfront.net/public/righttop.gif",
        text: "Multas cadastradas no CNPJ",
      },
      {
        imageURL:
          "https://d10fqir6n4h7sq.cloudfront.net/public/rightbottom.gif",
        text: "Envio de recursos de multas dentro do prazo",
      },
      {
        imageURL: "https://d10fqir6n4h7sq.cloudfront.net/public/leftbottom.gif",
        text: "Pagamento com desconto",
      },
    ],
  },
  {
    title: "FROTAS PRÓPRIAS",
    content: [
      {
        imageURL: "https://d10fqir6n4h7sq.cloudfront.net/public/lefttop.gif",
        text: "Consulta CNH",
      },
      {
        imageURL: "https://d10fqir6n4h7sq.cloudfront.net/public/righttop.gif",
        text: "Maior prazo para indicação do condutor",
      },
      {
        imageURL: "https://d10fqir6n4h7sq.cloudfront.net/public/leftbottom.gif",
        text: "Pagamento das multas com desconto",
      },
      {
        imageURL:
          "https://d10fqir6n4h7sq.cloudfront.net/public/rightbottom.gif",
        text: "Automatizamos o processo de desconto em folha de pagamento",
      },
    ],
  },
  {
    title: "TRANSPORTADORAS",
    content: [
      {
        imageURL: "https://d10fqir6n4h7sq.cloudfront.net/public/lefttop.gif",
        text: "Consulta CNH",
      },
      {
        imageURL: "https://d10fqir6n4h7sq.cloudfront.net/public/righttop.gif",
        text: "Consulta de Multas ANTT",
      },
      {
        imageURL:
          "https://d10fqir6n4h7sq.cloudfront.net/public/rightbottom.gif",
        text: "Maior prazo para indicação do condutor",
      },
      {
        imageURL: "https://d10fqir6n4h7sq.cloudfront.net/public/leftbottom.gif",
        text: "Pagamento de multa com desconto.",
      },
    ],
  },
];

const slides: string[] = [
  "https://d10fqir6n4h7sq.cloudfront.net/public/LOCADORAHOME.png",
  "https://d10fqir6n4h7sq.cloudfront.net/public/FLEETHOME.png",
  "https://d10fqir6n4h7sq.cloudfront.net/public/EMBARCADORHOME.png",
  "https://d10fqir6n4h7sq.cloudfront.net/public/FROTAHOME.png",
  "https://d10fqir6n4h7sq.cloudfront.net/public/TRANSPORTADORAHOME.png",
];

export default function SliderHome() {
  const [selectedSlide, setSelectedSlide] = useState<number>(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlidesContent, setCurrentSlidesContent] = useState(
    slidesContent[0].content,
  );

  const handleSlideChange = (swiper: SwiperType) => {
    const newSelectedSlide = swiper.realIndex;
    setSelectedSlide(newSelectedSlide);
    setCurrentSlide(newSelectedSlide);
    setCurrentSlidesContent(slidesContent[newSelectedSlide].content);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className={styles.container}>
      <Swiper
        slidesPerView={2}
        spaceBetween={100}
        loop={true}
        onSlideChange={handleSlideChange}
        pagination={{
          clickable: true,
        }}
        className={styles.swiperContainer}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className={styles.card}>
            <div className={styles.image}>
              <img src={slide} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.serviços}>
        <h2>{slidesContent[currentSlide].title}</h2>
        <div className={styles.top}>
          {currentSlidesContent.map((item, index) => (
            <div key={index} className={styles.serviceCard}>
              <img src={item.imageURL} alt="" />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <div className={styles.button}>
          <Link href="/sobre">
            <button>Saiba mais</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
