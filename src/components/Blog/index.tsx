import styles from './styles.module.scss';
import { createClient } from 'contentful';
import Link from 'next/link';

import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

const contentfulClient = createClient({
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
});

export default function Blog() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await contentfulClient.getEntries({
        content_type: 'blog',
      });

      console.log(response.items);

      setPosts(response.items);
    }
    fetchPosts();
  }, []);
  return (
    <>
      <div className={styles.swiperWrapper}>
        <Swiper
          slidesPerView="auto"
          spaceBetween={30}
          grabCursor={true}
          className="mySwiper"
        >
          {posts.map((post, index) => (
            <SwiperSlide key={post.sys.id} className={styles.swiperSlide}>
              <Link href={`/PostNew/${post.sys.id}`}>
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
    </>
  );
}
