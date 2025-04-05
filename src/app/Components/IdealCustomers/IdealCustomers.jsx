"use client";

import { motion } from "framer-motion";
import SectionTitle from "../Common/SectionTitle";
import data from "../../Data/team1.json";
import Link from "next/link";
import Image from "next/image";

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const hoverVariants = {
  hover: {
    y: -10,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const shapeVariants = {
  hover: {
    rotate: 2,
    scale: 1.05,
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: "mirror"
    }
  }
};

const IdealCustomers = () => {
  return (
    <section className="position-relative overflow-hidden">
      <div className="cs_height_120 cs_height_lg_80" />
      
      <motion.div 
        className="container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="cs_section_heading cs_style_1 cs_type_1 cs_mb_47">
          <div className="cs_section_heading_left">
            <SectionTitle
              SubTitle="Our Customers"
              Title="Ideal Customers"
            />
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              transition={{ duration: 0.8 }}
              className="cs_heading_line"
              style={{ height: "3px", background: "#2B4EFF" }}
            />
          </div>
        </div>

        <div className="row cs_row_gap_30 cs_gap_y_30">
          {data.slice(0, 4).map((item, i) => (
            <motion.div 
              key={i}
              className="col-xl-3 col-sm-6"
              variants={cardVariants}
              custom={i}
            >
              <motion.div 
                className="cs_team cs_style_1 position-relative overflow-hidden"
                whileHover="hover"
                variants={hoverVariants}
              >
                <div className="cs_team_thumbnail cs_mb_10 cs_overflow_hidden">
                  <motion.div
                    className="cs_hover_zoom"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image 
                      src={item.img} 
                      alt={item.title}
                      width={242} 
                      height={336}
                      className="cs_grayscale cs_transition"
                    />
                  </motion.div>
                </div>

                <motion.div 
                  className="cs_team_info text-center px-4 py-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="cs_fs_24 cs_semibold mb-1 cs_primary_color">
                    {item.title}
                  </h3>
                  <p className="cs_text_color mb-0 cs_transition">
                    {item.desc}
                  </p>
                </motion.div>

                <motion.div 
                  className="cs_team_shape position-absolute"
                  variants={shapeVariants}
                  style={{ zIndex: -1, top: "10%", left: "10%" }}
                >
                  <Image
                    src="/assets/img/shapes/DoorBG.png"
                    alt="decorative background"
                    width={302}
                    height={476}
                    className="cs_opacity_20"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="cs_height_120 cs_height_lg_80" />

      <style jsx global>{`
        .cs_hover_zoom {
          transition: transform 0.3s ease-out;
        }

        .cs_grayscale {
          filter: grayscale(100%);
          transition: filter 0.3s ease;
        }

        .cs_grayscale:hover {
          filter: grayscale(0);
        }

        .cs_transition {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .cs_team.cs_style_1 {
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          overflow: hidden;
        }

        .cs_team.cs_style_1:hover {
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
        }

        .cs_team_info {
          background: linear-gradient(to bottom, 
            rgba(255, 255, 255, 0.9) 0%, 
            rgba(255, 255, 255, 1) 100%);
        }

        @media (max-width: 768px) {
          .cs_team.cs_style_1 {
            margin: 0 15px;
          }
        }
      `}</style>
    </section>
  );
};

export default IdealCustomers;