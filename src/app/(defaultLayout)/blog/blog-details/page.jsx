import BlogDetails from '@/app/Components/BlogDetails/BlogDetails';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import React from 'react';

const page = () => {
    return (
        <div>
             <BreadCumb
                // bgImg="/assets/img/page_heading_1.jpg"
                bgImg="/assets/img/hero_bg_2.jpg"
                Title="Blog Details"
            ></BreadCumb>   
            <BlogDetails></BlogDetails>              
        </div>
    );
};

export default page;