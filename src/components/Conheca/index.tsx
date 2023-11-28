import Link from 'next/link';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './styles.module.scss';

type SlideType = {
  id: number;
  title: string;
  text: string;
  imageUrl: string;
};

export default function Conheca() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    '/LOCADORAHOME.png',
    '/FLEETHOME.png',
    '/EMBARCADORHOME.png',
    '/FROTAHOME.png',
    '/TRANSPORTADORAHOME.png',
  ];
  const slidesContent = [
    {
      title: 'LOCADORA',
      content: [
        {
          imageURL: './lefttop.gif',
          text: 'Maior prazo para indicação do condutor',
        },
        {
          imageURL: './righttop.gif',
          text: 'Gerencie o processo por loja (documentos, indicação do condutor)r',
        },
        {
          imageURL: './rightbottom.gif',
          text: 'Antecipe a cobrança no cartão de crédito',
        },
        {
          imageURL: './leftbottom.gif',
          text: 'Pagamento das multas com desconto',
        },
      ],
    },
    {
      title: 'FLEET',
      content: [
        {
          imageURL: './lefttop.gif',
          text: 'Maior prazo para indicação do condutor',
        },
        {
          imageURL: './righttop.gif',
          text: 'Relatórios Gerenciais',
        },
        {
          imageURL: './rightbottom.gif',
          text: 'Disparo automático de e-mail (notificação de trânsito)',
        },
        {
          imageURL: './leftbottom.gif',
          text: 'Pagamento de multa com 20% de desconto',
        },
      ],
    },
    {
      title: 'EMBARCADOR',
      content: [
        {
          imageURL: './lefttop.gif',
          text: 'Consulta ativa das multas por excesso de peso',
        },
        {
          imageURL: './righttop.gif',
          text: 'Multas cadastradas no CNPJ',
        },
        {
          imageURL: './rightbottom.gif',
          text: 'Entre com recursos das multas dentro do prazo',
        },
        {
          imageURL: './leftbottom.gif',
          text: 'Pagamento com desconto',
        },
      ],
    },
    {
      title: 'FROTA PRÓPRIA',
      content: [
        {
          imageURL: './lefttop.gif',
          text: 'Consulta CNH',
        },
        {
          imageURL: './righttop.gif',
          text: 'Maior prazo para indicação do condutor',
        },
        {
          imageURL: './rightbottom.gif',
          text: 'Automatizamos o processo de desconto em folha de pagamento',
        },
        {
          imageURL: './leftbottom.gif',
          text: 'Pagamento das multas com desconto',
        },
      ],
    },
    {
      title: 'TRANSPORTADORA',
      content: [
        {
          imageURL: './lefttop.gif',
          text: 'Consulta CNH',
        },
        {
          imageURL: './righttop.gif',
          text: 'Consulta de Multas ANTT',
        },
        {
          imageURL: './rightbottom.gif',
          text: 'Maior prazo para indicação do condutor',
        },
        {
          imageURL: './leftbottom.gif',
          text: 'Pagamento de multa com desconto.',
        },
      ],
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
              <h2>AS MELHORES SOLUÇÕES PARA SUA FROTA</h2>
            </div>
            <div className={styles.subtitle}></div>
            <div className={styles.serviços}>
              <h2>{slidesContent[currentSlide].title}</h2>
              <div className={styles.top}>
                {slidesContent[currentSlide].content.map((item, index) => (
                  <div key={index} className={styles.serviceCard}>
                    <img src={item.imageURL} alt="" />
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
              <div className={styles.button}>
                <Link href="/solucoes">
                  <button>Saiba mais</button>
                </Link>
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
                  style={{ display: index === currentSlide ? 'flex' : 'none' }}
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
