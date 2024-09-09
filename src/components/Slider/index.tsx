import { createClient } from "contentful";
import Link from "next/link";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";

const contentfulClient = createClient({
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
});

export default function SimpleSlider() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await contentfulClient.getEntries({
        content_type: "blog",
      });
      setPosts(response.items);
    }
    fetchPosts();
  }, []);

  return (
    <section className={styles.container}>
      <Swiper
        slidesPerView={2}
        spaceBetween={300}
        loop={true}
        pagination={{
          clickable: true,
        }}
        className={styles.swiperContainer}
      >
        {posts.map((post) => (
          <SwiperSlide className={styles.card} key={post.sys.id}>
            <div className={styles.middle}>
              <div className={styles.l}>
                <Link href={`/${post.sys.id}`}>
                  <div
                    className={styles.image}
                    style={{
                      backgroundImage: `url(${post.fields.thumb?.fields.file.url})`,
                      width: "320px",
                      height: "300px",
                      paddingTop: "24px",
                      paddingLeft: "24px",
                    }}
                  ></div>
                  <div className={styles.text}>
                    <h1>{post.fields.title.slice(0, 45)}...</h1>
                    <div className={styles.day}>
                      <div className={styles.divisor}></div>
                      <div className={styles.date}>
                        <p>
                          {new Date(post.sys.createdAt).toLocaleDateString(
                            "pt-BR"
                          )}
                        </p>
                      </div>
                    </div>
                    <p>
                      {post.fields.body.content[0].content[0].value.slice(
                        0,
                        100
                      )}
                      ...
                    </p>
                    <div className={styles.link}>
                      <p>Ver post</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
