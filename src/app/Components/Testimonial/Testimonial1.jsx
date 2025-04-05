"use client"
import { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import Image from "next/image";
import { Carousel } from "react-bootstrap";

const Testimonial2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      img: "/assets/img/avatar_7.png",
      designation: "Business Owner",
      subtitle: "Testimonial",
      title: "Clients say About Us",
      content: "Charot Door Manufacturer exceeded my expectations! Their eco-friendly doors are durable, stylish, and energy-efficient. Highly recommended for quality craftsmanship and sustainability."
    },
    {
      img: "/assets/img/avatar_4.png",
      designation: "Home Builder",
      subtitle: "Testimonial",
      title: "Reliable & Sustainable",
      content: "The best doors I've ever installed! Charot's craftsmanship and attention to sustainability make them my top choice for every project."
    },
    {
      img: "/assets/img/avatar_8.png",
      designation: "Interior Designer",
      subtitle: "Testimonial",
      title: "Elegant & High-Quality",
      content: "Charot doors add elegance and durability to any space. Their eco-conscious approach makes them a perfect choice for modern homes."
    }
  ];

  return (
    <section className="bg-dark position-relative py-5" 
      style={{ backgroundImage: "url('/assets/img/testimonial_bg_2.jpg')", backgroundSize: 'cover' }}>
      
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75"></div>
      
      <div className="container position-relative z-index-1 py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <Carousel 
              activeIndex={activeIndex}
              onSelect={(index) => setActiveIndex(index)}
              interval={2000}
              ride="carousel"
              indicators={false}
            >
              {testimonials.map((testimonial, index) => (
                <Carousel.Item key={index}>
                  <div className="p-3 p-lg-5">
                    <TestimonialCard
                      img={testimonial.img}
                      designation={testimonial.designation}
                      subtitle={testimonial.subtitle}
                      title={testimonial.title}
                      content={testimonial.content}
                    />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>

            <div className="d-flex justify-content-center gap-3 mt-4">
              {testimonials.map((_, index) => (
                <div 
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`cursor-pointer ${activeIndex === index ? 'border-white border-2' : 'opacity-75'}`}
                  style={{ transition: 'all 0.3s', borderRadius: '50%' }}
                >
                  <Image
                    src={[
                      "/assets/img/avatar_5.png",
                      "/assets/img/avatar_4.png",
                      "/assets/img/avatar_6.png"
                    ][index]}
                    alt="avatar"
                    width={60}
                    height={60}
                    className="rounded-circle img-fluid"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial2;