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
                                    src="https://d10fqir6n4h7sq.cloudfront.net/public/UploadIconW.svg"
                                    alt=""
                                />
                            </div>
                            <div className={styles.text}>
                                <h2>Agilidade na Obtenção das Informações</h2>
                                <p>
                                    Receba o relatório com os débitos veiculares
                                    evitando atrasos na venda.
                                </p>
                            </div>
                        </div>
                        <div className={styles.righttop}>
                            <div className={styles.image}>
                                <img
                                    src="https://d10fqir6n4h7sq.cloudfront.net/public/MoneyIconW.svg"
                                    alt=""
                                />
                            </div>
                            <div className={styles.text}>
                                <h2>Maior Rapidez na Obtenção de Lucro</h2>
                                <p>
                                    Finalize o processo de venda e melhore o
                                    desempenho financeiro da sua empresa.
                                </p>
                            </div>
                        </div>
                        <div className={styles.leftbottom}>
                            <div className={styles.image}>
                                <img
                                    src="https://d10fqir6n4h7sq.cloudfront.net/public/PersonDocumentW.svg"
                                    alt=""
                                />
                            </div>
                            <div className={styles.text}>
                                <h2>Velocidade nos Pagamentos dos Débitos</h2>
                                <p>
                                    Realize os pagamentos dos débitos de forma
                                    rápida e diminua o tempo do processo.
                                </p>
                            </div>
                        </div>
                        <div className={styles.rightbottom}>
                            <div className={styles.image}>
                                <img
                                    src="https://d10fqir6n4h7sq.cloudfront.net/public/HappyIcon.svg"
                                    alt=""
                                />
                            </div>
                            <div className={styles.text}>
                                <h2>Satisfação do Comprador</h2>
                                <p>
                                    Torne a experiência do seu cliente positiva
                                    e satisfatória.
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
