import Header from '@/components/Header';
import Footer from '@/components/Footer';

import BannerCNH from '@/components/Produtos/Banner/BannerCNH';

import Contato from '@/components/Contato';
import LWCNH from '@/components/Produtos/ProductSession/LWCNH';
import CNHVantages from '@/components/Produtos/Vantagens/CNHVantages';

import ProcessoCnh from '@/components/Produtos/Processo/ProcessoCnh';
import WhatsApp from '@/components/WhatsApp';
export default function debitos() {
  return (
    <>
      <Header />
      <BannerCNH />
      <LWCNH />

      <CNHVantages />
      <ProcessoCnh />
      <Contato />
      <Footer />
      <WhatsApp />
    </>
  );
}
