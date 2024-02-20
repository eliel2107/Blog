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
                                <h2>INDICAÇÃO DIGITAL</h2>
                                <p>
                                    Através do processo digital, você facilita e
                                    simplifica sua gestão de indicações.
                                </p>
                                <p>
                                    Esse produto foi projetado para tornar seu
                                    processo de indicação de condutor mais:
                                </p>
                            </div>
                            <div className={styles.top}>
                                <div className={styles.serviceslefttop}>
                                    <img
                                        src="https://d10fqir6n4h7sq.cloudfront.net/public/./lefttop.gif"
                                        alt=""
                                    />

                                    <p>Eficiente</p>
                                </div>
                                <div className={styles.servicesrighttop}>
                                    <img
                                        src="https://d10fqir6n4h7sq.cloudfront.net/public/./righttop.gif"
                                        alt=""
                                    />

                                    <p>Rápido</p>
                                </div>
                            </div>

                            <div className={styles.button}>
                                <div className={styles.serviceslefttop}>
                                    <img
                                        src="https://d10fqir6n4h7sq.cloudfront.net/public/./lefttop.gif"
                                        alt=""
                                    />

                                    <p>Sustentável</p>
                                </div>
                                <Link href={'/contato'}>
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
