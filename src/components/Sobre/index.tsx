import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';

export default function Sobre() {
  const [offset, setOffset] = useState(0);
  const logosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => {
        const singleSetWidth = logosRef.current
          ? /*@ts-ignore*/
            logosRef!.current!.firstChild!.offsetWidth
          : 0;

        return prevOffset >= singleSetWidth ? 0 : prevOffset + 1;
      });
    }, 15);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className={styles.container}>
        <div className={styles.topcontent}>
          <h2>UM POUCO SOBRE NÓS</h2>

          <div className={styles.youtube}>
            <div className={styles.leftbar}></div>
            <div className={styles.videobg}>
              <video
                className={styles.iframe}
                width="852"
                height="586"
                controls
              >
                <source src="VIDEOPRINCIPAL.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
            </div>

            <div className={styles.rightbar}></div>
          </div>
        </div>
        {/**/}
        <div className={styles.bottomcontent}>
          <div className={styles.title}>
            <h2>CLIENTES QUE JÁ FIZERAM A ESCOLHA CERTA</h2>
            <p>Trabalhando juntos para otimizar processos e reduzir custos</p>
          </div>

          <div className={styles.Parceiros}>
            <div className={styles.row}>
              {[...Array(5)].map((value) => (
                <>
                  <img key={value} src="/clientes/CCV.png" alt="" />
                  <img
                    key={value}
                    src="/clientes/GRUPO_PETROPOLIS.png"
                    alt=""
                  />
                  <img key={value} src="/clientes/JSL.png" alt="" />
                  <img key={value} src="/clientes/KOVI.png" alt="" />
                  <img key={value} src="/clientes/LM.png" alt="" />
                  <img key={value} src="/clientes/LOCALIZA.png" alt="" />
                  <img key={value} src="/clientes/MOVIDA.png" alt="" />
                  <img key={value} src="/clientes/RENAULT.png" alt="" />
                  <img key={value} src="/clientes/TURBI.png" alt="" />
                  <img key={value} src="/clientes/UNIDAS.png" alt="" />
                  <img key={value} src="/clientes/VOLVO.png" alt="" />
                  <img key={value} src="/clientes/FORD.png" alt="" />
                </>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
