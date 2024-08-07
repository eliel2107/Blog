import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ANTTServices from "@/components/Produtos/Servicos/ANTTServices";

import Contato from "@/components/Contato";
import BannerANTT from "@/components/Produtos/Banner/BannerANTT";
import LWANTT from "@/components/Produtos/ProductSession/LWANTT";
import ANTTVantage from "@/components/Produtos/Vantagens/ANTTVantage";
export default function debitos() {
  return (
    <>
      <Header />
      <BannerANTT />
      <LWANTT />
      <ANTTServices />
      <ANTTVantage />

      <Contato />
      <Footer />
    </>
  );
}
