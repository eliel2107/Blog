import Link from 'next/link';
import styles from './styles.module.scss';
import SimpleSlider from '../Slider';
export default function Destaquesblog() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.top}>
            <h1>Destaques</h1>
            <div className={styles.rightop}>
              <p>Recentes</p> <img src="CaretDown.svg" alt="" />
            </div>
          </div>
          <SimpleSlider />
          <div className={styles.middle}>
            <div className={styles.l}>
              <Link href="/post">
                <div className={styles.image}>
                  <button>Evento</button>
                </div>
                <div className={styles.text}>
                  <h1>Integer Maecenas Eget Viverra</h1>
                  <div className={styles.day}>
                    <div className={styles.divisor}></div>
                    <div className={styles.date}>
                      <p>11 de novembro, 2023</p>
                    </div>
                    <div className={styles.time}>
                      <p>3 min leitura</p>
                    </div>
                  </div>
                  <p>
                    Aenean eleifend ante maecenas pulvinar montes lorem et pede
                    dis dolor pretium donec dictum. Vici consequat justo enim.
                    Venenatis eget adipiscing luctus loremVici consequat justo
                    enim. Venenatis eget adipiscing luctus lorem.
                  </p>
                  <div className={styles.link}>
                    <p>Ver post</p>
                  </div>
                </div>
              </Link>
            </div>{' '}
            <div className={styles.l}>
              <Link href="/post">
                <div className={styles.image}>
                  <button>Evento</button>
                </div>
                <div className={styles.text}>
                  <h1>Integer Maecenas Eget Viverra</h1>
                  <div className={styles.day}>
                    <div className={styles.divisor}></div>
                    <div className={styles.date}>
                      <p>11 de novembro, 2023</p>
                    </div>
                    <div className={styles.time}>
                      <p>3 min leitura</p>
                    </div>
                  </div>
                  <p>
                    Aenean eleifend ante maecenas pulvinar montes lorem et pede
                    dis dolor pretium donec dictum. Vici consequat justo enim.
                    Venenatis eget adipiscing luctus loremVici consequat justo
                    enim. Venenatis eget adipiscing luctus lorem.
                  </p>
                  <div className={styles.link}>
                    <p>Ver post</p>
                  </div>
                </div>
              </Link>
            </div>{' '}
            <div className={styles.l}>
              <Link href="/post">
                <div className={styles.image}>
                  <button>Evento</button>
                </div>
                <div className={styles.text}>
                  <h1>Integer Maecenas Eget Viverra</h1>
                  <div className={styles.day}>
                    <div className={styles.divisor}></div>
                    <div className={styles.date}>
                      <p>11 de novembro, 2023</p>
                    </div>
                    <div className={styles.time}>
                      <p>3 min leitura</p>
                    </div>
                  </div>
                  <p>
                    Aenean eleifend ante maecenas pulvinar montes lorem et pede
                    dis dolor pretium donec dictum. Vici consequat justo enim.
                    Venenatis eget adipiscing luctus loremVici consequat justo
                    enim. Venenatis eget adipiscing luctus lorem.
                  </p>
                  <div className={styles.link}>
                    <p>Ver post</p>
                  </div>
                </div>
              </Link>
            </div>{' '}
          </div>

          <div className={styles.bottom}>
            {' '}
            <div className={styles.leftside}>
              <h1>FIQUE POR DENTRO DAS NOVIDADES</h1>
            </div>
            <div className={styles.rightsidebottom}>
              <div className={styles.inputcontainer}>
                <input type="text" placeholder="Digite seu email aqui" />
                <button>Me inscrever</button>
              </div>
            </div>
          </div>
          <div className={styles.top}>
            <h1>Últimas Postagens</h1>
          </div>
          <SimpleSlider />
          <SimpleSlider />
          <div className={styles.middle}>
            <div className={styles.l}>
              <Link href="/post">
                <div className={styles.image}>
                  <button>Evento</button>
                </div>
                <div className={styles.text}>
                  <h1>Integer Maecenas Eget Viverra</h1>
                  <div className={styles.day}>
                    <div className={styles.divisor}></div>
                    <div className={styles.date}>
                      <p>11 de novembro, 2023</p>
                    </div>
                    <div className={styles.time}>
                      <p>3 min leitura</p>
                    </div>
                  </div>
                  <p>
                    Aenean eleifend ante maecenas pulvinar montes lorem et pede
                    dis dolor pretium donec dictum. Vici consequat justo enim.
                    Venenatis eget adipiscing luctus loremVici consequat justo
                    enim. Venenatis eget adipiscing luctus lorem.
                  </p>
                  <div className={styles.link}>
                    <p>Ver post</p>
                  </div>
                </div>
              </Link>
            </div>{' '}
            <div className={styles.l}>
              <Link href="/post">
                <div className={styles.image}>
                  <button>Evento</button>
                </div>
                <div className={styles.text}>
                  <h1>Integer Maecenas Eget Viverra</h1>
                  <div className={styles.day}>
                    <div className={styles.divisor}></div>
                    <div className={styles.date}>
                      <p>11 de novembro, 2023</p>
                    </div>
                    <div className={styles.time}>
                      <p>3 min leitura</p>
                    </div>
                  </div>
                  <p>
                    Aenean eleifend ante maecenas pulvinar montes lorem et pede
                    dis dolor pretium donec dictum. Vici consequat justo enim.
                    Venenatis eget adipiscing luctus loremVici consequat justo
                    enim. Venenatis eget adipiscing luctus lorem.
                  </p>
                  <div className={styles.link}>
                    <p>Ver post</p>
                  </div>
                </div>
              </Link>
            </div>{' '}
            <div className={styles.l}>
              <Link href="/post">
                <div className={styles.image}>
                  <button>Evento</button>
                </div>
                <div className={styles.text}>
                  <h1>Integer Maecenas Eget Viverra</h1>
                  <div className={styles.day}>
                    <div className={styles.divisor}></div>
                    <div className={styles.date}>
                      <p>11 de novembro, 2023</p>
                    </div>
                    <div className={styles.time}>
                      <p>3 min leitura</p>
                    </div>
                  </div>
                  <p>
                    Aenean eleifend ante maecenas pulvinar montes lorem et pede
                    dis dolor pretium donec dictum. Vici consequat justo enim.
                    Venenatis eget adipiscing luctus loremVici consequat justo
                    enim. Venenatis eget adipiscing luctus lorem.
                  </p>
                  <div className={styles.link}>
                    <p>Ver post</p>
                  </div>
                </div>
              </Link>
            </div>{' '}
          </div>
          <div className={styles.middle1}>
            <div className={styles.l}>
              <div className={styles.image}>
                <button>Evento</button>
              </div>
              <div className={styles.text}>
                <h1>Integer Maecenas Eget Viverra</h1>
                <div className={styles.day}>
                  <div className={styles.divisor}></div>
                  <div className={styles.date}>
                    <p>11 de novembro, 2023</p>
                  </div>
                  <div className={styles.time}>
                    <p>3 min leitura</p>
                  </div>
                </div>
                <p>
                  Aenean eleifend ante maecenas pulvinar montes lorem et pede
                  dis dolor pretium donec dictum. Vici consequat justo enim.
                  Venenatis eget adipiscing luctus loremVici consequat justo
                  enim. Venenatis eget adipiscing luctus lorem.
                </p>
                <div className={styles.link}>
                  <p>Ver post</p>
                </div>
              </div>
            </div>{' '}
            <div className={styles.l}>
              <Link href="/post">
                <div className={styles.image}>
                  <button>Evento</button>
                </div>
                <div className={styles.text}>
                  <h1>Integer Maecenas Eget Viverra</h1>
                  <div className={styles.day}>
                    <div className={styles.divisor}></div>
                    <div className={styles.date}>
                      <p>11 de novembro, 2023</p>
                    </div>
                    <div className={styles.time}>
                      <p>3 min leitura</p>
                    </div>
                  </div>
                  <p>
                    Aenean eleifend ante maecenas pulvinar montes lorem et pede
                    dis dolor pretium donec dictum. Vici consequat justo enim.
                    Venenatis eget adipiscing luctus loremVici consequat justo
                    enim. Venenatis eget adipiscing luctus lorem.
                  </p>
                  <div className={styles.link}>
                    <p>Ver post</p>
                  </div>
                </div>
              </Link>
            </div>{' '}
            <div className={styles.l}>
              <Link href="/post">
                <div className={styles.image}>
                  <button>Evento</button>
                </div>
                <div className={styles.text}>
                  <h1>Integer Maecenas Eget Viverra</h1>
                  <div className={styles.day}>
                    <div className={styles.divisor}></div>
                    <div className={styles.date}>
                      <p>11 de novembro, 2023</p>
                    </div>
                    <div className={styles.time}>
                      <p>3 min leitura</p>
                    </div>
                  </div>
                  <p>
                    Aenean eleifend ante maecenas pulvinar montes lorem et pede
                    dis dolor pretium donec dictum. Vici consequat justo enim.
                    Venenatis eget adipiscing luctus loremVici consequat justo
                    enim. Venenatis eget adipiscing luctus lorem.
                  </p>
                  <div className={styles.link}>
                    <p>Ver post</p>
                  </div>
                </div>
              </Link>
            </div>{' '}
          </div>
        </div>
      </section>
    </>
  );
}
function setActiveSlide(arg0: (prev: any) => number) {
  throw new Error('Function not implemented.');
}
