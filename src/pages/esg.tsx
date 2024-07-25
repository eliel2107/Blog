import BannerEsg from "@/components/BannerEsg";
import CustomSlider from "@/components/customSlider";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NossosCompromissos from "@/components/NossosCompromissos";

export default function Esg() {
  return (
    <>
      <Header />
      <BannerEsg />
      <NossosCompromissos />
      <CustomSlider />
      <Footer variant="blue" />
    </>
  );
}
