import Spinner from '@/components/spinner/spinner';

const Loading = () => {
    return (
        <div style={{ height: 300, width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Spinner />
        </div>
    );
};

export default Loading;
