import React from 'react';
import { Viewer } from '@toast-ui/react-editor'; 
import '../../styles/Post.css';

const Body = ({ title, content }) => (
    <div className='post-contents'>
            <h1 className='post-title'>{title}</h1>
            <Viewer initialValue={content} />
    </div>
);

export default Body;
