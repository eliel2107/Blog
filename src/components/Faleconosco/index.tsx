import React, { useRef } from 'react';
import styles from './styles.module.scss';

export default function Faleconosco() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAttachmentButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    console.log('Selected File:', selectedFile);
    // You can handle the selected file as needed, e.g., upload it to a server.
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftside}>
            <img src="CONTATO.jpg" alt="" />
          </div>
          <div className={styles.rightside}>
            <div className={styles.title}>
              <h1>Fale conosco</h1>
            </div>
            <div className={styles.formblock}>
              <form>
                <div className={styles.flexInputdp}>
                  <div>
                    <p>Seu nome</p>
                    <input placeholder="Nome completo" type="name" />
                  </div>
                  <div>
                    <p>Email</p>
                    <input placeholder="Email" type="email" />
                  </div>
                </div>
                <div className={styles.flexInput}>
                  <p>Empresa</p>
                  <input placeholder="Nome da empresa" type="phone" />
                </div>
                <div className={styles.flexInputb}>
                  <p>Mensagem</p>
                  <input placeholder="Nos conte mais..." type="email" />
                </div>
                <div className={styles.anexo}>
                  <button
                    className={styles.attachmentButton}
                    onClick={handleAttachmentButtonClick}
                  >
                    Anexar currículo
                  </button>
                  {/* Hidden file input */}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf, .doc, .docx"
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                  />
                  <button className={styles.sendButton}>Enviar</button>
                </div>
                <div className={styles.button}>
                  <button type="submit">
                    Enviar <img src="ArrowRightw.svg" alt="" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
