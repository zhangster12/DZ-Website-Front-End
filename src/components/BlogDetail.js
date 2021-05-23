// Creates layout for individual blog posts.

import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Moment from 'react-moment';

// CSS import statements
import '../css/App.css';
import '../css/PageLayout.css'
import '../css/BlogDetail.css'

const BlogDetail = (props) => {
    const [blog, setBlog] = useState({});
    
    useEffect(() => {
        const slug = props.match.params.id;
        const fetchData = async() => {
            try {
                // Doesn't work for duplicate blog slugs.
                const res = await axios.get(`${process.env.REACT_APP_API_BLOG_URL}/api/blog/${slug}`);
                setBlog(res.data);
            }
            catch (err) {
            }
        };
        fetchData();
    }, [props.match.params.id]);

    const createBlog = () => {
        return {__html: blog.content}
    };
    
    return(
        <div className='layout'>
            <div className='back'><a href='/blog'>Back</a></div>
            <div className='page-header'>{blog.title}</div>
            <div><Moment format='MMMM D, YYYY'>{blog.date_created}</Moment></div>
            <div className='blog-thumbnail'><img src={blog.thumbnail} alt='' /></div>
            <div className='blog-content' dangerouslySetInnerHTML={createBlog()} /> {/* Displays blog content. */}
        </div>
    )
}

export default BlogDetail;