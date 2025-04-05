import Image from "next/image";
import Link from "next/link";

const Footer1 = () => {
  return (
    <footer className="cs_footer cs_style_1 text-white" style={{ backgroundColor: '#02801E' }}>
      <div className="cs_main_footer py-4">
        <div className="container">
          <div className="row g-4">
            {/* About Column */}
            <div className="col-md-6 col-lg-3">
              <div className="cs_footer_widget">
                <Link href="/" className="d-block mb-3">
                  <Image 
                    src="/assets/img/logo.png" 
                    alt="Charot Doors Logo"
                    width={150}
                    height={40}
                    className="img-fluid"
                  />
                </Link>
                <h2 className="h5 mb-3 fw-semibold">About</h2>
                <div className="mb-3">
                  <span className="d-inline-block bg-warning me-1" style={{width: "30px", height: "2px"}}></span>
                  <span className="d-inline-block bg-white me-1" style={{width: "15px", height: "2px"}}></span>
                  <span className="d-inline-block bg-white" style={{width: "15px", height: "2px"}}></span>
                </div>
                <p className="mb-4 small">
                  At Charot Eco Doors, we specialize in crafting high-quality,
                  eco-friendly doors that blend durability, style, and
                  sustainability.
                </p>

                <div className="d-flex gap-2">
                  <a href="@charot_doors" className="text-white text-decoration-none">
                    <i className="bi bi-telegram fs-6"></i>
                  </a>
                  <a href="https://www.tiktok.com/@charot.eco.doors?_t=ZM-8uhQZluVwrH&_r=1" className="text-white text-decoration-none">
                    <i className="bi bi-tiktok fs-6"></i>
                  </a>
                  <a href="#" className="text-white text-decoration-none">
                    <i className="bi bi-whatsapp fs-6"></i>
                  </a>
                  <a href="https://www.facebook.com/share/1969RH4mJ8/l" className="text-white text-decoration-none">
                    <i className="bi bi-facebook fs-6"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Explore Column - Hidden on Mobile */}
            <div className="col-md-6 col-lg-3 d-none d-md-block">
              <div className="cs_footer_widget">
                <h2 className="h5 mb-3 fw-semibold">Explore</h2>
                <div className="mb-3">
                  <span className="d-inline-block bg-warning me-1" style={{width: "30px", height: "2px"}}></span>
                  <span className="d-inline-block bg-white me-1" style={{width: "15px", height: "2px"}}></span>
                  <span className="d-inline-block bg-white" style={{width: "15px", height: "2px"}}></span>
                </div>
                <ul className="list-unstyled small">
                  <li className="mb-2"><Link href="/products" className="text-white text-decoration-none">High Durability</Link></li>
                  <li className="mb-2"><Link href="/products" className="text-white text-decoration-none">Eco-Friendly</Link></li>
                  <li className="mb-2"><Link href="/products" className="text-white text-decoration-none">Waterproof & Fire Retardant</Link></li>
                  <li className="mb-2"><Link href="/products" className="text-white text-decoration-none">Soundproof</Link></li>
                  <li><Link href="/products" className="text-white text-decoration-none">Termite & Rot Resistant</Link></li>
                </ul>
              </div>
            </div>

            {/* Contact Column */}
            <div className="col-md-6 col-lg-3">
              <div className="cs_footer_widget">
                <h2 className="h5 mb-3 fw-semibold">Contact Us</h2>
                <div className="mb-3">
                  <span className="d-inline-block bg-warning me-1" style={{width: "30px", height: "2px"}}></span>
                  <span className="d-inline-block bg-white me-1" style={{width: "15px", height: "2px"}}></span>
                  <span className="d-inline-block bg-white" style={{width: "15px", height: "2px"}}></span>
                </div>
                <ul className="list-unstyled small">
                  <li className="mb-3">
                    <i className="bi bi-geo-alt-fill me-2"></i>
                    Lebu, Foziyana bldg, 4th floor Addis Ababa, Ethiopia
                  </li>
                  <li className="mb-3">
                    <i className="bi bi-telephone-fill me-2"></i>
                    <a href="tel:+251-90-868-6868" className="text-white text-decoration-none">+251-90-868-6868</a>
                  </li>
                  <li>
                    <i className="bi bi-envelope-fill me-2"></i>
                    <a href="mailto:info.charot@gmail.com" className="text-white text-decoration-none">
                      info.charot@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Hours Column */}
            <div className="col-md-6 col-lg-3">
              <div className="cs_footer_widget">
                <h2 className="h5 mb-3 fw-semibold">Working Hours</h2>
                <div className="mb-3">
                  <span className="d-inline-block bg-warning me-1" style={{width: "30px", height: "2px"}}></span>
                  <span className="d-inline-block bg-white me-1" style={{width: "15px", height: "2px"}}></span>
                  <span className="d-inline-block bg-white" style={{width: "15px", height: "2px"}}></span>
                </div>
                <ul className="list-unstyled small">
                  <li className="d-flex justify-content-between mb-2">
                    <span>Mon - Fri</span>
                    <span>2:30 AM - 12:00 PM</span>
                  </li>
                  <li className="d-flex justify-content-between mb-2">
                    <span>Saturday</span>
                    <span>2:30 AM - 10:00 PM</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="cs_footer_bottom py-3" style={{ backgroundColor: '#8B4513' }}>
        <div className="container">
          <div className="text-center small">
            Copyright © {new Date().getFullYear()} charotecodoors. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;