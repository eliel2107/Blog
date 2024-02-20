import styles from './styles.module.scss';

export default function Mobilidade() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.leftside}>
                        <img
                            src="https://d10fqir6n4h7sq.cloudfront.net/public/VozesIcon.svg"
                            alt=""
                        />
                    </div>
                    <div className={styles.rightside}>
                        <h1>1° Prêmio Vozes da Mobilidade</h1>
                        <p>
                            Fomos premiados na categoria{' '}
                            <strong>Novas tecnologias de mobilidade</strong>{' '}
                            pelo app WhatsCar por gerar melhor qualidade de vida
                            para as gerações atuais e futuras.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
