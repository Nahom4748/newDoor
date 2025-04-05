"use client";
import { useState, useRef, useEffect } from "react";

const BeforeAfter = ({
  title,
  subTitle,
  bgImg,
  beforeImg,
  afterTitle,
  afterImg,
  beforeTitle,
}) => {
  const [position, setPosition] = useState(50);
  const [isSliding, setIsSliding] = useState(false);
  const containerRef = useRef(null);

  const handleStart = (e) => {
    e.preventDefault();
    setIsSliding(true);
  };

  const handleMove = (e) => {
    if (!isSliding || !containerRef.current) return;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const clientX = e.clientX ?? e.touches?.[0]?.clientX;

    if (clientX === undefined) return;

    const x = clientX - rect.left;
    let newPosition = (x / rect.width) * 100;
    newPosition = Math.max(0, Math.min(newPosition, 100));
    setPosition(newPosition);
  };

  const handleEnd = () => {
    setIsSliding(false);
  };

  useEffect(() => {
    const handleMouseMove = (e) => handleMove(e);
    const handleTouchMove = (e) => handleMove(e);
    const handleMouseUp = () => handleEnd();

    if (isSliding) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isSliding]);

  return (
    <section className="cs_before_after_slider cs_style_1 position-relative">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div
          className="cs_before_after_overlay cs_heading_bg cs_bg_filed cs_headiong_bg"
          style={{ backgroundImage: `url(${bgImg})` }}
        ></div>
        <div className="cs_section_heading cs_style_1 cs_mb_47 text-center">
          <h3 className="cs_section_subtitle cs_fs_18 cs_white_color cs_semibold text-uppercase cs_mb_12 wow fadeInDown">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* SVG paths here */}
            </svg>
            {subTitle}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* SVG paths here */}
            </svg>
          </h3>
          <h2 className="cs_section_title cs_fs_50 cs_white_color mb-0 wow fadeInUp">
            {title}
          </h2>
        </div>
        <div className="cs_before_after-in">
          <div className="cs_before_after" ref={containerRef}>
            <div
              className="cs_after cs_single_slide cs_bg_filed"
              style={{ backgroundImage: `url(${beforeImg})` }}
            >
              <div className="cs_after_badge cs_accent_bg cs_fs_20 cs_semibold cs_white_color position-absolute">
                {afterTitle}
              </div>
            </div>
            <div
              className="cs_before cs_single_slide cs_bg_filed"
              style={{
                backgroundImage: `url(${afterImg})`,
                width: `${position}%`,
              }}
            >
              <div className="cs_before_badge cs_accent_bg cs_fs_20 cs_semibold cs_white_color position-absolute">
                {beforeTitle}
              </div>
            </div>
            <div
              className="cs_handle_before_after"
              style={{ left: `${position}%` }}
              onMouseDown={handleStart}
              onTouchStart={handleStart}
            >
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
