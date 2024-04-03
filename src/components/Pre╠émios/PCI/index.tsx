import styles from './styles.module.scss';

export default function PCI() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftside}>
            <img src="/PCI.svg" alt="" />
          </div>
          <div className={styles.rightside}>
            <h1>PCI COMPLIANT</h1>
            <p>
              O Selo PCI, também conhecido como PCI DSS (Payment Card Industry
              Data Security Standard), é um conjunto de regras e requisitos
              rigorosos criado pelas principais bandeiras de cartão (American
              Express, Visa, Mastercard, etc.) para proteger os dados dos seus
              cartões em todas as transações online.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
