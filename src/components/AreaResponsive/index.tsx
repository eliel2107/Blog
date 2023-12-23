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
      {
        url: '/sim',

        name: 'LW Sat',
        description: 'Sua frota com mais segurança e suporte aos condutores',
        image: '/SecurityCar.svg',
      },
      {
        url: '/debitos',
        name: 'LW Débitos',
        description:
          'Elimine planilhas e processos manuais no pagamento dos débitos da sua frota de veículos.',
        image: '/MoneyIcon.svg',
      },
      {
        url: '/doc',
        name: 'LW Doc',
        description:
          'Elimine planilhas e processos manuais no pagamento dos débitos da sua frota de veículos.',
        image: '/EmplacamentoIcon.svg',
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
              ÁREA DO CLIENTE
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
