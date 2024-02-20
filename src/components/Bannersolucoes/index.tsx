import Link from 'next/link';
import styles from './styles.module.scss';

export default function Bannersolucoes() {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.leftside}>
                        <div className={styles.title}>
                            <h1>
                                CONHEÇA O PRODUTO <br />
                                IDEAL PARA SUA FROTA
                            </h1>
                        </div>
                    </div>
                    <div className={styles.rightside}>
                        <p>
                            Com a LW Tecnologia, você pode aumentar a eficiência
                            operacional e reduzir os custos de operação em até
                            40%, além de melhorar e simplificar a gestão de sua
                            frota.
                        </p>
                        <Link href="/contato">
                            <button>
                                Fale com um especialista{' '}
                                <img
                                    src="https://d10fqir6n4h7sq.cloudfront.net/public/ArrowRight.svg"
                                    alt=""
                                />
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
