'use client';
import Form3 from "../Form/Form3";

const Contact = () => {
    return (
        <section>
        <div className="container">
          {/* Added Title Section */}
          <div className="row mt-2">
            <div className="col-12 text-center">
              <h2 className="display-5 display-md-2 display-lg-3 fw-bold text-green  position-relative">
                <span className="cs_underline_animation">
                  Contact Us
                  <span className="cs_underline bg-green"></span>
                </span>
              </h2>
            </div>
          </div>

          <div className="row cs_gap_y_50">
        
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="row cs_gap_y_50">
            <div className="col-lg-6">
              <div className="cs_contact_desc">
                <h3 className="cs_fs_24 cs_mb_33">Contact Information</h3>
                <div className="cs_contact_info_grid">
                  <div className="cs_iconbox cs_style_5">
                    <div className="cs_iconbox_icon cs_center   cs_heading_color">
                    <i className="bi bi-telephone-inbound-fill"></i></div>
                      <div className="cs_iconbox_info">
                        <h3 className="cs_fs_18 cs_semibold cs_mb_2">Phone Number :</h3>
                        <a href="tel:+251908686868">+251908 686868</a><br/>
                        <a href="tel:+251908676767">+251908 676767</a>
                      </div>
                  </div>
                  <div className="cs_iconbox cs_style_5">
                    <div className="cs_iconbox_icon cs_center   cs_heading_color">
                    <i className="bi bi-envelope-fill"></i></div>
                      <div className="cs_iconbox_info">
                        <h3 className="cs_fs_18 cs_semibold cs_mb_2">Email Address :</h3>
                        <a href="mailTo:info.charot@gmail.com">info.charot@gmail.com</a><br/>
                        {/* <a href="mailTo:criparneedhelp@gmail.com">criparneedhelp@gmail.com</a> */}
                      </div>
                  </div>
                  <div className="cs_iconbox cs_style_5">
                    <div className="cs_iconbox_icon cs_center   cs_heading_color">
                    <i className="bi bi-geo-alt-fill"></i></div>
                      <div className="cs_iconbox_info">
                        <h3 className="cs_fs_18 cs_semibold cs_mb_2">Our Address :</h3>
                        <p className="mb-0">Lebu,Foziyana Bldg, 4th Floor <br/> Addis Ababa, Ethiopia</p>
                      </div>
                  </div>
                  <div className="cs_iconbox cs_style_5">
                    <div className="cs_iconbox_icon cs_center   cs_heading_color">
                    <i className="bi bi-clock-fill"></i></div>
                      <div className="cs_iconbox_info">
                        <h3 className="cs_fs_18 cs_semibold cs_mb_2">Working Time :</h3>
                        <p className="mb-0">Sunday to Friday :</p>
                        <p className="mb-0">02:30 Am - 12:00 PM</p>
                      </div>
                  </div>
                </div>
              </div>
              <div className="cs_height_44 cs_height_lg_30"></div>
              <div className="cs_social_desc">
              <p>At Charot Eco Doors, we craft durable and eco-friendly doors with a focus on quality and style.</p>
<h3 className="cs_fs_24 cs_semibold cs_mb_10">Follow Us on Social Media:</h3>
<p className="cs_mb_22">Stay connected and updated—follow us for the latest news and offers.</p>

                <div className="cs_social_btns cs_style_1">
                  <a href="@charot_doors" className="cs_center  "><i className="bi bi-telegram"></i></a>
                  <a href="#" className="cs_center  "><i className="bi bi-whatsapp"></i></a>
                  <a href="https://www.tiktok.com/@charot.eco.doors?_t=ZM-8uhQZluVwrH&_r=1" className="cs_center  "><i className="bi bi-tiktok"></i></a>
                  <a href="https://www.facebook.com/share/1969RH4mJ8/l" className="cs_center  "><i className="bi bi-facebook"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_form_wrapper  cs_style_1 ">
                <h3 className="cs_fs_24  cs_mb_33">Send Message</h3>
                    <Form3></Form3>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>

        <div className="cs_navigation_map wow fadeInUp">
     <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.2528033604563!2d38.726109473611096!3d8.948836990241508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b81f2be0781ed%3A0xe1749b5e158850f7!2zRm96aWEgQnVpbGRpbmcgfCBMZWJ1IHwg4Y2O4Yua4YurIOGIheGKleGMuyB8IOGIiOGJoQ!5e0!3m2!1sen!2set!4v1742216027595!5m2!1sen!2set"
  width="600"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

    </div>

  
          </div>
        </div>

        <style jsx global>{`
          .text-green {
            color: #28a745 !important;
          }
          
          .cs_underline_animation {
            position: relative;
            display: inline-block;
            padding-bottom: 8px;
          }
          
          .cs_underline {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            height: 2px;
            width: 60px;
            transition: all 0.3s ease;
          }
          
          .cs_underline.bg-green {
            background-color: #28a745;
          }
          
          @media (max-width: 768px) {
            .display-5 {
              font-size: 2rem !important;
            }
            .cs_underline {
              width: 40px;
              height: 1.5px;
            }
          }
          
          @media (min-width: 992px) {
            .display-lg-3 {
              font-size: 2.5rem !important;
            }
          }
        `}</style>
      </section>
    );
};

export default Contact;