import { useRef } from 'react';
import styles from './styles.module.scss';

export default function Trabalheconosco() {
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
            <img src="MapImage.svg" alt="" />
          </div>
          <div className={styles.rightside}>
            {' '}
            <div className={styles.title}>
              <h1>Trabalhe conosco</h1>
              <p>
                Preencha o formulário abaixo e você fará parte do nosso banco de
                talentos e terá preferência no contato ao surgir novas vagas.
              </p>
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
                  <p>Telefone</p>
                  <input placeholder="Seu telefone" type="phone" />
                </div>{' '}
                <div className={styles.flexInput}>
                  <p>Endereço</p>
                  <input placeholder="Endereço completo" type="email" />
                </div>{' '}
                <div className={styles.flexInput}>
                  <p>Escolaridade</p>
                  <input
                    placeholder="Qual seu nível de escolaridade"
                    type="email"
                  />
                </div>
                <div className={styles.flexInputb}>
                  <p>Formação academica</p>
                  <input
                    placeholder="Nos conte sobre sua formação academica"
                    type="email"
                  />
                </div>
                <div className={styles.flexInputb}>
                  <p>Experiências profissionais</p>
                  <input
                    placeholder="Nos conte um pouco sobre sua trajetória"
                    type="email"
                  />
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
