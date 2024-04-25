import Footer from '@/components/Footer';
import Header from '@/components/Header';

import Bannerdig from '@/components/Produtos/Banner/Bannerdig';

import Contato from '@/components/Contato';
import ProcessoDig from '@/components/Produtos/Processo/ProcessoDig';
import LWDig from '@/components/Produtos/ProductSession/LWDig';
import DigVantages from '@/components/Produtos/Vantagens/DigVantages';
export default function debitos() {
    return (
        <>
            <Header />
            <Bannerdig />
            <LWDig />

            <DigVantages />
            <ProcessoDig />
            <Contato />
            <Footer />
        </>
    );
}
