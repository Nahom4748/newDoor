"use client"
import { Carousel } from 'react-bootstrap';
import data from '../../Data/herobanner1.json';
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Link from "next/link";

const HeroBanner1 = () => {
    useEffect(() => {
        loadBackgroudImages();
    }, []);

    return (
        <section className="cs_slider cs_style_1 ">
            <Carousel 
                controls={false}
                indicators={true}
                interval={5000}
                pause={false}
            >
                {data.map((item, index) => (
                    <Carousel.Item key={index}>
                        <div className="cs_hero cs_style_1 cs_type_1 cs_bg_filed cs_primary_bg cs_center" data-background={item.img}>
                            <div className="container">
                                <div className="cs_hero_text">
                                    <h1 className="cs_hero_title cs_fs_70 cs_mb_18 wow fadeInUp">{item.title}</h1>
                                    <p className="cs_hero_subtitle cs_mb_34">{item.desc}</p>
                                    <div className="cs_hero_btns">
                                        <Link href={item.btnUrl} className="cs_btn cs_style_1 wow fadeInLeft">
                                            <span>{item.btnName}</span>
                                            <i className="bi bi-arrow-right"></i>     
                                        </Link>
                                        <span className="cs_hero_number wow fadeInRight">
                                            <span className="cs_hero_number_icon cs_center cs_heading_bg cs_white_color cs_fs_18">
                                                <i className="bi bi-telephone-x-fill"></i>
                                            </span>
                                            <a href={`tel:${item.number}`} className="cs_fs_24 cs_semibold cs_heading_color">
  {item.number}
</a>

                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </section>
    );
};

export default HeroBanner1;