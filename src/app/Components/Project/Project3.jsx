'use client';
import { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { useSwipeable } from 'react-swipeable';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  const projects = [
    {
      id: 1,
      title: "Halbulalo Realstate",
      images: [
        "/assets/img/L54A9524.jpg",
        "/assets/img/portfolio_img_7.jpg",
        "/assets/img/L54A9318.jpg"
      ],
      description:
        "A full residential project in Addis Ababa featuring eco-friendly doors and furniture by Charot Eco Doors Company."
    },
    {
      id: 2,
      title: "Amesco Apartment Realstate",
      images: [
        "/assets/img/portfolio_img_5.jpg",
        "/assets/img/real001.png",
        "/assets/img/portfolio_img_5.jpg"
      ],
      description:
        "Modern apartments in Addis Ababa with custom eco-doors and stylish interiors, completed by Charot Eco Doors  Company."
    }
  ];
  
  

  useEffect(() => {
    setActiveImageIndex(0);
  }, [activeIndex]);

  const handleNextProject = () => setActiveIndex(prev => (prev + 1) % projects.length);
  const handlePrevProject = () => setActiveIndex(prev => (prev - 1 + projects.length) % projects.length);
  const handleNextImage = () => setActiveImageIndex(prev => (prev + 1) % projects[activeIndex].images.length);
  const handlePrevImage = () => setActiveImageIndex(prev => (prev - 1 + projects[activeIndex].images.length) % projects[activeIndex].images.length);

  const projectHandlers = useSwipeable({
    onSwipedUp: handleNextProject,
    onSwipedDown: handlePrevProject,
    trackMouse: true
  });

  const imageHandlers = useSwipeable({
    onSwipedLeft: handleNextImage,
    onSwipedRight: handlePrevImage,
    trackMouse: true
  });

  return (
    <Container fluid className="my-5 min-vh-100 d-flex align-items-center bg-light">
      <Container className="position-relative">
        {/* Title Section */}
        <Row className="mb-4 mb-md-5 justify-content-center">
          <Col xl={10} className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="d-inline-block px-3 px-md-4 px-lg-5 py-2 py-md-3 rounded-4 bg-white shadow-lg position-relative">
  <h2 className="display-6 display-md-5 fw-bold mb-0 text-green text-center">
    <span className="d-inline-block position-relative">
      Our Recent Projects
      <div className="title-underline bg-green mt-2"></div>
    </span>
  </h2>
</div>
            </motion.div>
          </Col>
        </Row>

        <div {...projectHandlers}>
          <Row className="g-4 justify-content-center">
            {/* Main Project Image */}
            <Col xl={10} className="position-relative mb-4">
              <div {...imageHandlers} className="position-relative overflow-hidden rounded-4 shadow-5xl">
                <AnimatePresence mode='wait'>
                  <motion.div
                    key={`${activeIndex}-${activeImageIndex}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="ratio ratio-16x9">
                      <Image
                        src={projects[activeIndex].images[activeImageIndex]}
                        alt={projects[activeIndex].title}
                        fluid
                        className="object-fit-cover hover-zoom"
                      />
                    </div>
                    <motion.div 
                      className="position-absolute bottom-0 start-0 end-0 p-3 p-md-4 bg-gradient-overlay"
                      initial={{ y: 50 }}
                      animate={{ y: 0 }}
                    >
                      <div className="container">
                        <h3 className="display-6 fs-4 fs-md-3 fw-bold text-light mb-1 mb-md-2">
                          {projects[activeIndex].title}
                        </h3>
                        <p className="lead text-light mb-0 opacity-75 d-none d-md-block">
                          {projects[activeIndex].description}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>

                {/* Image Navigation Buttons */}
                <motion.button 
                  onClick={handlePrevImage}
                  className="position-absolute start-0 top-50 translate-middle-y btn btn-earth rounded-circle p-2 p-md-3 shadow-lg border-0 z-3"
                  style={{ left: '0.5rem' }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className="bi bi-chevron-left fs-5 fs-md-4 text-light"></i>
                </motion.button>

                <motion.button 
                  onClick={handleNextImage}
                  className="position-absolute end-0 top-50 translate-middle-y btn btn-earth rounded-circle p-2 p-md-3 shadow-lg border-0 z-3"
                  style={{ right: '0.5rem' }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className="bi bi-chevron-right fs-5 fs-md-4 text-light"></i>
                </motion.button>

                {/* Image Indicators */}
                <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3">
                  <div className="d-flex gap-2">
                    {projects[activeIndex].images.map((_, index) => (
                      <motion.div
                        key={index}
                        className={`rounded-circle ${activeImageIndex === index ? 'bg-green' : 'bg-earth-light'} transition-all`}
                        style={{ width: '10px', height: '10px', cursor: 'pointer' }}
                        onClick={() => setActiveImageIndex(index)}
                        whileHover={{ scale: 1.2 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Col>

            {/* Project Selection Thumbnails */}
            <Col xl={10} className="mt-3 mt-md-4">
              <div className="d-flex flex-nowrap overflow-x-auto pb-3 scrollbar-hidden gap-3">
                {projects.map((project, index) => (
                  <motion.div 
                    key={project.id}
                    className="flex-shrink-0 position-relative"
                    style={{ width: '150px', cursor: 'pointer' }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setActiveIndex(index)}
                  >
                    <motion.div
                      className={`position-relative overflow-hidden rounded-3 transition-all ${
                        activeIndex === index 
                          ? 'border-green border-3 shadow-lg' 
                          : 'border-earth border-2'
                      }`}
                      style={{ aspectRatio: '4/3' }}
                    >
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fluid
                        className="object-fit-cover"
                      />
                      <div className={`position-absolute bottom-0 start-0 end-0 p-2 ${
                        activeIndex === index ? 'bg-green' : 'bg-earth'
                      } bg-opacity-90`}>
                        <span className="d-block text-light text-center small fw-bold">
                          {project.title}
                        </span>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      <style jsx global>{`
        :root {
          --green: #28a745;
          --earth: #8b5e3c;
          --earth-light: #a77d5a;
        }

        .bg-gradient-green-brown {
          background: linear-gradient(45deg, var(--green) 0%, var(--earth) 100%);
          position: relative;
          overflow: hidden;
        }

        .title-underline {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 60%;
          height: 3px;
          background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%);
        }

        .border-green {
          border-color: var(--green) !important;
        }

        .bg-green {
          background-color: var(--green) !important;
        }

        .btn-earth {
          background-color: var(--earth);
          border-color: var(--earth);
        }

        .btn-earth:hover {
          background-color: var(--earth-light);
          border-color: var(--earth-light);
        }

        .border-earth {
          border-color: var(--earth) !important;
        }

        .bg-earth {
          background-color: var(--earth) !important;
        }

        .bg-earth-light {
          background-color: var(--earth-light) !important;
        }

        .shadow-5xl {
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.15);
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

        .bg-gradient-overlay {
          background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 70%);
        }

        .transition-all {
          transition: all 0.3s ease;
        }

        @media (max-width: 768px) {
          .display-5 {
            font-size: 2rem !important;
          }
        }
      `}</style>
    </Container>
  );
};

export default ProjectShowcase;