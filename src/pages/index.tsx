import Banner from '@/components/Banner';
import Conheca from '@/components/Conheca';
import Contato from '@/components/Contato';
import Destaques from '@/components/Destaques';
import Header from '@/components/Header';
import Numeros from '@/components/Numeros';
import Reduzir from '@/components/Reduzir';
import Sobre from '@/components/Sobre';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Sobre />
      <Conheca />
      <Numeros />
      <Reduzir />
      <Destaques />
      <Contato />
      <Footer />
    </>
  );
}
