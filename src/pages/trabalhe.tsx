import styles from './trabalhe.module.scss';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Bannertrabalhe from '@/components/Bannertrabalhe';
import Conhecasobre from '@/components/Conhecasobre';
import Visao from '@/components/Visao';
import Sobrevideo from '@/components/Sobre video';
import Quemtrabalhe from '@/components/Quemtrabalhe';
import Trabalheconosco from '@/components/Trabalheconosco';
import ConhecaTrabalhe from '@/components/ConhecaTrabalhe';
export default function Trabalhe() {
  return (
    <>
      <Header />
      <Bannertrabalhe />
      <ConhecaTrabalhe />

      <Quemtrabalhe />
      <Trabalheconosco />

      <Footer />
    </>
  );
}
