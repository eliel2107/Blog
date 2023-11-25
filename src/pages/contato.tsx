import { useState } from 'react';
import styles from './contato.module.scss';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Faleconosco from '@/components/Faleconosco';
export default function contato() {
  return (
    <>
      <Header />

      <Faleconosco />
      <Footer />
    </>
  );
}
