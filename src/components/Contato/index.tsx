import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'react-toastify';
import styles from './styles.module.scss';

export default function Contato() {
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleSubmitBackground = async (event: {
        preventDefault: () => void;
    }) => {
        event.preventDefault();

        // Crie um objeto com os dados do formulário do background
        const formDataBackground = {
            nome,
            telefone,
            mensagem,
            email,
        };

        try {
            const response = await fetch('/api/SendBackgroundForm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formDataBackground),
            });

            if (response.ok) {
                // Envio bem-sucedido
                toast.success('Mensagem enviada com sucesso!', {
                    position: 'top-right',
                    autoClose: 5000,
                });
                console.log('Mensagem enviada com sucesso');
            } else {
                // Erro no envio
                toast.error('Erro ao enviar a mensagem.', {
                    position: 'top-right',
                    autoClose: 5000,
                });
                console.error('Erro ao enviar a mensagem');
            }
        } catch (error) {
            console.error('Erro ao enviar a mensagem:', error);
        }
    };

    const handleSubmitInscricao = async (event: {
        preventDefault: () => void;
    }) => {
        event.preventDefault();

        // Crie um objeto com os dados do formulário de inscrição de email
        const formDataInscricao = {
            email,
        };

        try {
            const response = await fetch('/api/SendInscricao', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formDataInscricao),
            });

            if (response.ok) {
                // Envio bem-sucedido
                toast.success('Inscrição realizada com sucesso!', {
                    position: 'top-right',
                    autoClose: 5000,
                });
                console.log('Inscrição realizada com sucesso');
            } else {
                // Erro no envio
                toast.error('Erro ao realizar a inscrição.', {
                    position: 'top-right',
                    autoClose: 5000,
                });
                console.error('Erro ao realizar a inscrição');
            }
        } catch (error) {
            console.error('Erro ao realizar a inscrição:', error);
        }
    };

    return (
        <>
            <section className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.leftside}>
                        <div className={styles.textcontent}>
                            <div className={styles.title}>
                                <h1>CONTATO</h1>
                                <p>
                                    Fale com a gente! Um especialista LW está
                                    sempre à disposição.
                                </p>
                            </div>
                            <div className={styles.icon}>
                                <div className={styles.addres}>
                                    <div className={styles.map}>
                                        <img
                                            src="https://d10fqir6n4h7sq.cloudfront.net/public/map.svg"
                                            alt=""
                                        />
                                    </div>{' '}
                                    <div className={styles.location}>
                                        <Link
                                            href={
                                                'https://maps.app.goo.gl/kUJqwdEun6XpRDg86'
                                            }
                                        >
                                            <h1>Endereço</h1>{' '}
                                            <p>
                                                R. XV de Novembro, 621 2º andar
                                                Centro, Curitiba PR, 80020-310
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                                <div className={styles.email}>
                                    <div className={styles.lettter}>
                                        <img
                                            src="https://d10fqir6n4h7sq.cloudfront.net/public/letter.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div className={styles.contatos}>
                                        <h1>Nossos contatos</h1>
                                        <Link href="mailto:comercial@lwtecnologia.com.br">
                                            <p>comercial@lwtecnologia.com.br</p>{' '}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.rightside}>
                        <div className={styles.backgroundContainer}>
                            <div className={styles.background}>
                                <div className={styles.title}>
                                    <h2>Entre em contato conosco</h2>
                                </div>
                                <div className={styles.name}>
                                    <h3>Nome completo</h3>
                                    <input
                                        type="text"
                                        placeholder="Escreva aqui seu nome..."
                                        value={nome}
                                        onChange={(e) =>
                                            setNome(e.target.value)
                                        }
                                    />
                                </div>
                                <div className={styles.contactemail}>
                                    <h3>Email*</h3>
                                    <input
                                        type="text"
                                        placeholder="exemplo@mail.com"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                </div>
                                <div className={styles.phone}>
                                    <h3>Telefone*</h3>
                                    <input
                                        type="text"
                                        placeholder="61 99999-9999"
                                        value={telefone}
                                        onChange={(e) =>
                                            setTelefone(e.target.value)
                                        }
                                    />
                                </div>
                                <div className={styles.message}>
                                    <h3>Mensagem*</h3>{' '}
                                    <input
                                        type="text"
                                        placeholder="Nos conte um pouco sobre sua demanda..."
                                        value={mensagem}
                                        onChange={(e) =>
                                            setMensagem(e.target.value)
                                        }
                                    />
                                </div>
                                <div className={styles.send}>
                                    <button onClick={handleSubmitBackground}>
                                        Enviar
                                    </button>
                                </div>
                            </div>
                            <div className={styles.newBackground}>
                                {/* Additional content for the new background */}
                                {/* ... */}
                            </div>
                        </div>
                        <div className={styles.iconresponsive}>
                            <div className={styles.addres}>
                                <div className={styles.map}>
                                    <img
                                        src="https://d10fqir6n4h7sq.cloudfront.net/public/map.svg"
                                        alt=""
                                    />
                                </div>{' '}
                                <div className={styles.location}>
                                    <Link
                                        href={
                                            'https://maps.app.goo.gl/kUJqwdEun6XpRDg86'
                                        }
                                    >
                                        <h1>Endereço</h1>{' '}
                                        <p>
                                            R. XV de Novembro, 621 2º andar
                                            Centro, Curitiba PR, 80020-310
                                        </p>
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.email}>
                                <div className={styles.lettter}>
                                    <img
                                        src="https://d10fqir6n4h7sq.cloudfront.net/public/letter.svg"
                                        alt=""
                                    />
                                </div>
                                <div className={styles.contatos}>
                                    <h1>Nossos contatos</h1>
                                    <Link href="mailto:comercial@lwtecnologia.com.br">
                                        <p>comercial@lwtecnologia.com.br</p>{' '}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.bottomcontent}>
                    <div className={styles.leftside}>
                        <h1>FIQUE POR DENTRO DAS NOVIDADES</h1>
                    </div>
                    <div className={styles.rightsidebottom}>
                        <form onSubmit={handleSubmitInscricao}>
                            <div className={styles.inputcontainer}>
                                <input
                                    type="text"
                                    placeholder="Digite seu email aqui"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <button type="submit">Inscrever</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
