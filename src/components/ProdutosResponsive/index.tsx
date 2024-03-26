import Link from 'next/link';
import React, { useState } from 'react';
import styles from './styles.module.scss';

export default function ProdutosResponsive() {
  const Accordion = () => {
    const [isAccordionOpen, setAccordionOpen] = useState(false);

    const toggleAccordion = () => {
      setAccordionOpen(!isAccordionOpen);
    };
    const produtosDropdown = [
      // {
      //   url: '/assist',

      //   name: 'LW Assist',
      //   description: 'Sua frota com mais segurança e suporte aos condutores',
      //   image: 'https://d10fqir6n4h7sq.cloudfront.net/public/SecurityCar.svg',
      // },
      {
        url: '/debitos',
        name: 'LW Débitos',
        description:
          'Elimine planilhas e processos manuais no pagamento dos débitos da sua frota de veículos.',
        image: 'https://d10fqir6n4h7sq.cloudfront.net/public/MoneyIcon.svg',
      },
      {
        url: '/doc',
        name: 'LW Doc',
        description: 'Simplifique sua gestão documental através da tecnologia.',
        image: 'https://d10fqir6n4h7sq.cloudfront.net/public/EmplacamentoIcon.svg',
      },

      {
        url: '/sim',
        name: 'LW SIM',
        description: 'Controle sua frota com tecnologia de alta performance.',
        image: 'https://d10fqir6n4h7sq.cloudfront.net/public/PhoneIcon.svg',
      },

      {
        url: '/multas',
        name: 'LW Multas',
        description:
          'Sua gestão de multas mais eficiente, ágil e segura para diversos tamanhos de frotas.',
        image: 'https://d10fqir6n4h7sq.cloudfront.net/public/DangerIcon.svg',
      },
    ];
    function handleLinkClick(event: React.MouseEvent<HTMLLIElement>): void {}

    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.button}>
            <button
              className={`${styles.button} ${
                isAccordionOpen ? styles.open : ''
              }`}
              onClick={toggleAccordion}
            >
              PRODUTOS
              <img
                src="ArrowHeader.svg"
                alt=""
                className={`${
                  isAccordionOpen ? styles.rotate : styles.rotateBack
                }`}
              />
            </button>

            {isAccordionOpen && (
              <div className={styles.Accordion}>
                <ul className={styles.accordioncontent}>
                  <div className={styles.flex}>
                    {produtosDropdown.map((item) => (
                      <li key={item.url} onClick={handleLinkClick}>
                        <Link href={item.url}>
                          <div className={styles.textContent}>
                            <span className={styles.name}>{item.name}</span>

                            <span className={styles.description}>
                              {item.description}
                            </span>
                            <div className={styles.divisor}></div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </div>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return <Accordion />;
}
