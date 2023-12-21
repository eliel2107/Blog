import { useState } from 'react';
import styles from './styles.module.scss';

export default function AssistServices() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h1>COMO O PROCESSO É REALIZADO</h1>
          </div>
          <div className={styles.middlecontent}>
            <div className={styles.lefttop}>
              <div className={styles.image}>
                <img src="DocIcon.svg" alt="" />
              </div>
              <div className={styles.text}>
                <h2>ACESSO AO PORTAL DE MULTAS</h2>
                <p>
                  Acessamos o portal e visualizamos a documentação dos
                  condutores inserida pelos nossos clientes.
                </p>
              </div>
            </div>
            <div className={styles.righttop}>
              <div className={styles.image}>
                <img src="WebIcon.svg" alt="" />
              </div>
              <div className={styles.text}>
                <h2>INCLUSÃO NO SITE DO ÓRGÃO</h2>
                <p>
                  Inserimos a documentação no site do órgão e aguardamos o
                  protocolo.
                </p>
              </div>
            </div>
            <div className={styles.leftbottom}>
              <div className={styles.image}>
                <img src="PranchetaIcon.svg" alt="" />
              </div>
              <div className={styles.text}>
                <h2>VALIDAÇÃO DOCUMENTAL</h2>
                <p>Analisamos, validamos e compilamos os documentos.</p>
              </div>
            </div>
            <div className={styles.rightbottom}>
              <div className={styles.image}>
                <img src="UploadIcon.svg" alt="" />
              </div>
              <div className={styles.text}>
                <h2>CONFIRMAÇÃO E FINALIZAÇÃO</h2>
                <p>Recebemos a confirmação da indicação em até 48 horas.</p>
              </div>
            </div>
            <div className={styles.leftbottom}>
              <div className={styles.image}>
                <img src="AssinaturaIcon.svg" alt="" />
              </div>
              <div className={styles.text}>
                <h2>PROCESSO DE ASSINATURA DIGITAL</h2>
                <p>Enviamos os documentos para assinatura digital.</p>
              </div>
            </div>
            <div className={styles.rightbottom}>
              <div className={styles.image}>
                <img src="LupaIcon.svg" alt="" />
              </div>
              <div className={styles.text}>
                <h2>ANÁLISE DE RECUSA</h2>
                <p>
                  Se necessário, analisamos e orientamos nossos clientes sobre
                  as alterações necessárias para reenvio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
