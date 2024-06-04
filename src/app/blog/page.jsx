import PostCard from '@/components/postCard/postCard';
import styles from './blog.module.css';
import { getPosts } from '@/lib/data';
import Slider from '@/components/slider/slider';
import React from 'react';
import ScrollEffect from '@/components/scrollEffect/scrollEffect';
import ScrollToTopButton from '@/components/scrollToTopButton/scrollToTopButton';

const BlogPage = async () => {
    const posts = await getPosts();

    return (
        <div className={styles.container}>
            {posts.map((post, index) => (
                <React.Fragment key={post.id}>
                    <div className={styles.post}>
                        <PostCard post={post} />
                    </div>
                    {(index + 1) % 6 === 0 && (
                        <div className={styles.scrollEffect}>
                            <ScrollEffect />
                        </div>
                    )}
                </React.Fragment>
            ))}
            <div className={styles.icon_scroll}>
                <img src="/scroll-bottom.png" alt="scroll-bottom" />
            </div>
            <div className={styles.slider}>
                <Slider />
            </div>
            <ScrollToTopButton />
        </div>
    );
};

export default BlogPage;
