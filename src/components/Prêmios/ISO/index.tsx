import Link from 'next/link';
import styles from './styles.module.scss';

export default function Mobilidade() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftside}>
            <img src="ISOIcon.svg" alt="" />
          </div>
          <div className={styles.rightside}>
            <h1>ISO 27001</h1>
            <p>
              Somos padrão e referência na gestão de Segurança da informação.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
