import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatoriosSat from '@/components/Produtos/Relatorios/RelatoriosSat';
import SatServices from '@/components/Produtos/Servicos/SatServices';
import WhatsApp from '@/components/WhatsApp';
import Consulta from '@/components/Produtos/Consulta';
import Contato from '@/components/Contato';
import BannerSat from '@/components/Produtos/Banner/BannerSat';
import LWDebitos from '@/components/Produtos/ProductSession/LWDebitos';
import SatVantages from '@/components/Produtos/Vantagens/SatVantages';
export default function debitos() {
  return (
    <>
      <Header />
      <BannerSat />

      <SatServices />
      <SatVantages />

      <RelatoriosSat />
      <Contato />
      <Footer />
      <WhatsApp />
    </>
  );
}
