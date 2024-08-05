import Conhecasobre from "@/components/Conhecasobre";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PCI from "@/components/Pre╠émios/PCI";
import ISO from "@/components/Prêmios/ISO";
import MESC from "@/components/Prêmios/MESC";
import Mobilidade from "@/components/Prêmios/Mobilidade";
import TECNO from "@/components/Prêmios/TECNO";
import Sobrevideo from "@/components/Sobre video";
import Visao from "@/components/Visao";
export default function Sobre() {
  return (
    <>
      <Header />

      <Conhecasobre />
      <Visao />
      <Mobilidade />
      <MESC />
      <ISO />
      <PCI />
      <TECNO />
      <Sobrevideo />

      <Footer />
    </>
  );
}
