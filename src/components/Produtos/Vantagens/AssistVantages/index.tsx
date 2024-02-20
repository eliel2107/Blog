import Link from 'next/link';
import styles from './styles.module.scss';

export default function AssistServices() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <h1>VANTAGENS</h1>
                    </div>
                    <div className={styles.middlecontent}>
                        <div className={styles.lefttop}>
                            <div className={styles.image}>
                                <img
                                    src="https://d10fqir6n4h7sq.cloudfront.net/public/EquipeIconW.svg"
                                    alt=""
                                />
                            </div>
                            <div className={styles.text}>
                                <h2>Equipe e Infraestrutura</h2>
                                <p>
                                    Possuímos link dedicados e redundância de
                                    internet, gerador de energia e time
                                    altamente qualificado e capacitado para
                                    prestar atendimento de excelência.
                                </p>
                            </div>
                        </div>
                        <div className={styles.righttop}>
                            <div className={styles.image}>
                                <img
                                    src="https://d10fqir6n4h7sq.cloudfront.net/public/SecurityCarW.svg"
                                    alt=""
                                />
                            </div>
                            <div className={styles.text}>
                                <h2>Efetividade</h2>
                                <p>
                                    Recuperação de veículos e cargas que somam
                                    mais de 300 milhões de reais em patrimônio
                                    que poderiam ser perdidos
                                </p>
                            </div>
                        </div>
                        <div className={styles.leftbottom}>
                            <div className={styles.image}>
                                <img
                                    src="https://d10fqir6n4h7sq.cloudfront.net/public/RadarIconW.svg"
                                    alt=""
                                />
                            </div>
                            <div className={styles.text}>
                                <h2>Agentes Pronta Resposta</h2>
                                <p>
                                    Contamos com mais de 2.300 agentes
                                    espalhados pelo Brasil, 27 bases antenistas
                                    em 585 cidades e presente nas principais
                                    rotas
                                </p>
                            </div>
                        </div>
                        <div className={styles.rightbottom}>
                            <div className={styles.image}>
                                <img
                                    src="https://d10fqir6n4h7sq.cloudfront.net/public/IntegraçãoIconW.svg"
                                    alt=""
                                />
                            </div>
                            <div className={styles.text}>
                                <h2>Integração</h2>
                                <p>
                                    Possuímos ação em conjunto com as
                                    autoridades competentes visando o êxito da
                                    ocorrência
                                </p>
                            </div>
                        </div>
                    </div>
                    <Link href={'/contato'}>
                        <div className={styles.button}>
                            <button>Fale conosco</button>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}
