import Link from 'next/link';
import styles from './styles.module.scss';

export default function AssistServices() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h1>VANTAGENS</h1>
          </div>
          <div className={styles.middlecontent}>
            <div className={styles.lefttop}>
              <div className={styles.image}>
                <img src="PCIconW.svg" alt="" />
              </div>
              <div className={styles.text}>
                <h2>Plataforma Completa</h2>
                <p>
                  Rastreie e monitore todos os veículos da sua frota em um único
                  local, acessível tanto via web quanto por dispositivos móveis.
                </p>
              </div>
            </div>
            <div className={styles.righttop}>
              <div className={styles.image}>
                <img src="MapIconW.svg" alt="" />
              </div>
              <div className={styles.text}>
                <h2>Mapas Customizáveis</h2>
                <p>
                  Mapas legalizados e customizáveis, com tratamento de eventos e
                  sinistros.
                </p>
              </div>
            </div>
            <div className={styles.leftbottom}>
              <div className={styles.image}>
                <img src="PersonDocumentW.svg" alt="" />
              </div>
              <div className={styles.text}>
                <h2>Perfis e Usuários</h2>
                <p>
                  Controle total de perfis de usuários cadastrados, podendo
                  visualizar e gerenciar permissões
                </p>
              </div>
            </div>
            <div className={styles.rightbottom}>
              <div className={styles.image}>
                <img src="DashboardIconW.svg" alt="" />
              </div>
              <div className={styles.text}>
                <h2>Dashboards e Relatórios Detalhados</h2>
                <p>
                  Dashboard interativo e relatórios detalhados, desenvolvidos
                  para gestão do negócio, contendo diagnósticos de toda a frota.
                </p>
              </div>
            </div>
          </div>
          <Link href={'/contato'}>
            <div className={styles.button}>
              <button>Fale conosco</button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
