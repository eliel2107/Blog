import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { createClient } from 'contentful';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import DestaquesNew from '@/components/DestaquesNew';
import { useState } from 'react';
import { toast } from 'react-toastify';
import styles from '../styles/Id.module.scss';

const contentfulClient = createClient({
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
});

interface BlogPostProps {
  post: any;
}

export default function BlogPost({ post }: BlogPostProps) {
  const [email, setEmail] = useState('');
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const handleSubmitInscricao = async (event: {
    preventDefault: () => void;
  }) => {
    event.preventDefault();

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
        toast.success('Inscrição realizada com sucesso!', {
          position: 'top-right',
          autoClose: 5000,
        });
        console.log('Inscrição realizada com sucesso');
      } else {
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

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const day = date.getDate();
    const year = date.getFullYear();

    const months = [
      'janeiro',
      'fevereiro',
      'março',
      'abril',
      'maio',
      'junho',
      'julho',
      'agosto',
      'setembro',
      'outubro',
      'novembro',
      'dezembro',
    ];
    const month = months[date.getMonth()];

    return `Publicado ${day} de ${month} de ${year}`;
  }

  const paragraphs = post.fields.body.content.map((content: any) => {
    return content.content[0].value;
  });

  return (
    <>
      <Header />
      <section className={styles.container}>
        <div className={styles.container}>
          <div className={styles.content}></div>
        </div>
        <div className={styles.blogPart}>
          <p className={styles.date}>{formatDate(post.fields.date)}</p>
          <h1>{post.fields.title}</h1>
          <div className={styles.blogImage}>
            <img src={post.fields.thumb.fields.file.url} alt="" />
          </div>
          {paragraphs.map((paragraph: string, index: number) => (
            <p className={styles.bodyPost} key={index}>
              {paragraph}
            </p>
          ))}
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
        <DestaquesNew />
      </section>
      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await contentfulClient.getEntries({
    content_type: 'blog',
  });

  const paths = response.items.map((post: any) => ({
    params: { id: post.sys.id },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;

  if (!id) {
    return {
      notFound: true,
    };
  }

  const post = await contentfulClient.getEntry(id);

  return {
    props: {
      post,
    },
    revalidate: 1,
  };
};
