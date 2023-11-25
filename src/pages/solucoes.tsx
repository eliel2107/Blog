import { useState } from 'react';
import styles from './contato.module.scss';
import Bannercontato from '@/components/Bannercontato';
import Header from '@/components/Header';
import Bannersolucoes from '@/components/Bannersolucoes';
import Footer from '@/components/Footer';
import Locadora from '@/components/Locadora';
import Transportadora from '@/components/Transportadora';
import Fleet from '@/components/Fleet';
import Frota from '@/components/Frota';
import Embarcador from '@/components/Embarcador';
export default function solucoes() {
  return (
    <>
      <Header />
      <Bannersolucoes />
      <Locadora />
      <Transportadora />
      <Fleet />
      <Frota />
      <Embarcador />
      <Footer />
    </>
  );
}
