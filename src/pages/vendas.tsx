import Header from '@/components/Header';
import Footer from '@/components/Footer';

import BannerVenda from '@/components/Produtos/Banner/BannerVenda';

import Contato from '@/components/Contato';
import LWVenda from '@/components/Produtos/ProductSession/LWVenda';
import VendaVantagens from '@/components/Produtos/Vantagens/VendaVantagens';
import Processo from '@/components/Produtos/Processo';
import ProcessoVendas from '@/components/Produtos/Processo/ProcessoVendas';
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
