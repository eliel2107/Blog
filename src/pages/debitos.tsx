import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Relatorios from '@/components/Produtos/Relatorios';
import DebitServices from '@/components/Produtos/Servicos/DebitServices';
import WhatsApp from '@/components/WhatsApp';
import Consulta from '@/components/Produtos/Consulta';
import Contato from '@/components/Contato';
import BannerDebitos from '@/components/Produtos/Banner/BannerDebitos';
import LWDebitos from '@/components/Produtos/ProductSession/LWDebitos';
import DebitVantages from '@/components/Produtos/Vantagens/DebitVantages';
export default function debitos() {
  return (
    <>
      <Header />
      <BannerDebitos />
      <LWDebitos />
      <DebitServices />
      <DebitVantages />
      <Consulta />
      <Relatorios />
      <Contato />
      <Footer />
      <WhatsApp />
    </>
  );
}
