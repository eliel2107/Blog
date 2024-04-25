import Footer from '@/components/Footer';
import Header from '@/components/Header';

import Contato from '@/components/Contato';
import BannerDoc from '@/components/Produtos/Banner/BannerDoc';
import LWDoc from '@/components/Produtos/ProductSession/LWDoc';
import DocServices from '@/components/Produtos/Servicos/DocServices';
import DocVantages from '@/components/Produtos/Vantagens/DocVantages';
export default function doc() {
    return (
        <>
            <Header />
            <BannerDoc />
            <LWDoc />
            <DocServices />
            <DocVantages />

            <Contato />
            <Footer />
        </>
    );
}
