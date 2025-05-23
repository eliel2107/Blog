import styles from "./styles.module.scss";
import { createClient } from "contentful";
import Link from "next/link";

import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Importação do CSS para navegação
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const contentfulClient = createClient({
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
});

export default function Destaques() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await contentfulClient.getEntries({
        content_type: "blog",
      });

      console.log(response.items);

      setPosts(response.items);
    }
    fetchPosts();
  }, []);

  return (
    <>
      <section className={styles.container} id="Destaques">
        <div className={styles.content}>
          <div className={styles.topcontent}>
            <h1>LW NEWS</h1>

            <p>As últimas notícias e tendências no setor de gestão de frotas</p>
          </div>
          <div className={styles.swiperWrapper}>
            <div className={styles.swiperNav}>
              <div className={styles.wrapArrow} id="prevBtn">
                <img
                  src="/arrowleft.svg"
                  className={styles.prevBtn}
                  alt="Previous"
                />
              </div>
              <div className={styles.nextBtn} id="nextBtn">
                <img src="/arrowright.svg" alt="Next" />
              </div>
            </div>
            <Swiper
              modules={[Navigation]} // Ativando o módulo de navegação
              navigation={{
                prevEl: "#prevBtn", // Referência à seta anterior
                nextEl: "#nextBtn", // Referência à seta próxima
              }}
              slidesPerView="auto"
              spaceBetween={30}
              grabCursor={true}
              className="mySwiper"
            >
              {posts.map((post, index) => (
                <SwiperSlide key={post.sys.id} className={styles.swiperSlide}>
                  <Link href={`/${post.sys.id}`}>
                    <div className={styles.swiperContent}>
                      <div className={styles.blogImage}>
                        <img src={post.fields.thumb.fields.file.url} alt="" />
                      </div>
                      <div className={styles.blogFooter}>
                        <h3>{post.fields.title}</h3>
                        <p>
                          {post.fields.body.content[0].content[0].value.slice(
                            0,
                            100
                          )}
                          ...
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
