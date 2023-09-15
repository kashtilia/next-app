import React from 'react';

interface PhotoPageProps {
    params: {
        id: number;
        photo_id: number;
    }
}

const PhotoPage = ({params: {id, photo_id}}: PhotoPageProps) => {
    return (
        <div>PhotoPage {id} {photo_id}</div>
    );
}

export default PhotoPage;