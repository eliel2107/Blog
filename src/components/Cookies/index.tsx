import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

const Cookies = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const cookiesAccepted = localStorage.getItem('cookiesAccepted');
        if (!cookiesAccepted) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookiesAccepted', 'true');
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <section className={styles.container}>
            <div className={styles.contentCookiesDesktop}>
                <img src="/biscoito.png" alt="Cookie" />
                <p>
                    O nosso site utiliza cookies para melhorar a sua experiência
                    de navegação. Ao clicar em &quot;Concordar e fechar&quot;,
                    você concorda com o uso de cookies, termos e a{' '}
                    <Link href="/privacidade">Política de Privacidade.</Link>
                </p>
                <button onClick={handleAccept}>Concordar e fechar</button>
            </div>
            <div className={styles.contentCookiesMobile}>
                <p>
                    <img src="/biscoito.png" alt="Cookie" />O nosso site utiliza
                    cookies para melhorar a sua experiência de navegação. Ao
                    clicar em &quot;Concordar e fechar&quot;, você concorda com
                    o uso de cookies, termos e a{' '}
                    <Link href="/politica-privacidade">
                        Política de Privacidade.
                    </Link>
                </p>

                <button onClick={handleAccept}>Concordar e fechar</button>
            </div>
        </section>
    );
};

export default Cookies;
