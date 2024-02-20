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
                                <h2>DIGITALIZAÇÃO</h2>
                                <p>
                                    É um serviço criado para empresas que buscam
                                    melhorar a eficiência de suas operações
                                    relacionadas a multas. Seja a falta de
                                    recursos internos ou a necessidade de
                                    concentrar sua equipe em outras tarefas.
                                </p>
                            </div>
                            <div className={styles.top}>
                                <div className={styles.serviceslefttop}>
                                    <img
                                        src="https://d10fqir6n4h7sq.cloudfront.net/public/./lefttop.gif"
                                        alt=""
                                    />

                                    <p>Maior eficiência</p>
                                </div>
                                <div className={styles.servicesrighttop}>
                                    <img
                                        src="https://d10fqir6n4h7sq.cloudfront.net/public/./righttop.gif"
                                        alt=""
                                    />

                                    <p>Custo-benefício</p>
                                </div>
                            </div>

                            <div className={styles.button}>
                                <div className={styles.serviceslefttop}>
                                    <img
                                        src="https://d10fqir6n4h7sq.cloudfront.net/public/./lefttop.gif"
                                        alt=""
                                    />

                                    <p>Práticas sustentáveis</p>
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
