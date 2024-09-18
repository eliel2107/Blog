import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from "../styles/termos.module.scss";

export default function AppPolicy() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Política de Privacidade</h1>
          <div className={styles.content}>
            <p>Última atualização: 11 de setembro de 2024.</p>
            <h2>1. Introdução</h2>
            <p>
              Esta Política de Privacidade descreve como coletamos, usamos e
              compartilhamos suas informações ao utilizar o nosso aplicativo
              disponível na Google Play Store ou Apple Store operada pela LW
              Tecnologia Ltda. ("LW Tecnologia"), CNPJ: 44.383.200/0001-46. Ao
              utilizar nossos serviços, você concorda com esta política. Caso
              não concorde, a utilização dos nossos serviços deverá ser
              interrompida, e o DPO deverá ser notificado por meio do e-mail
              informado nessa política.
            </p>
            <h2>2. Informações que coletamos</h2>
            <h3>2.1. Informações Pessoais</h3>
            <p>
              Podemos coletar informações que você nos fornece diretamente, como
              nome, e-mail, número de telefone, endereço, CEP, dados de
              pagamento e outras informações de contato.
            </p>
            <h3>2.2. Informações Coletadas Automaticamente</h3>
            <p>
              Ao utilizar nossos serviços, podemos coletar automaticamente
              certas informações, como:
            </p>
            <ul>
              <li>
                Dados de uso (interações com o aplicativo ou a plataforma,
                preferências);
              </li>
              <li>
                Informações do dispositivo (tipo de dispositivo, sistema
                operacional, identificador único);
              </li>
              <li>Dados de localização, se permitido por você.</li>
            </ul>
            <h3>
              2.3. Informações Coletadas por Cookies e Tecnologias Semelhantes
            </h3>
            <p>
              Utilizamos cookies e tecnologias semelhantes para personalizar a
              experiência do usuário, autenticação, registro de produtos no
              carrinho e aprimorar nossos serviços. Cookies podem ser
              persistentes ou de sessão. Você pode gerenciar as configurações de
              cookies no seu navegador.
            </p>
            <h3>2.4. Fonte das Informações</h3>
            <p>
              Os dados do usuário são coletados através de formulários ou
              fornecidos através de integrações com outros sistemas contratados.
              As informações de fontes governamentais que coletamos são todas
              disponibilizadas para acesso geral do público. De forma geral, as
              informações coletadas são advindas dos Órgãos de Trânsito,
              Prefeituras e Secretarias relacionadas com as áreas de transportes
              e trânsito. A LW Tecnologia não possui qualquer ligação, vínculo
              ou poder de representação dos referidos órgãos.
            </p>
            <h2>3. Uso das Informações</h2>
            <p>
              Os dados são utilizados com a finalidade de realizar processos de
              indicação de condutor, onde o usuário reconhece de forma legal que
              estava dirigindo o veículo locado no momento da infração.
            </p>
            <h2>4. Compartilhamento de Informações</h2>
            <p>
              Não vendemos suas informações pessoais. Podemos compartilhar suas
              informações nas seguintes circunstâncias:
            </p>
            <ul>
              <li>
                Com fornecedores de serviços que ajudam a operar o aplicativo ou
                a plataforma;
              </li>
              <li>
                Para cumprir com obrigações legais, ordens judiciais ou
                processos legais;
              </li>
              <li>
                Para proteger nossos direitos, propriedade e segurança, bem como
                dos nossos usuários.
              </li>
            </ul>
            <h2>5. Segurança</h2>
            <p>
              Implementamos todas as medidas de segurança necessárias, como
              criptografia de dados sensíveis, para proteger suas informações
              contra acesso não autorizado, perda, alteração ou divulgação.
            </p>
            <h2>6. Retenção de Dados</h2>
            <p>
              Manteremos suas informações enquanto for necessário para cumprir
              as finalidades descritas nesta política. Em algumas
              circunstâncias, os dados podem ser mantidos por um período
              indeterminado, conforme exigido ou permitido por lei. Você pode
              solicitar a exclusão dos dados pelo e-mail de contato informado
              nessa política.
            </p>
            <h2>7. Seus Direitos</h2>
            <p>
              Dependendo da sua localização, você pode ter direitos sobre suas
              informações, como o direito de acessar, corrigir ou excluir seus
              dados pessoais. Para exercer esses direitos, entre em contato
              conosco.
            </p>
            <h2>8. Revogação de Consentimento</h2>
            <p>
              Após aceitar esta Política de Privacidade, você não poderá revogar
              o consentimento para o processamento dos dados enquanto utilizar
              nossos serviços. O consentimento poderá ser revogado ao solicitar
              a exclusão da conta e interrupção do uso.
            </p>
            <h2>9. Alterações nesta Política de Privacidade</h2>
            <p>
              Reservamo-nos o direito de atualizar esta Política de Privacidade
              periodicamente. Quaisquer alterações serão publicadas nesta página
              ou na plataforma e entrarão em vigor imediatamente após a
              publicação.
            </p>
            <h2>10. Obrigações do Usuário</h2>
            <p>Os usuários devem:</p>
            <ul>
              <li>
                Manter suas credenciais de acesso (e-mail ou telefone) e códigos
                OTP em segurança;
              </li>
              <li>
                Fornecer informações reais e atualizadas nos campos cadastrais
                da plataforma;
              </li>
              <li>
                Efetuar o pagamento integral dos produtos e taxas conforme
                solicitado.
              </li>
            </ul>
            <h2>11. Contato</h2>
            <p>
              Se você tiver dúvidas ou preocupações sobre esta Política de
              Privacidade, entre em contato conosco:
            </p>
            <p>
              <strong>Grupo LW</strong> <br />
              dpo@lwtecnologia.com.br
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
