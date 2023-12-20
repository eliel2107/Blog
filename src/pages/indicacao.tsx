import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BannerInd from '@/components/Produtos/Banner/BannerInd';
import LWInd from '@/components/Produtos/ProductSession/LWInd';
import IndServices from '@/components/Produtos/Servicos/IndServices';
import IndVantages from '@/components/Produtos/Vantagens/IndVantages';
import RelatorioMultas from '@/components/Produtos/Relatorios/RelatorioMultas';
import Contato from '@/components/Contato';
import WhatsApp from '@/components/WhatsApp';
export default function assist() {
  return (
    <>
      <Header />
      <BannerInd />
      <LWInd />
      <IndServices />
      <IndVantages />
      <RelatorioMultas />
      <Contato />
      <Footer />
      <WhatsApp />
    </>
  );
}
