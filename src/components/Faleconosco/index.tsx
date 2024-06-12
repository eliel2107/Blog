import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './styles.module.scss';

export default function Faleconosco() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [mensagem, setMensagem] = useState('');

  const verificaCamposContato = () => {
    if (!nome || !email || !empresa || !mensagem) {
      toast.error('Por favor, preencha todos os campos obrigatórios.', {
        position: 'top-right',
        autoClose: 5000,
      });
      return false;
    }
    return true;
  };

  const handleAttachmentButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    console.log('Selected File:', selectedFile);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!verificaCamposContato()) return;

    const formData = new FormData();
    formData.append('name', nome);
    formData.append('email', email);
    formData.append('company', empresa);
    formData.append('message', mensagem);

    try {
      const response = await fetch('/api/SendContactForm', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        toast.success('Mensagem enviado com sucesso', {
          position: 'top-right',
          autoClose: 5000,
        });
        console.log('Mensagem enviado com sucesso');
      } else {
        toast.error('Erro ao enviar o Mensagem', {
          position: 'top-right',
          autoClose: 5000,
        });
        console.error('Erro ao enviar o Mensagem');
      }
    } catch (error) {
      console.error('Erro ao enviar o Mensagem:', error);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftside}>
            <img
              src="https://d10fqir6n4h7sq.cloudfront.net/public/CONTATO.jpg"
              alt=""
            />
          </div>
          <div className={styles.rightside}>
            <div className={styles.title}>
              <h1>Fale conosco</h1>
            </div>
            <div className={styles.formblock}>
              <form onSubmit={handleSubmit}>
                <div className={styles.flexInputdp}>
                  <div>
                    <p>Seu nome</p>
                    <input
                      placeholder="Nome completo"
                      type="name"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                    />
                  </div>
                  <div>
                    <p>Email</p>
                    <input
                      placeholder="Email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className={styles.flexInput}>
                  <p>Empresa</p>
                  <input
                    placeholder="Nome da empresa"
                    type="text"
                    value={empresa}
                    onChange={(e) => setEmpresa(e.target.value)}
                  />
                </div>
                <div className={styles.flexInputb}>
                  <p>Mensagem</p>
                  <input
                    placeholder="Nos conte mais..."
                    type="text"
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
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
                  <button type="submit" className={styles.sendButton}>
                    Enviar
                  </button>
                </div>
                <div className={styles.button}>
                  <button type="submit">
                    Enviar{' '}
                    <img
                      src="https://d10fqir6n4h7sq.cloudfront.net/public/ArrowRightw.svg"
                      alt=""
                    />
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
