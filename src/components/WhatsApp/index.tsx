// import required modules
import Link from 'next/link';
import Image from 'next/image';
import WhatsAnimation from '../LottieAnimation/WhatsAppAnimation';
import styles from './styles.module.scss';
import { useEffect, useState } from 'react';

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
          <Link rel="noreferrer" href="https://wa.link/mxg63k">
            <Image
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
