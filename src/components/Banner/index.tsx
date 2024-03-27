import styles from './styles.module.scss';

export default function Banner() {
    return (
        <>
            <section className={styles.container}>
                <video autoPlay muted loop className={styles.videoBackground}>
                    <source src="https://d10fqir6n4h7sq.cloudfront.net/public/videos/carro.mp4" type="video/mp4" />
                    Seu navegador não suporta a tag de vídeo.
                </video>
                <div className={styles.videogradient}></div>
                <div className={styles.middlecontent}>
                    <img
                        src="https://d10fqir6n4h7sq.cloudfront.net/public/LOGOCOLORIDA.png"
                        alt=""
                    />
                </div>
            </section>
        </>
    );
}
