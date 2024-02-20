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
                                    src="https://d10fqir6n4h7sq.cloudfront.net/public/MoneyIconW.svg"
                                    alt=""
                                />
                            </div>
                            <div className={styles.text}>
                                <h2>Economia Financeira</h2>
                                <p>
                                    Reduza custos com papel, envelopes, colas,
                                    correios e motoboy
                                </p>
                            </div>
                        </div>
                        <div className={styles.righttop}>
                            <div className={styles.image}>
                                <img
                                    src="https://d10fqir6n4h7sq.cloudfront.net/public/DashboardIconW.svg"
                                    alt=""
                                />
                            </div>
                            <div className={styles.text}>
                                <h2>Segurança da Informação</h2>
                                <p>
                                    Utilize uma documentação criptografada sem
                                    correr riscos de perdas documentais e
                                    vazamento de dados.
                                </p>
                            </div>
                        </div>
                        <div className={styles.leftbottom}>
                            <div className={styles.image}>
                                <img
                                    src="https://d10fqir6n4h7sq.cloudfront.net/public/SustentabilidadeIconW.svg"
                                    alt=""
                                />
                            </div>
                            <div className={styles.text}>
                                <h2>Sustentabilidade</h2>
                                <p>
                                    Reduza de maneira significativa o consumo de
                                    papel e contribua para a preservação do meio
                                    ambiente.
                                </p>
                            </div>
                        </div>
                        <div className={styles.rightbottom}>
                            <div className={styles.image}>
                                <img
                                    src="https://d10fqir6n4h7sq.cloudfront.net/public/EquipeIconW.svg"
                                    alt=""
                                />
                            </div>
                            <div className={styles.text}>
                                <h2>Gestão de Processos</h2>
                                <p>
                                    Tenha maior assertividade nas indicações,
                                    diminuindo a possibilidade de NICs e
                                    facilitando sua gestão
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
