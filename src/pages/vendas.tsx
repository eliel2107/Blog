import Footer from "@/components/Footer";
import Header from "@/components/Header";

import BannerVenda from "@/components/Produtos/Banner/BannerVenda";

import Contato from "@/components/Contato";
import ProcessoVendas from "@/components/Produtos/Processo/ProcessoVendas";
import LWVenda from "@/components/Produtos/ProductSession/LWVenda";
import VendaVantagens from "@/components/Produtos/Vantagens/VendaVantagens";
export default function debitos() {
  return (
    <>
      <Header />
      <BannerVenda />
      <LWVenda />

      <VendaVantagens />
      <ProcessoVendas />
      <Contato />
      <Footer />
    </>
  );
}
