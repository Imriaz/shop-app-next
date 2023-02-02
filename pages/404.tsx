import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='not-found'>
            <h1>404! Not Found</h1>
            <img src="https://i.ibb.co/CP5p6Rn/404-error.jpg" alt="404 not found" />
            <br />
            <p>Go back to <Link href="/">Homepage</Link></p>
        </div>
    );
};

export default NotFound;