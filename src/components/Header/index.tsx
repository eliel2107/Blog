import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import ProdutosResponsive from '../ProdutosResponsive';
import styles from './styles.module.scss';
import AreaResponsive from '../AreaResponsive';

export default function Header() {
  const router = useRouter();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isClienteDropdownOpen, setIsClienteDropdownOpen] = useState(false);

  const isActive = (route: string) => {
    return route === router.pathname
      ? `${styles.menulink} ${styles.active}`
      : styles.menulink;
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleLinkClick = () => {
    setDrawerOpen(false);
    setIsDropdownOpen(false);
    setIsClienteDropdownOpen(false);
  };

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleClienteDropdownClick = () => {
    setIsClienteDropdownOpen(!isClienteDropdownOpen);
  };

  const produtosDropdown = [
    {
      url: '/assist',

      name: 'LW Assist',
      description: 'Sua frota com mais segurança e suporte aos condutores',
      image: '/SecurityCar.svg',
    },
    {
      url: '/debitos',
      name: 'LW Débitos',
      description:
        'Elimine planilhas e processos manuais no pagamento dos débitos da sua frota de veículos.',
      image: '/MoneyIcon.svg',
    },
    {
      url: '/doc',
      name: 'LW Doc',
      description: 'Simplifique sua gestão documental através da tecnologia.',
      image: '/DocIcon.svg',
    },
    {
      url: '/cnh',
      name: 'Consulta de CNH',
      description:
        'Acompanhe a pontuação dos seus condutores de forma facilitada.',
      image: '/CNHIcon.svg',
    },
    {
      url: '/digitalizacao',
      name: 'Digitalização',
      description: 'Otimize seus processos e ganhe tempo.',
      image: '/RadarIcon.svg',
    },
    {
      url: '/sim',
      name: 'LW SIM',
      description: 'Controle sua frota com tecnologia de alta performance.',
      image: '/PhoneIcon.svg',
    },
    {
      url: '/vendas',
      name: 'Pré-Venda',
      description:
        'Tenha as informações necessárias para uma negociação rápida e sem complicações.',
      image: '/MoneyIcon.svg',
    },
    {
      url: '/multas',
      name: 'LW Multas',
      description:
        'Sua gestão de multas mais eficiente, ágil e segura para diversos tamanhos de frotas.',
      image: '/DangerIcon.svg',
    },
    {
      url: '/antt',
      name: 'Multas ANTT',
      description:
        'Gerencie suas infrações e evite complicações operacionais e financeiras.',
      image: '/LicencimentoIcon2.svg',
    },
    {
      url: '/indicacao',
      name: 'Indicação Digital',
      description:
        'A indicação dos seus condutores de forma rápida e sustentável.',
      image: '/AssinaturaIcon.svg',
    },
  ];
  const clienteDropdown = [
    {
      url: 'https://admin.onemonitora.com.br/',
      name: 'LW SIM (One)',
      description: 'Clique para acessar o portal.',
      image: '/PhoneIcon.svg',
    },
    {
      url: 'https://www.sistemamultas.com.br/app',
      name: 'LW Multas',
      description: 'Clique para acessar o portal.',
      image: '/DangerIcon.svg',
    },
    {
      url: 'https://documentacao.lwtecnologia.com.br/',
      name: 'LW Doc',
      description: 'Clique para acessar o portal.',
      image: '/DocIcon.svg',
    },
    {
      url: 'https://debitos.lwtecnologia.com.br/',
      name: 'LW Débitos',
      description: 'Clique para acessar o portal.',
      image: '/MoneyIcon.svg',
    },
    // Add more items as needed
  ];

  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftside}>
            <Link href={'/'}>
              <img src="/lwLOGO.svg" alt="Logo" />
            </Link>
          </div>

          <div className={styles.rightSide}>
            <ul>
              <Link href={'/sobre'}>
                <li className={isActive('/sobre')}>Quem somos</li>
              </Link>

              <li
                className={`${isActive('/solucoes')} ${styles.dropdown} ${
                  isDropdownOpen ? styles.open : ''
                }`}
                onClick={handleDropdownClick}
              >
                Produtos{' '}
                <img
                  src="ArrowHeader.svg"
                  alt=""
                  className={`${
                    isDropdownOpen ? styles.rotate : styles.rotateBack
                  }`}
                />
                {isDropdownOpen && (
                  <ul className={styles.dropdownContent}>
                    <div className={styles.flex}>
                      {produtosDropdown.map((item) => (
                        <li key={item.url} onClick={handleLinkClick}>
                          <div className={styles.leftIcon}>
                            <img src={item.image} alt={`${item.name} Icon`} />
                          </div>
                          <Link href={item.url}>
                            <div className={styles.textContent}>
                              <span className={styles.name}>{item.name}</span>
                              <span className={styles.description}>
                                {item.description}
                              </span>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </div>
                  </ul>
                )}
              </li>

              <Link href={'/contato'}>
                <li className={isActive('/contato')}>Contato</li>
              </Link>
              <Link href={'/#Destaques'}>
                <li className={isActive('/#Destaques')}>Blog</li>
              </Link>
              <Link href={'/trabalhe'}>
                <li className={isActive('/trabalhe')}>Trabalhe conosco</li>
              </Link>
              <li>|</li>

              <li
                className={`${isActive('/login')} ${styles.dropdown} ${
                  isClienteDropdownOpen ? styles.open : ''
                }`}
                onClick={handleClienteDropdownClick} // Toggle dropdown on click
              >
                Área do cliente
                <img
                  src="ArrowHeader.svg" // Reuse the same arrow image
                  alt=""
                  className={`${
                    isClienteDropdownOpen ? styles.rotate : styles.rotateBack
                  }`}
                />
                {isClienteDropdownOpen && (
                  <ul className={styles.dropdownContentArea}>
                    {clienteDropdown.map((item) => (
                      <li key={item.url} onClick={handleLinkClick}>
                        <div className={styles.leftIcon}>
                          <img src={item.image} alt={`${item.name} Icon`} />
                        </div>
                        <Link rel="noreferrer" href={item.url}>
                          <div className={styles.textContent}>
                            <span className={styles.name}>{item.name}</span>
                            <span className={styles.description}>
                              {item.description}
                            </span>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </div>
          <div className={styles.hamburger} onClick={toggleDrawer}>
            <img src="List.svg" alt="Hamburger Icon" />
          </div>
        </div>
      </section>
      <div className={`${styles.drawer} ${drawerOpen ? styles.open : ''}`}>
        <div className={styles.contentDrawer}>
          <div className={styles.topContentDrawer}>
            <img className={styles.logo} src="/LOGOLW.svg" alt="Logo" />
            <img
              className={styles.close}
              src="/close.svg"
              alt="Close Icon"
              onClick={toggleDrawer}
            />
          </div>
          <div className={styles.middleContentDrawer}>
            <ul>
              <Link href={`/`}>
                <li onClick={handleLinkClick}>Início</li>
              </Link>

              <Link href="/sobre">
                <li onClick={handleLinkClick}>Quem Somos</li>
              </Link>

              <ProdutosResponsive />
              <Link href="/contato">
                <li onClick={handleLinkClick}>Contato</li>
              </Link>
              <Link href="/#Destaques">
                <li className={isActive('/#Destaques')}>Blog</li>
              </Link>
              <Link href="/trabalhe">
                <li onClick={handleLinkClick}>Trabalhe Conosco</li>
              </Link>
              <div className={styles.divisor}></div>
              <AreaResponsive />
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`${styles.overlay} ${drawerOpen ? styles.visible : ''}`}
        onClick={toggleDrawer}
      ></div>
    </>
  );
}
