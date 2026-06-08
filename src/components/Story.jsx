import gsap from "gsap";
import { useRef } from "react";

import Button from "./Button";
import AnimatedTitle from "./AnimatedTitle";

const FloatingImage = () => {
  const frameRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <div id="projects" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        {/* Chữ nhỏ trên cùng giới thiệu chương mục */}
        <p className="font-general text-sm uppercase md:text-[10px] tracking-widest">
          Featured Showcases
        </p>

        <div className="relative size-full">
          {/* Tiêu đề lớn lồng hiệu ứng text đặc trưng */}
          <AnimatedTitle
            title="The st<b>o</b>ries told <br /> through m<b>y</b> projects"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />

          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  src="/img/entrance.webp" // Mẹo: Bạn nên thay ảnh này bằng một bức ảnh Mockup tổng hợp hoặc ảnh giao diện Social Network/Game đẹp nhất của bạn nhé!
                  alt="featured-project-mockup"
                  className="object-contain"
                />
              </div>
            </div>

            {/* SVG filter cho hiệu ứng bo góc mượt của mask */}
            <svg
              className="invisible absolute size-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="flt_tag">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="flt_tag"
                  />
                  <feComposite
                    in="SourceGraphic"
                    in2="flt_tag"
                    operator="atop"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>

        {/* Khối mô tả dự án và Nút bấm hành động */}
        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start leading-relaxed">
              Every system has an architecture, and every application tells a story.
              Dive deeper into my codebases to explore full-stack solutions, creative UI
              mechanics, and robust data workflows.
            </p>

            <Button
              id="realm-btn"
              title="Explore All Projects"
              containerClass="mt-5"
              onClick={() => {
                // Mẹo: Bạn có thể viết logic mở link GitHub hoặc cuộn đến danh sách dự án chi tiết ở đây
                window.open("https://github.com/tai-khoan-github-cua-ban", "_blank");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingImage;