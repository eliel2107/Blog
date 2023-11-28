import { useState } from 'react';
import styles from './contato.module.scss';
import Bannercontato from '@/components/Bannercontato';
import Header from '@/components/Header';
import Bannersolucoes from '@/components/Bannersolucoes';
import Footer from '@/components/Footer';
import Locadora from '@/components/Locadora';
import Transportadora from '@/components/Transportadora';
import Fleet1 from '@/components/Fleet1';
import Frota from '@/components/Frota';

import Embarcador1 from '@/components/Embarcador1';
export default function solucoes() {
  return (
    <>
      <Header />
      <Bannersolucoes />
      <Locadora />
      <Transportadora />
      <Fleet1 />
      <Frota />
      <Embarcador1 />
      <Footer />
    </>
  );
}
