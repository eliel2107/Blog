import Link from 'next/link';
import styles from './styles.module.scss';

export default function Transportadora() {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.rightside}>
                        <div className={styles.serviços}>
                            <div className={styles.title}>
                                <h2>LW DÉBITOS</h2>
                                <p>Serviços disponíveis nos Estados PR e SP.</p>
                                <p>
                                    Simplifique, através do nosso sistema, a
                                    consulta e pagamento de débitos da sua
                                    frota, como:
                                </p>
                            </div>
                            <div className={styles.top}>
                                <div className={styles.serviceslefttop}>
                                    <img
                                        src="https://d10fqir6n4h7sq.cloudfront.net/public/./lefttop.gif"
                                        alt=""
                                    />

                                    <p>IPVA</p>
                                </div>
                                <div className={styles.servicesrighttop}>
                                    <img
                                        src="https://d10fqir6n4h7sq.cloudfront.net/public/./righttop.gif"
                                        alt=""
                                    />

                                    <p>Licenciamento</p>
                                </div>
                            </div>

                            <div className={styles.button}>
                                <div className={styles.serviceslefttop}>
                                    <img
                                        src="https://d10fqir6n4h7sq.cloudfront.net/public/./lefttop.gif"
                                        alt=""
                                    />

                                    <p>Emissão de CRLV</p>
                                </div>
                                <Link href={'/contato'} className={styles.link}>
                                    <button>Saiba mais</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
