import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";

const sliderData = [
  {
    background: "/nature.png",
    title: "Ambiental",
    description1:
      "Adotamos práticas sustentáveis para minimizar nosso impacto ambiental",
    description2:
      "Nos comprometemos com a redução de resíduos através de soluções inovadoras.",
    description3:
      "Cumprimos todas as leis e regulamentações ambientais em nossas operações.",
    icon1: "/folha.svg",
    icon2: "/tree.svg",
    icon3: "/home.svg",
  },
  {
    background: "/social.jpg",
    title: "Social",
    description1:
      "Promovemos ações voluntárias e coletas para beneficiar causas sociais e animais, fortalecendo nosso compromisso com a responsabilidade social.",
    description2:
      "Estabelecemos políticas para garantir um ambiente de trabalho mais igualitário e livre de discriminação.",
    description3:
      "Apoiamos a educação de crianças em situação de vulnerabilidade por meio de parcerias com instituições locais.",
    icon1: "/social.svg",
    icon2: "/handshake.svg",
    icon3: "/enterprise.svg",
  },
  {
    background: "/gover.png",
    title: "Governança",
    description1:
      "Mantemos altos padrões de transparência e ética em todas as nossas operações.",
    description2:
      "Garantimos a conformidade com todas as regulamentações e políticas internas, promovendo uma cultura de integridade.",
    description3:
      "Implementamos práticas de governança que garantem a tomada de decisões responsáveis e sustentáveis.",
    icon1: "/bank.svg",
    icon2: "/hammer.svg",
    icon3: "/list.svg",
  },
];

const CustomSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentDescriptionIndex, setCurrentDescriptionIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDescriptionIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.sliderContainer}>
      <div
        className={styles.sliderItem}
        style={{
          backgroundImage: `url(${sliderData[currentIndex].background})`,
        }}
      >
        <div className={styles.overlay}>
          <div className={styles.content}>
            <div className={styles.header}>
              <h2>{sliderData[currentIndex].title}</h2>
              <div className={styles.rightHeader}>
                <button onClick={handlePrev} className={styles.arrows}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="43"
                    height="44"
                    viewBox="0 0 43 44"
                    fill="none"
                  >
                    <path
                      d="M12.486 22.8812L25.9235 36.4977C26.0484 36.6242 26.1966 36.7245 26.3597 36.793C26.5229 36.8614 26.6977 36.8967 26.8743 36.8967C27.0508 36.8967 27.2256 36.8614 27.3888 36.793C27.5519 36.7245 27.7001 36.6242 27.825 36.4977C27.9498 36.3711 28.0488 36.221 28.1164 36.0557C28.184 35.8904 28.2188 35.7132 28.2188 35.5343C28.2188 35.3554 28.184 35.1782 28.1164 35.0129C28.0488 34.8476 27.9498 34.6974 27.825 34.5709L15.3365 21.9179L27.825 9.26484C28.0771 9.00935 28.2188 8.66281 28.2188 8.30148C28.2187 7.94015 28.0771 7.59362 27.825 7.33812C27.5728 7.08262 27.2308 6.93909 26.8743 6.93909C26.5177 6.93909 26.1757 7.08262 25.9235 7.33812L12.486 20.9545C12.3611 21.081 12.262 21.2312 12.1944 21.3965C12.1268 21.5618 12.0919 21.7389 12.0919 21.9179C12.0919 22.0968 12.1268 22.274 12.1944 22.4393C12.262 22.6046 12.3611 22.7548 12.486 22.8812Z"
                      fill="white"
                    />
                  </svg>
                </button>
                <button onClick={handleNext} className={styles.arrows}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="43"
                    height="44"
                    viewBox="0 0 43 44"
                    fill="none"
                  >
                    <path
                      d="M30.514 22.8812L17.0765 36.4977C16.9516 36.6242 16.8034 36.7245 16.6403 36.793C16.4771 36.8614 16.3023 36.8967 16.1257 36.8967C15.9492 36.8967 15.7744 36.8614 15.6112 36.793C15.4481 36.7245 15.2999 36.6242 15.175 36.4977C15.0502 36.3711 14.9512 36.221 14.8836 36.0557C14.816 35.8904 14.7812 35.7132 14.7812 35.5343C14.7812 35.3554 14.816 35.1782 14.8836 35.0129C14.9512 34.8476 15.0502 34.6974 15.175 34.5709L27.6635 21.9179L15.175 9.26484C14.9229 9.00935 14.7812 8.66281 14.7812 8.30148C14.7813 7.94015 14.9229 7.59362 15.175 7.33812C15.4272 7.08262 15.7692 6.93909 16.1257 6.93909C16.4823 6.93909 16.8243 7.08262 17.0765 7.33812L30.514 20.9545C30.6389 21.081 30.738 21.2312 30.8056 21.3965C30.8732 21.5618 30.9081 21.7389 30.9081 21.9179C30.9081 22.0968 30.8732 22.274 30.8056 22.4393C30.738 22.6046 30.6389 22.7548 30.514 22.8812Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className={styles.descriptionBlock}>
              <div
                className={`${styles.descriptionWrap} ${
                  currentDescriptionIndex === 0 ? styles.currentDescription : ""
                } ${styles.topDescription}`}
              >
                <img src={sliderData[currentIndex].icon1} alt="Icon" />
                <p>{sliderData[currentIndex].description1}</p>
              </div>
              <img
                src="/seta.svg"
                alt="Arrow"
                className={`${styles.arrow} ${
                  currentDescriptionIndex === 0 ? styles.currentArrow : ""
                } ${styles.topArrow}`}
              />
              <img
                src="/seta.svg"
                alt="Arrow"
                className={`${styles.arrow} ${
                  currentDescriptionIndex === 2 ? styles.currentArrow : ""
                } ${styles.bottomArrow2}`}
              />
              <img
                src="/seta.svg"
                alt="Arrow"
                className={`${styles.arrow} ${
                  currentDescriptionIndex === 1 ? styles.currentArrow : ""
                } ${styles.bottomArrow}`}
              />
              <div className={styles.bottomDescription}>
                <div
                  className={`${styles.descriptionWrap} ${
                    currentDescriptionIndex === 2
                      ? styles.currentDescription
                      : ""
                  } ${styles.rightDescription}`}
                >
                  <img src={sliderData[currentIndex].icon2} alt="Icon" />
                  <p>{sliderData[currentIndex].description3}</p>
                </div>

                <div
                  className={`${styles.descriptionWrap} ${
                    currentDescriptionIndex === 1
                      ? styles.currentDescription
                      : ""
                  } ${styles.leftDescription}`}
                >
                  <img src={sliderData[currentIndex].icon3} alt="Icon" />
                  <p>{sliderData[currentIndex].description2}</p>
                </div>
              </div>
            </div>
          </div>
          <img src="/clippath.svg" alt="" className={styles.clipPath} />
        </div>
      </div>
    </div>
  );
};

export default CustomSlider;
