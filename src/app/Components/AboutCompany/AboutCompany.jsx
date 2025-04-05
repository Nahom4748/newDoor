"use client";
import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Badge, Button, Fade, Image } from "react-bootstrap";
import Link from "next/link";

const CompanyProfile = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const features = [
    {
      icon: "./eco.jpg",
      title: "Eco-Friendly",
      desc: "Sustainable materials reducing environmental impact",
    },
    {
      icon: "./sound.jpg",
      title: "Soundproof",
      desc: "Premium noise reduction technology",
    },
    {
      icon: "./Water proof.jpg",
      title: "Waterproof",
      desc: "Advanced moisture protection system",
    },
    {
      icon: "./fire.jpg",
      title: "Fire Safe",
      desc: "Certified fire retardant materials",
    },
    {
      icon: "./Durable.jpg",
      title: "Durable",
      desc: "Weather-resistant construction",
    },
    {
      icon: "./resistance.jpg",
      title: "Pest Resistant",
      desc: "Termite & rot-proof materials",
    },
  ];

  return (
    <section className="py-5 bg-light position-relative overflow-hidden">
      <Container>
        {/* Animated Header */}
        <Fade in={show}>
          <Row className="mb-5 text-center">
            <Col lg={8} className="mx-auto">
              <h1 className="display-4 fw-bold text-success mb-3">
                🌿 Charot Eco Doors
              </h1>
              <p className="lead text-muted mb-4">
                Pioneering Sustainable Entry Solutions Since 2016
              </p>
            </Col>
          </Row>
        </Fade>

        {/* Feature Grid */}
        <Row xs={1} md={2} lg={3} className="g-4">
          {features.map((feature, index) => (
            <Col key={index}>
              <Fade in={show} delay={index * 100}>
                <Card className="h-100 shadow-sm border-0 overflow-hidden">
                  <div className="ratio ratio-16x9 bg-light">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      fill
                      className="object-fit-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <Card.Body className="text-center">
                    <Card.Title className="fs-5 fw-bold text-success">
                      {feature.title}
                    </Card.Title>
                    <Card.Text className="text-muted">
                      {feature.desc}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Fade>
            </Col>
          ))}
        </Row>

        {/* Timeline Section */}
    

        {/* CTA Section */}
        <Fade in={show} delay={600}>
          <div className="text-center mt-5">
            <Button
              variant="success"
              size="lg"
              className="rounded-pill px-4 py-2"
              as={Link}
              href="/contact"
            >
              Request Consultation
            </Button>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default CompanyProfile;