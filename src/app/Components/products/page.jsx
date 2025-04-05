"use client";
import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from 'next/navigation';

const ProductGalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setIsMounted(true);
    AOS.init({
      duration: 800,
      once: true,
      mirror: false,
      easing: 'ease-in-out-quad'
    });
  }, []);

  const products = useMemo(() => [
    { id: 1, title: "Modern Interior Door", category: "interior", featured: true },
    { id: 2, title: "Contemporary Interior Door", category: "interior", new: true },
    { id: 3, title: "Classic Interior Door", category: "interior", award: true },
    { id: 4, title: "Glass Panel Interior Door", category: "interior" },
    { id: 5, title: "Main Gate", category: "gate", bestseller: true },
    { id: 6, title: "Strong, secure, and stylish", category: "gate" },
    { id: 7, title: "Modern  Gate", category: "gate", eco: true },
    { id: 8, title: "French Interior Door", category: "interior" },
    { id: 9, title: "Wooden Interior Door", category: "interior" },
  ], []);

  const filteredProducts = useMemo(() => 
    activeCategory === 'all' 
      ? products 
      : products.filter(product => product.category === activeCategory),
    [activeCategory, products]
  );

  return (
    <section className="py-5 position-relative" style={{ 
      background: 'radial-gradient(circle at center, #f8f9fa 0%, #e9ecef 100%)',
      minHeight: '100vh',
      overflow: 'hidden'
    }}>
      {/* Floating background elements (client-side only) */}
      {isMounted && (
        <div className="position-absolute top-0 start-0 w-100 h-100" 
             style={{ zIndex: 0, pointerEvents: 'none' }}>
          {[...Array(6)].map((_, i) => {
            const seed = Math.random();
            return (
              <div 
                key={`float-${i}-${seed}`}
                className="position-absolute bg-success" 
                style={{
                  width: `${seed * 50 + 20}px`,
                  height: '2px',
                  opacity: 0.1,
                  transform: `rotate(${seed * 360}deg)`,
                  animation: `float ${seed * 10 + 15}s infinite linear`,
                  left: `${seed * 100}%`,
                  top: `${seed * 100}%`
                }}
              />
            );
          })}
        </div>
      )}

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="text-center mb-5" data-aos="fade-down">
          <h1 className="display-3 fw-bold text-dark mb-4" style={{
            background: 'linear-gradient(45deg, #1a1a1a, #02801E)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.05em',
            lineHeight: '1.2'
          }}>
            Our Products – Eco-Friendly Doors
          </h1>
          
          <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
            {['all', 'interior', 'gate'].map((category, i) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`btn px-4 py-3 position-relative border-0`}
                style={{
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  background: activeCategory === category ? 
                    'linear-gradient(45deg, #02801E, #015a16)' : 
                    'rgba(255,255,255,0.9)',
                  color: activeCategory === category ? 'white' : '#1a1a1a',
                  borderRadius: '12px',
                  backdropFilter: 'blur(4px)',
                  boxShadow: activeCategory === category ? 
                    '0 4px 6px rgba(0,0,0,0.1)' : 'none'
                }}
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                {category === 'all' ? 'All' : 
                 category === 'interior' ? 'Interior ' : 'Gate'} 
                <div className="position-absolute bottom-0 start-0 w-100" 
                     style={{
                       height: '2px',
                       background: activeCategory === category ? '#02801E' : 'transparent',
                       transition: 'all 0.3s ease'
                     }}/>
              </button>
            ))}
          </div>
        </div>

        <div className="row g-4 g-lg-5">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id}
              className="col-12 col-md-6 col-xl-4"
              data-aos="fade-up"
              data-aos-delay={index % 3 * 50}
            >
              <div 
                className="card border-0 shadow-lg h-100 overflow-hidden position-relative bg-transparent"
                style={{
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  borderRadius: '20px',
                  backdropFilter: 'blur(12px)',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                }}
              >
                <div className="ratio ratio-1x1 position-relative overflow-hidden">
                  <div className="position-absolute w-100 h-100" 
                       style={{
                         background: 'linear-gradient(45deg, rgba(2, 128, 30, 0.1), transparent)',
                         zIndex: 1,
                         mixBlendMode: 'multiply'
                       }}/>
                  <Image
                    src={`/assets/img/products/${product.id}.jpg`}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-fit-cover"
                    quality={90}
                    priority={index < 3}
                    style={{
                      transition: 'transform 0.4s ease',
                      transformOrigin: 'center center'
                    }}
                  />
               
                </div>
                <div className="card-body text-center p-4 position-relative" 
                     style={{ zIndex: 2 }}>
                  <h3 className="h5 fw-bold text-dark mb-3">
                    {product.title}
                  </h3>
                  <div className="d-flex justify-content-center align-items-center gap-2">
                    <span className="badge rounded-pill px-3 py-2" 
                          style={{ 
                            background: 'rgba(2, 128, 30, 0.9)',
                            color: 'white',
                            backdropFilter: 'blur(4px)'
                          }}>
                      {product.category.toUpperCase()}
                    </span>
                    <button 
                    onClick={() => router.push('/contact')}
                      className="btn p-2 rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        background: 'rgba(255,255,255,0.9)',
                        width: '36px',
                        height: '36px',
                        backdropFilter: 'blur(4px)',
                        transition: 'transform 0.3s ease'
                      }}>
                      <i className="bi bi-arrow-up-right text-dark fs-5"/>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-5" data-aos="fade-up">
          <Link 
            href="/contact" 
            className="btn btn-lg px-5 py-3 rounded-pill fw-bold position-relative overflow-hidden border-0"
            style={{ 
              background: 'linear-gradient(45deg, #02801E, #015a16)',
              color: 'white',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 15px rgba(2, 128, 30, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
            }}
          >
            <span className="position-relative z-index-1 d-inline-flex align-items-center gap-2">
              Start Your Custom Project
              <i className="bi bi-arrow-right ms-2 fs-5"/>
            </span>
          </Link>
        </div> */}
        <div className="text-center mt-4 mt-md-5" data-aos="fade-up">
        <Link 
          href="/contact" 
          className="btn px-4 px-md-5 py-2 py-md-3 rounded-pill fw-bold position-relative overflow-hidden border-0"
          style={{ 
            background: 'linear-gradient(45deg, #02801E, #015a16)',
            color: 'white',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            fontSize: '0.9rem',
            width: 'fit-content',
            maxWidth: '100%',
            display: 'inline-flex',
            alignItems: 'center'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 15px rgba(2, 128, 30, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'none';
            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
          }}
        >
          <span className="position-relative z-index-1 d-inline-flex align-items-center gap-2">
            Start Your Custom Project
            <i className="bi bi-arrow-right ms-2 fs-6 fs-md-5"/>
          </span>
        </Link>
      </div>
    
      </div>

      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(var(--rotation)); }
          50% { transform: translateY(-20px) rotate(var(--rotation)); }
          100% { transform: translateY(0) rotate(var(--rotation)); }
        }

        .card:hover img {
          transform: scale(1.05);
        }

        .btn:hover .bi-arrow-right {
          transform: translateX(3px);
        }
      `}</style>
    </section>
  );
};

export default ProductGalleryPage;