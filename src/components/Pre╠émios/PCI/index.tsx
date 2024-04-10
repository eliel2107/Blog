import styles from './styles.module.scss';

export default function PCI() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.leftside}>
                        <img src="/PCI.svg" alt="" />
                    </div>
                    <div className={styles.rightside}>
                        <h1>PCI COMPLIANT</h1>
                        <p>
                            Somos uma empresa certificada PCI DSS,
                            proporcionando segurança para suas transações.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
