import { createClient } from "contentful";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import styles from "./styles.module.scss";
import Destaques from "@/components/Destaques";
import DestaquesNew from "@/components/DestaquesNew";

const contentfulClient = createClient({
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
});

interface BlogPostProps {
  post: any;
}

export default function BlogPost({ post }: BlogPostProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // Helper function to format the date
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

  // Get all paragraphs from the Contentful content
  const paragraphs = post.fields.body.content.map((content: any) => {
    return content.content[0].value;
  });

  return (
    <section className={styles.container}>
      <Header />
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
      <DestaquesNew />
      <Footer />
    </section>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await contentfulClient.getEntries({ content_type: "blog" });

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
