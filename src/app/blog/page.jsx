'use client';
import PostCard from '@/components/postCard/postCard';
import styles from './blog.module.css';
import Slider from '@/components/slider/slider';
import React, { useEffect, useState } from 'react';
import ScrollEffect from '@/components/scrollEffect/scrollEffect';
import ScrollToTopButton from '@/components/scrollToTopButton/scrollToTopButton';
import Spinner from '@/components/spinner/spinner';
const BlogPage = () => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`/api/blog?page=${page}`, { method: 'GET' })
            .then((res) => res.json())
            .then((res) => {
                console.log('res', res);
                setPosts(res);
            })
            .finally(() => loading && setLoading(false));
    }, [page, loading]);
    console.log('posts state', posts);
    if (loading) {
        return (
            <div style={{ height: 300, width: '100%', display: 'flex', justifyContent: 'center' }}>
                {' '}
                <Spinner />{' '}
            </div>
        );
    }
    return (
        <div className={styles.container}>
            {' '}
            {posts.map((post, index) => (
                <React.Fragment key={post.id}>
                    {' '}
                    <div className={styles.post}>
                        {' '}
                        <PostCard post={post} />{' '}
                    </div>{' '}
                    {(index + 1) % 6 === 0 && (
                        <div className={styles.scrollEffect}>
                            {' '}
                            <ScrollEffect />{' '}
                        </div>
                    )}{' '}
                </React.Fragment>
            ))}{' '}
            <div className={styles.icon_scroll} onClick={() => setPage((prev) => prev + 1)}>
                {' '}
                <img src="/scroll-bottom.png" style={{ cursor: 'pointer' }} alt="scroll-bottom" />{' '}
            </div>{' '}
            <div className={styles.slider}>
                {' '}
                <Slider />{' '}
            </div>{' '}
            <ScrollToTopButton />{' '}
        </div>
    );
};
export default BlogPage;
