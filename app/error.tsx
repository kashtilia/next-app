'use client';
import React from 'react';

interface IErrorPageProps {
    error: Error;
    reset: () => void;
}

const ErrorPage = ({error, reset } :IErrorPageProps) => {
    console.log('Error',error);
    return (
        <>
            <div>An unexpected error has occurred</div>
            <button className="btn" onClick={() => reset()}>Retry</button>
        </>

    );
}

export default ErrorPage;