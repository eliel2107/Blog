import styles from './styles.module.scss';

export default function Transportadora() {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.leftside}>
                        <img
                            src="https://d10fqir6n4h7sq.cloudfront.net/public/"
                            alt=""
                        />
                        <div className={styles.overlay}>
                            <div className={styles.rightside}>
                                <div className={styles.serviços}>
                                    <h2>LW DOC</h2>
                                    <div className={styles.top}>
                                        <div className={styles.serviceslefttop}>
                                            <img
                                                src="https://d10fqir6n4h7sq.cloudfront.net/public/./lefttop.gif"
                                                alt=""
                                            />
                                            <h1>Emplacamento</h1>
                                            <p>
                                                Registro do veículo 0KM no
                                                Detran e realização do primeiro
                                                emplacamento.
                                            </p>
                                        </div>
                                        <div
                                            className={styles.servicesrighttop}
                                        >
                                            <img
                                                src="https://d10fqir6n4h7sq.cloudfront.net/public/./righttop.gif"
                                                alt=""
                                            />
                                            <h1>2ª via CRV</h1>
                                            <p>
                                                Em caso de dano, perda, roubo ou
                                                furto do CRV original, solicite
                                                a 2ª via do documento.
                                            </p>
                                        </div>
                                    </div>
                                    <div className={styles.bottom}>
                                        <div
                                            className={
                                                styles.servicesrightbottom
                                            }
                                        >
                                            <img
                                                src="https://d10fqir6n4h7sq.cloudfront.net/public/./rightbottom.gif"
                                                alt=""
                                            />
                                            <h1>Liberação Veicular</h1>
                                            <p>
                                                Liberação de veículos
                                                apreendidos por infração de
                                                trânsito durante ações de
                                                fiscalização.
                                            </p>
                                        </div>
                                        <div
                                            className={
                                                styles.servicesleftbottom
                                            }
                                        >
                                            <img
                                                src="https://d10fqir6n4h7sq.cloudfront.net/public/./leftbottom.gif"
                                                alt=""
                                            />
                                            <h1>Transferência</h1>
                                            <p>
                                                Após a venda do veículo ocorre a
                                                emissão dos documentos com os
                                                dados do novo proprietário.
                                            </p>
                                        </div>
                                    </div>
                                    <div className={styles.top}>
                                        <div className={styles.serviceslefttop}>
                                            <img
                                                src="https://d10fqir6n4h7sq.cloudfront.net/public/./lefttop.gif"
                                                alt=""
                                            />
                                            <h1>Licenciamento</h1>
                                            <p>
                                                Emissão do Certificado de
                                                Registro e Licenciamento do
                                                Veículo Eletrônico (CRLV-e).
                                            </p>
                                        </div>
                                        <div
                                            className={styles.servicesrighttop}
                                        >
                                            <img
                                                src="https://d10fqir6n4h7sq.cloudfront.net/public/./righttop.gif"
                                                alt=""
                                            />
                                            <h1>Alteração de Dados</h1>
                                            <p>
                                                Regularização dos documentos
                                                quando há alteração de dados ou
                                                características do veículo.
                                            </p>
                                        </div>
                                    </div>
                                    <div className={styles.button}>
                                        <button>Quero o LW DOC</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
