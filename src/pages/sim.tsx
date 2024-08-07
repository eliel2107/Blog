import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BannerSat from "@/components/Produtos/Banner/BannerSat";
import RelatoriosSat from "@/components/Produtos/Relatorios/RelatoriosSat";
import SatServices from "@/components/Produtos/Servicos/SatServices";
import SatVantages from "@/components/Produtos/Vantagens/SatVantages";
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
    </>
  );
}
