'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from "../Common/SectionTitle1";
import data from '../../Data/project1.json';
import Image from "next/image";
import { GiRecycle } from 'react-icons/gi';
import { Card, Row, Col, Container, Badge } from 'react-bootstrap';

// Animation configurations
const fadeUp = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

const AnimatedSection = ({ children, variants, className }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial="offscreen"
      animate={inView ? "onscreen" : "offscreen"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const ProjectCard = ({ item }) => {
  return (
    <AnimatedSection variants={fadeUp}>
      <Card className="h-100 border-0 shadow-lg overflow-hidden rounded-4">
        <div className="position-relative overflow-hidden">
          <Image
            src={item.img}
            alt={item.title}
            width={600}
            height={400}
            className="card-img-top"
            style={{ objectFit: 'cover', minHeight: '300px', transition: 'transform 0.3s' }}
          />
          <div 
            className="card-img-overlay d-flex flex-column justify-content-end p-3"
            style={{ background: 'linear-gradient(to top, rgba(7, 146, 70, 0.7), transparent)' }}
          >
            <Badge pill bg="success" className="align-self-start mb-2">
              <GiRecycle className="me-2" /> Eco-Friendly
            </Badge>
          </div>
        </div>
        <Card.Body className="bg-white text-center">
          <Card.Title className="fw-bold ">{item.title}</Card.Title>
          <Card.Text className="text-muted">{item.desc}</Card.Text>
        </Card.Body>
      </Card>
    </AnimatedSection>
  );
};

const Project1 = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <AnimatedSection variants={fadeUp}>
          <SectionTitle subtitle="About Charot Eco Doors" center />
        </AnimatedSection>

        <Row className="g-4 py-5 justify-content-center">
          {data.map((item, index) => (
            <Col key={index} lg={4} md={6} sm={12}>
              <ProjectCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Project1;
