import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import AreaResponsive from "../AreaResponsive";
import ProdutosResponsive from "../ProdutosResponsive";
import styles from "./styles.module.scss";

export default function Header() {
  const router = useRouter();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isClienteDropdownOpen, setIsClienteDropdownOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
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
    if (isClienteDropdownOpen) {
      setIsClienteDropdownOpen(false);
    }
  };

  const handleClienteDropdownClick = () => {
    setIsClienteDropdownOpen(!isClienteDropdownOpen);
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
    }
  };

  const produtosDropdown = [
    {
      url: "/debitos",
      name: "LW Débitos",
      description:
        "Elimine planilhas e processos manuais no pagamento dos débitos da sua frota de veículos.",
      image:
        "https://d10fqir6n4h7sq.cloudfront.net/public/NewIcons/DebitosIconNew.svg",
    },
    {
      url: "/doc",
      name: "LW Doc",
      description: "Simplifique sua gestão documental através da tecnologia.",
      image:
        "https://d10fqir6n4h7sq.cloudfront.net/public/NewIcons/DocIconNew.svg",
    },

    {
      url: "/sim",
      name: "LW SIM",
      description: "Controle sua frota com tecnologia de alta performance.",
      image:
        "https://d10fqir6n4h7sq.cloudfront.net/public/NewIcons/SimIconNew.svg",
    },

    {
      url: "/multas",
      name: "LW Multas",
      description:
        "Sua gestão de multas mais eficiente, ágil e segura para diversos tamanhos de frotas.",
      image:
        "https://d10fqir6n4h7sq.cloudfront.net/public/NewIcons/MultasIconNew.svg",
    },
    {
      url: "",

      name: "LW Auto (em breve)",
      description: "O jeito mais facil de comprar e vender seus veiculos",
      image: "/LogoAuto.svg",
    },
  ];
  const clienteDropdown = [
    {
      url: "/sobre",
      name: "A Empresa",
      description: "Saiba mais sobre a LW Tecnologia.",
      image: "https://d10fqir6n4h7sq.cloudfront.net/public/DocIcon.svg",
    },
    {
      url: "/nosso-time",
      name: "Nosso Time",
      description: "Conheça as pessoas que fazem a LW acontecer.",
      image: "https://d10fqir6n4h7sq.cloudfront.net/public/DocIcon.svg",
    },
  ];
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
        setIsClienteDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkElement = setInterval(() => {
        const targetElement = document.querySelector("#rd-section-luhazmn9");

        if (headerRef.current) {
          if (targetElement) {
            // Se o elemento existir, defina o top como 110px
            headerRef.current.style.setProperty("top", "110px", "important");
          } else {
            // Se o elemento não existir, defina o top como 0px
            headerRef.current.style.setProperty("top", "0px", "important");
          }
        }
      }, 1000); // Verifica a cada 1 segundo (1000ms)

      return () => clearInterval(checkElement); // Limpa o intervalo ao desmontar o componente
    }
  }, []);

  return (
    <>
      <section className={styles.container} ref={headerRef}>
        <div className={styles.content} ref={dropdownRef}>
          <div className={styles.leftside}>
            <Link href={"/"}>
              <img
                src="https://d10fqir6n4h7sq.cloudfront.net/public/LOGOPRINCIPAL.png"
                alt="Logo"
              />
            </Link>
          </div>

          <div className={styles.rightSide}>
            <ul>
              <Link href={"/"}>
                <li className={isActive("/")}>Home</li>
              </Link>

              <li
                className={`${isActive("/sobre")} ${styles.dropdown} ${
                  isClienteDropdownOpen ? styles.open : ""
                }`}
                onClick={handleClienteDropdownClick}
              >
                Quem somos{" "}
                <img
                  src="https://d10fqir6n4h7sq.cloudfront.net/public/ArrowHeader.svg"
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

              <li
                className={`${isActive("/solucoes")} ${styles.dropdown} ${
                  isDropdownOpen ? styles.open : ""
                }`}
                onClick={handleDropdownClick}
              >
                Produtos{" "}
                <img
                  src="https://d10fqir6n4h7sq.cloudfront.net/public/ArrowHeader.svg"
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

              <Link href={"/contato"}>
                <li className={isActive("/contato")}>Contato</li>
              </Link>
              <Link href={"/esg"}>
                <li className={isActive("/esg")}>Esg</li>
              </Link>
              <Link href={"/blog"}>
                <li className={isActive("/blog")}>LW NEWS</li>
              </Link>
              <Link href={"/trabalhe"}>
                <li className={isActive("/trabalhe")}>Trabalhe conosco</li>
              </Link>
              <li>|</li>
              <Link href={"/login"}>
                <li className={`${isActive("/login")} `}>Área do cliente</li>
              </Link>
            </ul>
          </div>
          <div className={styles.hamburger} onClick={toggleDrawer}>
            <img
              src="https://d10fqir6n4h7sq.cloudfront.net/public/List.svg"
              alt="Hamburger Icon"
            />
          </div>
        </div>
      </section>
      <div className={`${styles.drawer} ${drawerOpen ? styles.open : ""}`}>
        <div className={styles.contentDrawer}>
          <div className={styles.topContentDrawer}>
            <img
              className={styles.logo}
              src="https://d10fqir6n4h7sq.cloudfront.net/public/LOGOPRINCIPAL.png"
              alt="Logo"
            />
            <img
              className={styles.close}
              src="https://d10fqir6n4h7sq.cloudfront.net/public/close.svg"
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
              <Link href="/nosso-time">
                <li onClick={handleLinkClick}>Nosso Time</li>
              </Link>

              <ProdutosResponsive />
              <Link href="/contato">
                <li onClick={handleLinkClick}>Contato</li>
              </Link>
              <Link href="/esg">
                <li onClick={handleLinkClick}>Esg</li>
              </Link>
              <Link href="/blog">
                <li className={isActive("/blog")}>LW NEWS</li>
              </Link>
              <Link href="/trabalhe">
                <li onClick={handleLinkClick}>Trabalhe Conosco</li>
              </Link>
              <div className={styles.divisor}></div>
              {/* <AreaResponsive /> */}
              <Link href="/login">
                <li onClick={handleLinkClick}>Área do Cliente</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`${styles.overlay} ${drawerOpen ? styles.visible : ""}`}
        onClick={toggleDrawer}
      ></div>
    </>
  );
}
