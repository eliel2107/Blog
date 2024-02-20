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
                                    src="https://d10fqir6n4h7sq.cloudfront.net/public/CNHIcon.svg"
                                    alt=""
                                />
                            </div>
                            <div className={styles.text}>
                                <h2>Visualização da Pontuação das CNH’s</h2>
                                <p>
                                    Acompanhamento e verificação <br />
                                    da pontuação dos condutores.
                                </p>
                            </div>
                        </div>
                        <div className={styles.righttop}>
                            <div className={styles.image}>
                                <img
                                    src="https://d10fqir6n4h7sq.cloudfront.net/public/VolanteIcon.svg"
                                    alt=""
                                />
                            </div>
                            <div className={styles.text}>
                                <h2>Tomada de Decisão</h2>
                                <p>
                                    A ação é mais rápida em casos de aumento
                                    significativo na pontuação ou CNH suspensa.
                                </p>
                            </div>
                        </div>
                        <div className={styles.leftbottom}>
                            <div className={styles.image}>
                                <img
                                    src="https://d10fqir6n4h7sq.cloudfront.net/public/SecurityCar.svg"
                                    alt=""
                                />
                            </div>
                            <div className={styles.text}>
                                <h2>Prevenção Efetiva de Penalidades</h2>
                                <p>
                                    Com o monitoramento da situação da CNH
                                    pode-se evitar penalidades e multas, além de
                                    garantir a regularidade da sua frota.
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
