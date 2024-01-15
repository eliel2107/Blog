import Link from 'next/link';
import styles from './styles.module.scss';

export default function Quemtrabalhe() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftside}>
            <div className={styles.title}>
              <h1>Quem estamos buscando?</h1>
            </div>
            <div className={styles.text}>
              <p>
                Se você é um profissional qualificado e apaixonado por
                tecnologia, mobilidade urbana e inovação, temos um lugar para
                você na LW. Aqui, você terá a oportunidade de trabalhar com as
                melhores tecnologias do mercado, em projetos desafiadores e de
                impacto real. Também terá um ambiente de trabalho dinâmico e
                colaborativo, com oportunidades de crescimento e desenvolvimento
                profissional.
              </p>
            </div>
            <Link href="#trabalhe">
              <button>Quero me inscrever</button>
            </Link>
          </div>
          <div className={styles.rightside}>
            <img src="teacher.svg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
