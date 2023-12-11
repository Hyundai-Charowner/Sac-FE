import React from 'react';

const Body = ({ title, content }) => (
    <div className='post-contents'>
            <h2 className='post-title'>{title}</h2>
            <p className='post-content'>{content}</p>
    </div>
);

export default Body;
