import BannerEsg from "@/components/BannerEsg";
import BannerNossoTime from "@/components/BannerNossoTime";
import Contato from "@/components/Contato";
import CustomSlider from "@/components/customSlider";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NossosCompromissos from "@/components/NossosCompromissos";
import OsFundadores from "@/components/OsFundadores";

export default function NossoTime() {
  return (
    <>
      <Header />
      <BannerNossoTime />
      <OsFundadores />
      <Contato />
      <Footer />
    </>
  );
}
