import Header from '@/components/Header';
import Footer from '@/components/Footer';

import Bannerdig from '@/components/Produtos/Banner/Bannerdig';

import Contato from '@/components/Contato';
import LWDig from '@/components/Produtos/ProductSession/LWDig';
import DigVantages from '@/components/Produtos/Vantagens/DigVantages';
import Processo from '@/components/Produtos/Processo';
import ProcessoDig from '@/components/Produtos/Processo/ProcessoDig';
import WhatsApp from '@/components/WhatsApp';
export default function debitos() {
  return (
    <>
      <Header />
      <Bannerdig />
      <LWDig />

      <DigVantages />
      <ProcessoDig />
      <Contato />
      <Footer />
      <WhatsApp />
    </>
  );
}
