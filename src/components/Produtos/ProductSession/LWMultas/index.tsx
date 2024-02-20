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
                                <h2>LW MULTAS</h2>
                                <p>
                                    É uma plataforma pensada na redução do tempo
                                    gasto em verificações, envios e recebimentos
                                    de multas veiculares. Através de uma solução
                                    eficiente e ágil, que facilita o
                                    gerenciamento de frotas pequenas, médias e
                                    grandes.
                                </p>

                                <p>Esse produto possui os seguintes planos:</p>
                            </div>
                            <div className={styles.top}>
                                <div className={styles.serviceslefttop}>
                                    <img
                                        src="https://d10fqir6n4h7sq.cloudfront.net/public/./lefttop.gif"
                                        alt=""
                                    />

                                    <p>Lite</p>
                                </div>
                                <div className={styles.servicesrighttop}>
                                    <img
                                        src="https://d10fqir6n4h7sq.cloudfront.net/public/./righttop.gif"
                                        alt=""
                                    />

                                    <p>Plus</p>
                                </div>
                            </div>

                            <div className={styles.button}>
                                <div className={styles.serviceslefttop}>
                                    <img
                                        src="https://d10fqir6n4h7sq.cloudfront.net/public/./lefttop.gif"
                                        alt=""
                                    />

                                    <p>Premium</p>
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
