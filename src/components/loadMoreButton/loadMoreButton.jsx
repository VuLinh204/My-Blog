import React from 'react';
import styles from './LoadMoreButton.module.css';

const LoadMoreButton = ({ onClick }) => {
    return (
        <div className={styles.loadMore}>
            <button onClick={onClick}>Tải thêm</button>
        </div>
    );
};

export default LoadMoreButton;
