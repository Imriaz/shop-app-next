import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='not-found'>
            <h1>404! Not Found</h1>
            <p>Go back to <Link href="/">Homepage</Link></p>
        </div>
    );
};

export default NotFound;