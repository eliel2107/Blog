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
                                    src="https://d10fqir6n4h7sq.cloudfront.net/public/UploadIcon.svg"
                                    alt=""
                                />
                            </div>
                            <div className={styles.text}>
                                <h2>Agilidade</h2>
                                <p>
                                    O vínculo automático da imagem ao AIT
                                    possibilita um processo de indicação de
                                    condutor e pagamento da infração mais rápido
                                    e eficiente.
                                </p>
                            </div>
                        </div>
                        <div className={styles.righttop}>
                            <div className={styles.image}>
                                <img
                                    src="https://d10fqir6n4h7sq.cloudfront.net/public/SustentabilidadeIcon.svg"
                                    alt=""
                                />
                            </div>
                            <div className={styles.text}>
                                <h2>Sustentabilidade</h2>
                                <p>
                                    Realizamos o descarte adequado e responsável
                                    dos documentos, ajudando a comunidade e
                                    colaborando com o meio ambiente.
                                </p>
                            </div>
                        </div>
                        <div className={styles.leftbottom}>
                            <div className={styles.image}>
                                <img
                                    src="https://d10fqir6n4h7sq.cloudfront.net/public/MoneyIcon.svg"
                                    alt=""
                                />
                            </div>
                            <div className={styles.text}>
                                <h2>Economia</h2>
                                <p>
                                    Sua equipe economiza tempo, trazendo ótimo
                                    custo-benefício.
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
