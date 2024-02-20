import styles from './styles.module.scss';

export default function AssistServices() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.leftside}>
                        <img
                            src="https://d10fqir6n4h7sq.cloudfront.net/public/satmac.png"
                            alt=""
                        />
                    </div>
                    <div className={styles.rightside}>
                        <h1>LW SIM</h1>
                        <p>
                            É uma plataforma desenvolvida para monitoramento e
                            rastreamento da sua frota de veículos com:
                        </p>

                        <div className={styles.check}>
                            <img
                                src="https://d10fqir6n4h7sq.cloudfront.net/public/iconrel.png"
                                alt=""
                            />
                            <p>Controle de movimento e velocidade</p>
                        </div>
                        <div className={styles.check}>
                            <img
                                src="https://d10fqir6n4h7sq.cloudfront.net/public/iconrel.png"
                                alt=""
                            />
                            <p>Posicionamento de trajeto percorrido</p>
                        </div>
                        <div className={styles.check}>
                            <img
                                src="https://d10fqir6n4h7sq.cloudfront.net/public/iconrel.png"
                                alt=""
                            />
                            <p>Movimento com ignição desligada</p>
                        </div>
                        <p>
                            Entre outras funções para o melhor controle da
                            frota.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
