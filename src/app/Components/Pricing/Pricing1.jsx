"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import PricingCard from "./PricingCard.jsx";

const Pricing1 = () => {
  const [isActive, setIsActive] = useState("monthly");

  return (
    <section className="cs_tabs cs_style_1 position-relative">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_type_1 cs_mb_47">
          <div className="cs_section_heading_left">
            <SectionTitle
              SubTitle="our Services"
              Title="Quality Service You Can Trust!"
            ></SectionTitle>
          </div>
        </div>
        {/* <ul className="cs_tab_links cs_style_1 cs_type_1 cs_fs_18 cs_semibold cs_heading_color cs_heading_font cs_mp_0 wow fadeInUp">
          <li
            className={`${isActive === "monthly" ? "active" : ""}`}
            onClick={() => setIsActive("monthly")}
          >
            <a>Monthly</a>
          </li>
          <li
            className={`${isActive === "yearly" ? "active" : ""}`}
            onClick={() => setIsActive("yearly")}
          >
            <a>Yearly</a>
          </li>
        </ul> */}
        <div className="cs_tab_body">
          <div className={`cs_tab ${isActive === "monthly" ? "active" : ""}`}>
            <div className="row cs_row_gap_30 cs_gap_y_30 justify-content-center">
              <div className="col-lg-4">
                <div className="cs_pricing_table cs_style_1">
                  <PricingCard
                    price="Quick"
                    planName="Eco door solutions"
                    title="Innovative "
                    subTitle="Smart & Sustainable"
                    featureList={[
                      "Weather Resistant",
                      "Highly Durable",
                      "Termite & Rot Proof",
                      "Low Maintenance",
                      "Eco-Friendly",
                      "Custom Designs",
                    ]}
                    btnName="Choose Plan"
                    btnUrl="/contact"
                  ></PricingCard>
                </div>
              </div>
              <div className="col-lg-4 ">
                <div className="cs_pricing_table cs_style_1 active">
                  <PricingCard
                    price="Core"
                    planName="Advantages"
                    title="Key Benefits"
                    subTitle="Built to Last"
                    featureList={[
                      "Fire-Resistant (Optional)",
                      "Quick Installation",
                      "Scratch-Proof",
                      "UV & Fade Resistant",
                      "High-Traffic Ready",
                      "Long-Lasting Value",
                    ]}
                    btnName="Choose Plan"
                    btnUrl="/contact"
                  ></PricingCard>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="cs_pricing_table cs_style_1">
                  <PricingCard
                    price="Quality"
                    planName="Products"
                    title="Eco Elite"
                    subTitle="High-Quality"
                    featureList={[
                      "Eco-Conscious Materials",
                      "Wood-Like Aesthetics",
                      "Cost-Effective & Durable",
                      "Energy Efficient",
                      "Sound Insulating",
                      "Lightweight & Strong",
                    ]}
                    btnName="Choose Plan"
                    btnUrl="/contact"
                  ></PricingCard>
                </div>
              </div>
            </div>
          </div>
          {/* <div className={`cs_tab ${isActive === "yearly" ? "active" : ""}`}>
            <div className="row cs_row_gap_30 cs_gap_y_30 justify-content-center">
              <div className="col-lg-4">
                <div className="cs_pricing_table cs_style_1">
                  <PricingCard
                    price="$350"
                    planName="Emergency Plan"
                    title="Basic Plan"
                    subTitle="Exclusive for Small"
                    featureList={[
                      "Rims & Tire Change",
                      "Light Carpet Clean",
                      "Wipe all Surfaces",
                      "Wipe all Surfaces",
                      "Interior Cleaning",
                      "Water proofing",
                    ]}
                    btnName="Choose Plan"
                    btnUrl="/contact"
                  ></PricingCard>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="cs_pricing_table cs_style_1 active">
                  <PricingCard
                    price="$500"
                    planName="Emergency Plan"
                    title="Stander Plan"
                    subTitle="Exclusive for Small"
                    featureList={[
                      "Rims & Tire Change",
                      "Light Carpet Clean",
                      "Wipe all Surfaces",
                      "Wipe all Surfaces",
                      "Interior Cleaning",
                      "Water proofing",
                    ]}
                    btnName="Choose Plan"
                    btnUrl="/contact"
                  ></PricingCard>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="cs_pricing_table cs_style_1">
                  <PricingCard
                    price="$650"
                    planName="Emergency Plan"
                    title="Premium plan"
                    subTitle="Exclusive for Small"
                    featureList={[
                      "Rims & Tire Change",
                      "Light Carpet Clean",
                      "Wipe all Surfaces",
                      "Wipe all Surfaces",
                      "Interior Cleaning",
                      "Water proofing",
                    ]}
                    btnName="Choose Plan"
                    btnUrl="/contact"
                  ></PricingCard>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </div>
    </section>
  );
};

export default Pricing1;
