import Header from '@/components/Header';
import Footer from '@/components/Footer';

import BannerDoc from '@/components/Produtos/Banner/BannerDoc';
import LWDoc from '@/components/Produtos/ProductSession/LWDoc';
import DocServices from '@/components/Produtos/Servicos/DocServices';
import DocVantages from '@/components/Produtos/Vantagens/DocVantages';
import Contato from '@/components/Contato';
import WhatsApp from '@/components/WhatsApp';
export default function doc() {
  return (
    <>
      <Header />
      <BannerDoc />
      <LWDoc />
      <DocServices />
      <DocVantages />

      <Contato />
      <Footer />
      <WhatsApp />
    </>
  );
}
