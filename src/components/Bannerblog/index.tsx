import { createClient } from "contentful";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

const contentfulClient = createClient({
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
});

export default function Bannerblog() {
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    async function fetchPosts() {
      const response = await contentfulClient.getEntries({
        content_type: "blog",
      });

      if (response.items.length > 0) {
        setPost(response.items[0]);
      }
    }
    fetchPosts();
  }, []);

  if (!post) return null;
  const sectionStyle = {
    backgroundImage: `url(${post.fields.thumb.fields.file.url})`,
  };

  return (
    <section className={styles.container} style={sectionStyle}>
      <div className={styles.overlay}>
        <div className={styles.text}>
          <div className={styles.toptitle}>
            <button>Evento</button>
            <p>Leia em 5 min</p>
          </div>

          <div className={styles.title}>
            <Link href={`/${post.sys.id}`}>
              <h1>{post.fields.title}</h1>
            </Link>
            <p>
              {post.fields.body.content[0].content[0].value.slice(0, 150)}...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
