// import required modules
import Link from 'next/link';
import WhatsAnimation from '../LottieAnimation/WhatsAppAnimation';
import styles from './styles.module.scss';

export default function WhatsApp() {
  return (
    <>
      <section className={styles.sectionWhats}>
        <div className={styles.whatsApp}>
          <Link rel="noreferrer" href="https://wa.link/mxg63k">
            <WhatsAnimation />
          </Link>
        </div>
      </section>
    </>
  );
}
