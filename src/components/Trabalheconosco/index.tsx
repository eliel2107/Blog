import Link from "next/link";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./styles.module.scss";
import { useLoading } from "@/context/LoadingContext";

export default function Trabalheconosco() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>("");
  const { setLoading } = useLoading();
  const handleAttachmentButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    console.log("Selected File:", selectedFile);

    const allowedExtensions = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (selectedFile) {
      if (!allowedExtensions.includes(selectedFile.type)) {
        toast.error(
          "Formato de arquivo não suportado. Por favor, anexe um arquivo .pdf, .doc ou .docx.",
          {
            position: "top-right",
            autoClose: 5000,
          }
        );
        return;
      }
      setFileName(selectedFile.name);
    }
  };

  const verificaCurriculo = () => {
    if (!fileName) {
      toast.error("Por favor, anexe o curriculo.", {
        position: "top-right",
        autoClose: 5000,
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (event: {
    preventDefault: () => void;
    currentTarget: HTMLFormElement | undefined;
  }) => {
    event.preventDefault();
    if (!verificaCurriculo()) return;
    const formData = new FormData(event.currentTarget);

    try {
      setLoading(true); // Ativar a tela de loading
      const response = await fetch("/api/sendEmailRH", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("Currículo enviado com sucesso!", {
          position: "top-right",
          autoClose: 5000,
        });
        console.log("Currículo enviado com sucesso");
      } else {
        toast.error("Erro ao enviar o currículo.", {
          position: "top-right",
          autoClose: 5000,
        });
        console.error("Erro ao enviar o currículo");
      }
    } catch (error) {
      toast.error("Erro ao enviar o currículo.", {
        position: "top-right",
        autoClose: 5000,
      });
      console.error("Erro ao enviar o currículo:", error);
    } finally {
      setLoading(false); // Desativar a tela de loading
    }
  };

  return (
    <>
      <div className={styles.container} id="trabalhe">
        <div className={styles.content}>
          <div className={styles.leftside}>
            <img
              src="https://d10fqir6n4h7sq.cloudfront.net/public/fotos/Escritorio1.JPG"
              alt=""
            />
          </div>
          <div className={styles.rightside}>
            <div className={styles.title}>
              <h1>Trabalhe conosco</h1>
              <p>
                Preencha o formulário abaixo e você fará parte do nosso banco de
                talentos e terá preferência no contato ao surgir novas vagas.
              </p>
            </div>
            <div className={styles.formblock}>
              <form onSubmit={handleSubmit}>
                <div className={styles.linkedin}>
                  <button>
                    <Link
                      rel="noreferrer"
                      href="https://www.linkedin.com/company/lwtecnologia/"
                    >
                      Enviar currículo pelo Linkedin{" "}
                    </Link>
                  </button>
                </div>

                <div className={styles.flexInput}>
                  <p>Telefone</p>
                  <input
                    placeholder="Seu telefone"
                    type="phone"
                    name="telefone"
                  />
                </div>
                <div className={styles.flexInput}>
                  <div className={styles.anexo}>
                    <button
                      type="button"
                      className={styles.attachmentButton}
                      onClick={handleAttachmentButtonClick}
                    >
                      {fileName || "Anexar currículo"}
                    </button>

                    <input
                      ref={fileInputRef}
                      type="file"
                      name="curriculo"
                      accept=".pdf,.doc,.docx"
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                    />
                    <button className={styles.sendButton}>Enviar</button>
                  </div>
                </div>
                <div className={styles.button}>
                  <button type="submit">
                    Enviar
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
