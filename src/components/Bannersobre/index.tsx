import styles from './styles.module.scss';

export default function Bannersobre() {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.leftside}>
                        <div className={styles.title}>
                            <h1>
                                Parceiros para tornar seu negócio mais funcional
                            </h1>
                        </div>
                        <div className={styles.undertitle}>
                            <div className={styles.stars}>
                                <img
                                    src="https://d10fqir6n4h7sq.cloudfront.net/public/starsicon.svg"
                                    alt=""
                                />
                                <div className={styles.pro}>
                                    <h2>Proffisionalismo</h2>
                                    <p>Máxima qualidade</p>
                                </div>
                            </div>
                            <div className={styles.satisfaction}>
                                <img
                                    src="https://d10fqir6n4h7sq.cloudfront.net/public/Like.svg"
                                    alt=""
                                />
                                <div className={styles.like}>
                                    <h2>Satisfação dos clientes</h2>
                                    <p>100%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.rightside}>
                        <p>
                            Fundada em agosto de 2016, é resultado da
                            preocupação de dois empreendedores com as
                            necessidades do mercado de gestão de frotas, que
                            reuniram mais de 25 anos de experiência no mercado
                            de documentação veicular, tecnologia para
                            desenvolver ferramentas que levam aos nossos
                            parceiros economia e inteligência na gestão de
                            processos. Somos uma empresa de DNA Curitibano,
                            simplificamos burocracia dos órgãos autuadores e a
                            descentralização das informações veiculares.Queremos
                            que os gestores e administradores tenham autonomia e
                            controle na gestão dos dados de suas frotas, para
                            que possam se concentrar na saúde e treinamento de
                            seus condutores na busca por um trânsito mais
                            seguro.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
