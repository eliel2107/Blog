import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BannerMultas from "@/components/Produtos/Banner/BannerMultas";
import LWMultas from "@/components/Produtos/ProductSession/LWMultas";
import RelatorioMultas from "@/components/Produtos/Relatorios/RelatorioMultas";
import MultasServices from "@/components/Produtos/Servicos/MultasServices";
import MultasVantages from "@/components/Produtos/Vantagens/MultasVantages";
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
