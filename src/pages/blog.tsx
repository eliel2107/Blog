import { useState } from 'react';
import styles from './blog.module.scss';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Bannerblog from '@/components/Bannerblog';
import Destaquesblog from '@/components/Destaquesblog';
export default function Blog() {
  return (
    <>
      <Header />
      <Bannerblog />
      <Destaquesblog />
      <Footer />
    </>
  );
}
