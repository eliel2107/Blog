import { useState } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./styles.module.scss";

type SlideType = {
  id: number;
  title: string;
  text: string;
  imageUrl: string;
};

export default function Conheca() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ["/Locadora.png", "/Fleet.png", "/Transportadora.png"];

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
                    {" "}
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
            <div className={styles.carrossel}>
              {slides.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt=""
                  style={{ display: index === currentSlide ? "flex" : "none" }}
                />
              ))}
            </div>
            <div className={styles.buttonsForCarrossel}>
              <div className={styles.wrapArrow} onClick={prevSlide}>
                <img
                  src="/arrowLeftLW.svg"
                  className={styles.leftArrow}
                  alt="Previous"
                />
              </div>
              <div className={styles.wrapArrow} onClick={nextSlide}>
                <img src="/arrowRightLW.svg" alt="Next" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
