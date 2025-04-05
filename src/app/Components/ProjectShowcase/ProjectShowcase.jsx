'use client';
import { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { useSwipeable } from 'react-swipeable';
import { motion, AnimatePresence } from 'framer-motion';
import "./pro.css";

const ProjectShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
   const projects = [
    {
      id: 1,
   
      title: "Halbulalo Realstate",
      image: "/assets/img/portfolio_img_9.jpg",
      description: "Contemporary design with eco-friendly materials"
    },
    {
      id: 2,
      title: "Amesco Apartment Realstate",
            image:  "/assets/img/portfolio_img_6.jpg",
      description: "Durable and stylish entrance solutions"
    },
    {
      id: 3,
      title: "Personal House",

      image: "/assets/img/portfolio_img_8.jpg",
      description: "Modular workspace solutions"
    },
    {
      id: 4,
      title: "Outdoor Flooring",
      image: "/assets/img/portfolio_img_7.jpg",
      description: "Weather-resistant composite materials"
    },
    {
      id: 5,
      title: "Outdoor Flooring",
      image: "/assets/img/portfolio_img_5.jpg",
      description: "Weather-resistant composite materials"
    }
  ];


  const handleNext = () => setActiveIndex(prev => (prev + 1) % projects.length);
  const handlePrev = () => setActiveIndex(prev => (prev - 1 + projects.length) % projects.length);

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true
  });

  return (
    <Container fluid className="py-5 my-5 position-relative overflow-hidden min-vh-100 d-flex align-items-center bg-light">
      <Container className="position-relative" style={{ zIndex: 1 }}>
        <div {...handlers}>
          <Row className="g-4 justify-content-center">
            <Col xl={10} className="position-relative mb-4">
              <AnimatePresence mode='wait'>
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <div className="position-relative overflow-hidden rounded-4 shadow-5xl hover-parent">
                    <Image
                      src={projects[activeIndex].image}
                      alt={projects[activeIndex].title}
                      fluid
                      className="object-fit-cover"
                      style={{ 
                        height: 'clamp(400px, 70vh, 1000px)', 
                        width: '100%',
                        transformOrigin: 'center center'
                      }}
                    />
                    <motion.div 
                      className="position-absolute bottom-0 start-0 end-0 p-4 bg-dark bg-gradient"
                      initial={{ y: 50 }}
                      animate={{ y: 0 }}
                    >
                      <div className="container">
                        <h3 className="display-6 fw-bold text-light mb-2">
                          {projects[activeIndex].title}
                        </h3>
                        <p className="lead text-light mb-0 opacity-75">
                          {projects[activeIndex].description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </Col>

            <Col xl={8} className="position-relative mt-4">
              <div className="position-relative">
                <div className="d-none d-lg-block">
                  <motion.button 
                    onClick={handlePrev}
                    className="position-absolute start-0 top-50 translate-middle-y btn btn-light rounded-circle p-3 shadow-lg border-0 z-3"
                    style={{ left: '-4rem' }}
                    whileHover={{ scale: 1.2, rotate: -15 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className="bi bi-chevron-left fs-4"></i>
                  </motion.button>

                  <motion.button 
                    onClick={handleNext}
                    className="position-absolute end-0 top-50 translate-middle-y btn btn-light rounded-circle p-3 shadow-lg border-0 z-3"
                    style={{ right: '-4rem' }}
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className="bi bi-chevron-right fs-4"></i>
                  </motion.button>
                </div>

                <div className="d-flex flex-nowrap overflow-x-auto pb-3 scrollbar-hidden position-relative thumbnails-container">
                  {projects.map((project, index) => (
                    <motion.div 
                      key={project.id}
                      className="flex-shrink-0 mx-2 position-relative"
                      style={{ width: '200px', cursor: 'pointer' }}
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setActiveIndex(index)}
                    >
                      <motion.div
                        className={`position-relative overflow-hidden rounded-3 ${
                          activeIndex === index 
                            ? 'border-success border-3 shadow-lg' 
                            : 'border-light border-2'
                        }`}
                        style={{ aspectRatio: '16/9' }}
                        animate={{
                          borderColor: activeIndex === index ? '#28a745' : 'rgba(255,255,255,0.2)'
                        }}
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fluid
                          className="object-fit-cover hover-zoom"
                        />
                        <motion.div
                          className={`position-absolute bottom-0 start-0 end-0 p-2 ${
                            activeIndex === index ? 'bg-success' : 'bg-dark'
                          } bg-opacity-90`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          <span className="d-block text-light text-center small fw-bold">
                            {project.title}
                          </span>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Col>

            {/* Mobile Navigation */}
            <Col lg={12} className="text-center mt-4 d-lg-none">
              <motion.button 
                onClick={handlePrev}
                className="btn btn-light rounded-circle p-3 mx-2 shadow-lg border-0"
                whileHover={{ 
                  scale: 1.2,
                  backgroundColor: '#28a745',
                }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="bi bi-chevron-left fs-4"></i>
              </motion.button>
              
              <motion.button 
                onClick={handleNext}
                className="btn btn-light rounded-circle p-3 mx-2 shadow-lg border-0"
                whileHover={{ 
                  scale: 1.2,
                  backgroundColor: '#28a745',
                }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="bi bi-chevron-right fs-4"></i>
              </motion.button>
            </Col>
          </Row>
        </div>
      </Container>

      <style jsx global>{`
        .shadow-5xl {
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.3);
        }
        
        .hover-zoom {
          transition: transform 0.3s ease;
        }
        
        .hover-zoom:hover {
          transform: scale(1.03);
        }

        .scrollbar-hidden {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .scrollbar-hidden::-webkit-scrollbar {
          display: none;
        }

        .bg-gradient {
          background: linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 100%);
        }

        .thumbnails-container {
          padding: 0 2rem;
        }

        @media (min-width: 1200px) {
          .thumbnails-container {
            padding: 0 4rem;
          }
        }
      `}</style>
    </Container>
  );
};

export default ProjectShowcase;