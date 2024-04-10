// import required modules
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

export default function WhatsApp() {
  const [windowSize, setWindowSize] = useState<{
    width?: number;
    height?: number;
  }>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const imageWidth = windowSize.width && windowSize.width < 768 ? 50 : 80;
  const imageHeight =
    windowSize.width && windowSize.width < 768 ? (50 / 80) * 150 : 150;
  return (
    <>
      <section className={styles.sectionWhats}>
        <div className={styles.whatsApp}>
          <Link
            rel="noreferrer"
            href="https://wa.me/5541991258315?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+a+LW%21"
          >
            <img
              src="https://d10fqir6n4h7sq.cloudfront.net/public/NEWWHATSICON.png"
              alt="WhatsApp"
              width={imageWidth}
              height={imageHeight}
            />
          </Link>
        </div>
      </section>
    </>
  );
}
