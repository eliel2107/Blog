import { useState } from 'react';
import styles from './styles.module.scss';

export default function AssistServices() {
    const Accordion = () => {
        const [isAccordionOpen, setAccordionOpen] = useState(false);

        const toggleAccordion = () => {
            setAccordionOpen(!isAccordionOpen);
        };
        return (
            <>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <div className={styles.title}>
                            <h1>SERVIÇOS</h1>
                        </div>
                        <div className={styles.middlecontent}>
                            <div className={styles.lefttop}>
                                <div className={styles.image}>
                                    <img
                                        src="https://d10fqir6n4h7sq.cloudfront.net/public/RadarIcon.svg"
                                        alt=""
                                    />
                                </div>
                                <div className={styles.text}>
                                    <h2>RASTREAMENTO E MONITORAMENTO</h2>
                                    <p>
                                        Acompanhamento online e em tempo real,
                                        apresentando indicadores de desempenho,
                                        como velocidade, hodômetro e cerca
                                        virtual.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.righttop}>
                                <div className={styles.image}>
                                    <img
                                        src="https://d10fqir6n4h7sq.cloudfront.net/public/SecurityCar.svg"
                                        alt=""
                                    />
                                </div>
                                <div className={styles.text}>
                                    <h2>TECNOLOGIA SENTINELA</h2>
                                    <p>
                                        Receba informações do período de
                                        inatividade de comunicação e de todos os
                                        eventos gerados pelo sistema.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.leftbottom}>
                                <div className={styles.image}>
                                    <img
                                        src="https://d10fqir6n4h7sq.cloudfront.net/public/PersonDocument.svg"
                                        alt=""
                                    />
                                </div>
                                <div className={styles.text}>
                                    <h2>
                                        ANÁLISE DO PERFIL DE CONDUÇÃO E
                                        ANTI-FRAUDE PARA SINDICÂNCIA
                                    </h2>
                                    <p>
                                        Ferramentas que auxiliam na emissão de
                                        relatórios, como acelerômetro, tracejado
                                        de percurso e eventos. Sendo possível
                                        avaliar se houve alguma conduta
                                        imprudente por parte do condutor.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.rightbottom}>
                                <div className={styles.image}>
                                    <img
                                        src="https://d10fqir6n4h7sq.cloudfront.net/public/PhoneIcon.svg"
                                        alt=""
                                    />
                                </div>
                                <div className={styles.text}>
                                    <h2>
                                        INTERFACE WEB E MOBILE PERSONALIZADA
                                    </h2>
                                    <p>
                                        Customização com a marca e identidade
                                        visual do cliente e url. Além da
                                        possibilidade de integração com outras
                                        plataformas de rastreamento.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {isAccordionOpen && (
                            <>
                                <div className={styles.middlecontent1}>
                                    <div className={styles.lefttop}>
                                        <div className={styles.image}>
                                            <img
                                                src="https://d10fqir6n4h7sq.cloudfront.net/public/ToolsIcon.svg"
                                                alt=""
                                            />
                                        </div>
                                        <div className={styles.text}>
                                            <h2>
                                                INSTALAÇÃO E MANUTENÇÃO
                                                ESPECIALIZADA
                                            </h2>
                                            <p>
                                                Cadastro de técnicos e controle
                                                de estoque.
                                            </p>
                                        </div>
                                    </div>
                                    <div className={styles.righttop}>
                                        <div className={styles.image}>
                                            <img
                                                src="https://d10fqir6n4h7sq.cloudfront.net/public/HeadsetIcon.svg"
                                                alt=""
                                            />
                                        </div>
                                        <div className={styles.text}>
                                            <h2>ATENDIMENTO PERSONALIZADO</h2>
                                            <p>
                                                Treinamento da plataforma,
                                                central 24h para roubo e furto,
                                                gestão completa e eficiente.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                        {!isAccordionOpen && (
                            <div className={styles.button}>
                                <button
                                    className={`${styles.button} ${
                                        isAccordionOpen ? styles.open : ''
                                    }`}
                                    onClick={toggleAccordion}
                                >
                                    Ver todos
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </>
        );
    };
    return <Accordion />;
}
