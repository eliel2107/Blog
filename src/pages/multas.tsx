import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BannerMultas from '@/components/Produtos/Banner/BannerMultas';
import LWMultas from '@/components/Produtos/ProductSession/LWMultas';
import MultasServices from '@/components/Produtos/Servicos/MultasServices';
import MultasVantages from '@/components/Produtos/Vantagens/MultasVantages';
import RelatorioMultas from '@/components/Produtos/Relatorios/RelatorioMultas';
import Contato from '@/components/Contato';
export default function assist() {
  return (
    <>
      <Header />
      <BannerMultas />
      <LWMultas />
      <MultasServices />
      <MultasVantages />
      <RelatorioMultas />
      <Contato />
      <Footer />
    </>
  );
}
