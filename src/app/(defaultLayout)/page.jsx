import React from "react";
import HeroBanner1 from "../Components/HeroBanner/HeroBanner1";
import About1 from "../Components/About/About1";

import Choose1 from "../Components/Choose/Choose1";
import BeforeAfter from "../Components/BeforeAfter/BeforeAfter";

import Process from "../Components/Process/Process";

import Testimonial2 from "../Components/Testimonial/Testimonial2";
import AboutCompany from "../Components/AboutCompany/AboutCompany";
import IdealCustomers from "../Components/IdealCustomers/IdealCustomers";
import Faq1 from "../Components/Faq/Faq1";
import 'aos/dist/aos.css';
import ProductGalleryPage from "../Components/products/page";
import ProjectShowcase from "../Components/ProjectShowcase/ProjectShowcase";

const page = () => {
  return (
    <div>
      <HeroBanner1></HeroBanner1>
      <About1
  img1="/assets/img/about_img_1.jpg"
  img2="/assets/img/L54A8476.JPG"
  img3="/assets/img/about_img_3.jpg"
  subTitle="About Us"
  Title="Quality Doors, Delivered on Time"
  Content="We craft durable, secure doors with precision and deliver them quickly."
  feature1="Custom Door Designs"
  feature2="Strong & Safe Doors"
  listItem={[
    "Durable and long-lasting",
    "Comprehensive door services",
    "We handle every detail"
  ]}
/>
      {/* <Services1></Services1> */}
      <Choose1
  img1="/assets/img/Door1.jpg"
  content="We craft strong, stylish, and eco-friendly doors that meet high-quality standards."
  btnName="Read More"
  btnUrl="/about"
  img2="/assets/img/Door22.jpg"
  img3="/assets/img/Door33.jpg"
/>

      <AboutCompany></AboutCompany>
      <BeforeAfter
        title="Recent Completed Projects"
        subTitle="Before & after"
        bgImg="/assets/img/before_after_bg_1.jpg"
        beforeImg="/assets/img/afterDoor.jpg"
        afterTitle="After"
        afterImg="/assets/img/beforDoor.jpg"
        beforeTitle="Before"
      ></BeforeAfter>
      <Process></Process>
      <IdealCustomers></IdealCustomers>
      <ProductGalleryPage></ProductGalleryPage>
{/* <ProjectShowcase></ProjectShowcase> */}
      <Testimonial2
        subtitle="Testimonial"
        title="What our clients say <br> About Us"
        bgImg="/assets/img/testimonial_bg_1.jpg"
      ></Testimonial2>
      <Faq1></Faq1>
      {/* <Pricing1></Pricing1> */}

    </div>
  );
};

export default page;
