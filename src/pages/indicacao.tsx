import Contato from '@/components/Contato';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import BannerInd from '@/components/Produtos/Banner/BannerInd';
import LWInd from '@/components/Produtos/ProductSession/LWInd';
import RelatorioMultas from '@/components/Produtos/Relatorios/RelatorioMultas';
import IndServices from '@/components/Produtos/Servicos/IndServices';
import IndVantages from '@/components/Produtos/Vantagens/IndVantages';
export default function assist() {
    return (
        <>
            <Header />
            <BannerInd />
            <LWInd />
            <IndServices />
            <IndVantages />
            <RelatorioMultas />
            <Contato />
            <Footer />
        </>
    );
}
