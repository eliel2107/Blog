import styles from './sobre.module.scss';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Bannersobre from '@/components/Bannersobre';
import Conhecasobre from '@/components/Conhecasobre';
import Visao from '@/components/Visao';
import Sobrevideo from '@/components/Sobre video';
import WhatsApp from '@/components/WhatsApp';
import Mobilidade from '@/components/Prêmios/Mobilidade';
import MESC from '@/components/Prêmios/MESC';
import ISO from '@/components/Prêmios/ISO';
export default function Sobre() {
  return (
    <>
      <Header />

      <Conhecasobre />
      <Visao />
      <Mobilidade />
      <MESC />
      <ISO />
      <Sobrevideo />

      <Footer />
      <WhatsApp />
    </>
  );
}
