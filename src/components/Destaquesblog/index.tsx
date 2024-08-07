import { createClient } from "contentful";
import Link from "next/link";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import SimpleSlider from "../Slider";
import styles from "./styles.module.scss";

const contentfulClient = createClient({
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
});
export default function Destaquesblog() {
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
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.top}>
            <h1>Destaques</h1>
          </div>
          <SimpleSlider />
          <Swiper
            slidesPerView="auto"
            spaceBetween={30}
            grabCursor={true}
            className={styles.mySwiper}
          >
            {posts.map((post, index) => (
              <SwiperSlide key={post.sys.id} className={styles.swiperSlide}>
                <div key={post.sys.id} className={styles.l}>
                  <Link href={`/${post.sys.id}`}>
                    <div>
                      <div
                        className={styles.image}
                        style={{
                          backgroundImage: `url(${post.fields.thumb?.fields.file.url})`,
                        }}
                      >
                        <button>Evento</button>
                      </div>
                      <div className={styles.text}>
                        <h1>{post.fields.title.slice(0, 45)}...</h1>
                        <div className={styles.day}>
                          <div className={styles.divisor}></div>
                          <div className={styles.date}>
                            <p>
                              {new Date(post.sys.createdAt).toLocaleDateString(
                                "pt-BR",
                              )}
                            </p>
                          </div>
                        </div>
                        <p>
                          {" "}
                          {post.fields.body.content[0].content[0].value.slice(
                            0,
                            150,
                          )}
                          ...
                        </p>
                        <div className={styles.link}>
                          <p>Ver post</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.bottom}>
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
        </div>
      </section>
    </>
  );
}
