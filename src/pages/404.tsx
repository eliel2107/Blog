import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useRouter } from 'next/router';
import styles from '../styles/404.module.scss';

export default function NotFound() {
  const router = useRouter();

  const navigateHome = () => {
    router.push('/');
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftside}>
            <h1>Ooops! Essa página não existe</h1>
            <button onClick={navigateHome}>Voltar para home</button>
          </div>
          <div className={styles.rightside}>
            <img src="404.svg" alt="Página não encontrada" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
