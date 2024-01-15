import Link from 'next/link';
import styles from './styles.module.scss';

export default function Footer() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.topcontent}>
            <div className={styles.pages}>
              <ul>
                <Link href={'/'}>
                  <li>Home</li>
                </Link>
                <Link href={'/sobre'}>
                  <li>Quem somos</li>
                </Link>

                <Link href={'/blog'}>
                  <li>Blog</li>
                </Link>
                <Link href={'/contato'}>
                  <li>Contato</li>
                </Link>
                <Link href={'/trabalhe'}>
                  <li>Trabalhe conosco</li>
                </Link>
              </ul>
            </div>
            <div className={styles.social}>
              <Link
                rel="noreferrer"
                href="https://www.facebook.com/lwtecnologia?mibextid=ZbWKwL"
              >
                <img src="facebook-lw.svg" alt="" />
              </Link>
              <Link
                rel="noreferrer"
                href="https://www.instagram.com/lwtecnologia?igsh=MWRka2Z2dXBpdjFkYw=="
              >
                <img src="InstagramFooter.svg" alt="" />
              </Link>
              <Link
                rel="noreferrer"
                href="https://www.linkedin.com/company/lwtecnologia/"
              >
                <img src="/LinkedinFooter.svg" alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.bottomcontent}>
          <p>© 2023 LW Tecnologia. Todos os direitos reservados</p>
          <div className={styles.middle}>
            <img src="logofooter.svg" alt="" />
          </div>
          <ul>
            <Link href={'/termos'}>
              <li>Termos de serviço</li>
            </Link>
            <Link href={'/privacidade'}>
              <li>Políticas de privacidade</li>
            </Link>
          </ul>
        </div>
        <div className={styles.info}>
          <p>LW TECNOLOGIA LTDA</p>

          <p>CNPJ: 25.462.472/0001-97</p>

          <p>Email: contato@lwtecnologia.com</p>
          <p>
            Endereço: R. XV de Novembro, 621 2º andar Centro, Curitiba PR,
            80020-310
          </p>
        </div>
      </section>
      <section className={styles.containerresponsive}>
        <div className={styles.contentresponsive}>
          <div className={styles.topcontentresponsive}>
            <img src="logofooter.svg" alt="" />
            <div className={styles.pagesresponsive}>
              <ul>
                <Link href={'/'}>
                  <li>Home</li>
                </Link>
                <Link href={'/sobre'}>
                  <li>Quem somos</li>
                </Link>
                <Link href={'/solucoes'}>
                  <li>produtos</li>
                </Link>
                <Link href={'/blog'}>
                  <li>Blog</li>
                </Link>
                <Link href={'/contato'}>
                  <li>Contato</li>
                </Link>
                <Link href={'/trabalhe'}>
                  <li>Trabalhe conosco</li>
                </Link>
              </ul>
            </div>
            <div className={styles.divisor}></div>
            <div className={styles.politicasresponsive}>
              <ul>
                <Link href={'/termos'}>
                  <li>Termos de serviço</li>
                </Link>
                <Link href={'/privacidade'}>
                  {' '}
                  <li>Políticas de privacidade</li>
                </Link>
              </ul>
            </div>
            <div className={styles.socialresponsive}>
              <Link
                rel="noreferrer"
                href="https://www.facebook.com/lwtecnologia?mibextid=ZbWKwL"
              >
                <img src="facebook-lw.svg" alt="" />
              </Link>
              <Link
                rel="noreferrer"
                href="https://www.instagram.com/lwtecnologia?igsh=MWRka2Z2dXBpdjFkYw=="
              >
                <img src="InstagramFooter.svg" alt="" />
              </Link>
              <Link
                rel="noreferrer"
                href="https://www.linkedin.com/company/lwtecnologia/"
              >
                <img src="/LinkedinFooter.svg" alt="" />
              </Link>
            </div>
            <div>
              <p>© 2023 LW Tecnologia. Todos os direitos reservados</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
