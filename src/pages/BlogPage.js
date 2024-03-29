import Moment from 'react-moment';
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import CircularProgress  from '@material-ui/core/CircularProgress';

// CSS import statements
import '../css/App.css';
import '../css/PageLayout.css'

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    //Sets all blogs
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_BLOG_URL}/api/blog/`);
                setBlogs(res.data);
                setLoading(false)
            }
            catch(err) {}
        }
        fetchBlogs();
    }, [])

    const getBlogs = () => {
        let list = []
        let result = []

        blogs.map(blogPost => {
            return list.push(
                <div className='blog-entry'>
                    <div><Link className='blog-entry-title' to={`/blog/${blogPost.slug}`}>{blogPost.title}</Link></div>
                    <div className='blog-entry-date'><Moment format='MMMM D, YYYY'>{blogPost.date_created}</Moment></div>
                </div>
            );
        })

        for (let i = 0; i < list.length; i += 2) {
            result.push(
                <div key={i}>
                    <div>{list[i]}</div>
                    <div>{list[i+1] ? list[i+1] : null}</div>
                </div>
            )
        }
        return result;
    };

    return(
        <div>
            <div className='layout'>
                {/* <div className='page-header' id='blog'>Days with Dan!</div> */}
                <div className='page-header' id='blog'>New blog coming soon!</div>
                {/* <div className={loading ? 'loading-hidden' : 'loading-show'}>{getBlogs()}</div>
                <div className={loading ? 'loading-show': 'loading-hidden'} id='center'><CircularProgress color='primary' /></div> */}
            </div>
        </div>
    );
};

export default Blog;