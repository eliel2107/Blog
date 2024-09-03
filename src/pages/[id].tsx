import DestaquesNew from "@/components/DestaquesNew";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { createClient } from "contentful";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import styles from "../styles/Id.module.scss";
import { useLoading } from "../context/LoadingContext";

const contentfulClient = createClient({
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
});

const options = {
  renderNode: {
    [INLINES.HYPERLINK]: (node: any, children: any) => (
      <a
        href={node.data.uri}
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontWeight: "bold" }}
      >
        {children}
      </a>
    ),
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
      <p className={styles.paragraph}>{children}</p>
    ),
    [BLOCKS.HEADING_1]: (node: any, children: any) => (
      <h1 className={styles.title}>{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node: any, children: any) => (
      <h2 className={styles.title}>{children}</h2>
    ),
    // Adicione outros blocos de título conforme necessário
  },
};
interface BlogPostProps {
  post: any;
}

export default function BlogPost({ post }: BlogPostProps) {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const { setLoading } = useLoading();

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
      setLoading(true); // Ativar a tela de loading

      const response = await fetch("/api/SendInscricao", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataInscricao),
      });

      if (response.ok) {
        toast.success("Inscrição realizada com sucesso!", {
          position: "top-right",
          autoClose: 5000,
        });
        console.log("Inscrição realizada com sucesso");
      } else {
        toast.error("Erro ao realizar a inscrição.", {
          position: "top-right",
          autoClose: 5000,
        });
        console.error("Erro ao realizar a inscrição");
      }
    } catch (error) {
      toast.error("Erro ao realizar a inscrição.", {
        position: "top-right",
        autoClose: 5000,
      });
      console.error("Erro ao realizar a inscrição:", error);
    } finally {
      setLoading(false); // Desativar a tela de loading
    }
  };

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const day = date.getDate();
    const year = date.getFullYear();

    const months = [
      "janeiro",
      "fevereiro",
      "março",
      "abril",
      "maio",
      "junho",
      "julho",
      "agosto",
      "setembro",
      "outubro",
      "novembro",
      "dezembro",
    ];
    const month = months[date.getMonth()];

    return `Publicado ${day} de ${month} de ${year}`;
  }

  const content = documentToReactComponents(post.fields.body, options);

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
          <div className={styles.bodyPost}>{content}</div>
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
    content_type: "blog",
  });

  const paths = response.items.map((post: any) => ({
    params: { id: post.sys.id },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;

  try {
    const post = await contentfulClient.getEntry(id);

    return {
      props: {
        post,
      },
      revalidate: 1,
    };
  } catch (error) {
    if ((error as any).sys?.id === "NotFound") {
      return {
        notFound: true,
      };
    }

    throw error;
  }
};
