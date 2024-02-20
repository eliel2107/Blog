import styles from './styles.module.scss';

export default function Mobilidade() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.leftside}>
                        <img
                            src="https://d10fqir6n4h7sq.cloudfront.net/public/MESCIcon.svg"
                            alt=""
                        />
                    </div>
                    <div className={styles.rightside}>
                        <h1>Certificação MESC</h1>
                        <p>
                            Somos uma empresa com certificado da MESC sendo uma
                            das melhores empresas em satisfação do cliente.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
