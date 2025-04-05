import React from 'react';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import ProductGalleryPage from '@/app/Components/products/page';
import Project3 from '@/app/Components/Project/Project3';

const ProjectPage = () => {
    return (
        <div>
            <BreadCumb bgImg="/assets/img/page_heading_1.jpg" Title="Products" />
           
            <ProductGalleryPage />
            
        </div>
    );
};

export default ProjectPage;
