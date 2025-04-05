'use client'; // Add this at the very top
import Link from "next/link";
import data from "../../Data/services1.json";
import Image from "next/image";

const Services3 = () => {
  return (
    <section>
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        {/* Added Title Section */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="display-5 display-md-4 display-lg-3 fw-bold text-green mb-4 position-relative">
              <span className="cs_underline_animation">
                Our Services
                <span className="cs_underline bg-green"></span>
              </span>
            </h2>
          </div>
        </div>

        <div className="row cs_row_gap_30 cs_gap_y_30">
          {data.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="cs_card cs_style_1">
                <div className="cs_card_thumbnail">
                  <Image src={item.img} alt="img" width={342} height={235} />
                </div>
                <div className="cs_card_info cs_white_bg cs_radius_10 text-center">
                  <div className="cs_card_icon cs_center cs_heading_bg cs_mb_22">
                    <Image src={item.icon} alt="img" width={55} height={55} />
                  </div>
                  <h3 className="cs_card_title cs_fs_30 cs_mb_8">
                    {item.title}
                  </h3>
                  <p className="cs_mb_18">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>

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

export default Services3;