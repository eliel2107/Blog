import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

export default function Sobrevideo() {
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
          <div className={styles.title}>
            <h2>Um Pouco mais sobre nós</h2>
          </div>

          <div className={styles.youtube}>
            <div className={styles.leftbar}></div>
            <div className={styles.videobg}>
              <video
                className={styles.iframe}
                width="852"
                height="586"
                controls
              >
                <source
                  src="https://d10fqir6n4h7sq.cloudfront.net/public/INSTITUCIONAL_LW.mp4"
                  type="video/mp4"
                />
                Seu navegador não suporta vídeos.
              </video>
            </div>
            <div className={styles.rightbar}></div>
          </div>
        </div>
      </section>
    </>
  );
}
