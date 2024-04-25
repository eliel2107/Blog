import Contato from '@/components/Contato';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import BannerDebitos from '@/components/Produtos/Banner/BannerDebitos';
import Consulta from '@/components/Produtos/Consulta';
import LWDebitos from '@/components/Produtos/ProductSession/LWDebitos';
import Relatorios from '@/components/Produtos/Relatorios';
import DebitServices from '@/components/Produtos/Servicos/DebitServices';
import DebitVantages from '@/components/Produtos/Vantagens/DebitVantages';
export default function debitos() {
    return (
        <>
            <Header />
            <BannerDebitos />
            <LWDebitos />
            <DebitServices />
            <DebitVantages />
            <Consulta />
            <Relatorios />
            <Contato />
            <Footer />
        </>
    );
}
