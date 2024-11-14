import Link from "next/link";
import React, { useState } from "react";
import styles from "./styles.module.scss";

export default function ProdutosResponsive() {
  const Accordion = () => {
    const [isAccordionOpen, setAccordionOpen] = useState(false);

    const toggleAccordion = () => {
      setAccordionOpen(!isAccordionOpen);
    };
    const produtosDropdown = [
      {
        url: "https://admin.onemonitora.com.br/",
        name: "LW SIM (One)",
        description: "Clique para acessar o portal.",
        image: "https://d10fqir6n4h7sq.cloudfront.net/public/PhoneIcon.svg",
      },
      {
        url: "https://www.sistemamultas.com.br/app",
        name: "LW Multas",
        description: "Clique para acessar o portal.",
        image: "https://d10fqir6n4h7sq.cloudfront.net/public/DangerIcon.svg",
      },
      {
        url: "https://documentacao.lwtecnologia.com.br/",
        name: "LW Doc",
        description: "Clique para acessar o portal.",
        image: "https://d10fqir6n4h7sq.cloudfront.net/public/DocIcon.svg",
      },
      {
        url: "https://debitos.lwtecnologia.com.br/",
        name: "LW Débitos",
        description: "Clique para acessar o portal.",
        image: "https://d10fqir6n4h7sq.cloudfront.net/public/MoneyIcon.svg",
      },
      // Add more items as needed
    ];
    function handleLinkClick(event: React.MouseEvent<HTMLLIElement>): void {}

    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.button}>
            <button
              className={`${styles.button} ${
                isAccordionOpen ? styles.open : ""
              }`}
              onClick={toggleAccordion}
            >
              ÁREA DO CLIENTE
              <img
                src="https://d10fqir6n4h7sq.cloudfront.net/public/ArrowHeader.svg"
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
                        <Link rel="noreferrer" href={item.url}>
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
