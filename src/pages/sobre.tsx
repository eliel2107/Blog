import styles from './sobre.module.scss';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Bannersobre from '@/components/Bannersobre';
import Conhecasobre from '@/components/Conhecasobre';
import Visao from '@/components/Visao';
import Sobrevideo from '@/components/Sobre video';

export default function Sobre() {
  return (
    <>
      <Header />

      <Conhecasobre />
      <Visao />
      <Sobrevideo />

      <Footer />
    </>
  );
}
