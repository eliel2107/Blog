import Footer from '@/components/Footer';
import Header from '@/components/Header';
import WhatsApp from '@/components/WhatsApp';
import styles from '../styles/termos.module.scss';

export default function Trabalhe() {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>TERMOS DE SERVIÇO</h1>
                    <div className={styles.content}>
                        <p>
                            Bem-vindo aos Termos de Serviço da LW Tecnologia.
                            Estes termos regulam o uso dos nossos serviços e
                            produtos. Ao utilizar nossos serviços, você concorda
                            em estar vinculado por estes termos.
                        </p>
                        <h2>Uso dos Serviços</h2>
                        <p>
                            Você concorda em usar nossos serviços apenas para
                            fins legais e de maneira que não infrinja os
                            direitos de, restrinja ou iniba o uso e o gozo dos
                            serviços por qualquer terceiro. Condutas proibidas
                            incluem assediar ou causar angústia ou
                            inconveniência a qualquer pessoa, transmitir
                            conteúdo obsceno ou ofensivo, ou interromper o fluxo
                            normal de diálogo.
                        </p>
                        <h2>Alterações nos Serviços</h2>
                        <p>
                            A LW Tecnologia reserva-se o direito de alterar ou
                            descontinuar qualquer aspecto ou recurso dos nossos
                            serviços a qualquer momento, incluindo, mas não
                            limitado a, conteúdo, horários de disponibilidade e
                            equipamentos necessários para o acesso ou uso.
                        </p>
                        <h2>Propriedade Intelectual</h2>
                        <p>
                            Todo o conteúdo e software utilizado em nossos
                            serviços são propriedade da LW Tecnologia ou de seus
                            fornecedores e protegidos pelas leis de direitos
                            autorais do Brasil e internacionais.
                        </p>
                        <h2>Limitação de Responsabilidade</h2>
                        <p>
                            A LW Tecnologia não será responsável por quaisquer
                            danos diretos, indiretos, incidentais, especiais ou
                            consequenciais que resultem do uso ou da
                            incapacidade de usar nossos serviços.
                        </p>
                        <h2>Alterações aos Termos</h2>
                        <p>
                            A LW Tecnologia pode modificar estes termos de
                            serviço a qualquer momento. Tais modificações serão
                            efetivas imediatamente após a postagem no site.
                        </p>
                        <h2>Lei Aplicável</h2>
                        <p>
                            Estes termos serão regidos e interpretados de acordo
                            com as leis do Brasil, sem dar efeito a quaisquer
                            princípios de conflitos de leis.
                        </p>
                        <p>
                            Se você tiver alguma dúvida sobre estes termos,
                            entre em contato conosco.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
            <WhatsApp />
        </>
    );
}
