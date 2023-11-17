import Header from '@/components/Header';
import Banner from '@/components/Banner';
import styles from '@/styles/Home.module.scss';
import Sobre from '@/components/Sobre';
import Conheca from '@/components/Conheca';
import Numeros from '@/components/Numeros';
import Reduzir from '@/components/Reduzir';
import Destaques from '@/components/Destaques';
import Contato from '@/components/Contato';
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
    </>
  );
}
