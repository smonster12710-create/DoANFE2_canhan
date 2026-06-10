import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

// 1. BentoTilt: Thành phần tạo hiệu ứng nghiêng
export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;
    const { left, top, width, height } = itemRef.current.getBoundingClientRect();
    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => setTransformStyle("");

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle, transition: "transform 0.3s ease-out" }}
    >
      {children}
    </div>
  );
};

// 2. CardContent: Thành phần tạo khung cho nội dung
const CardContent = ({ children }) => (
  <div className="flex size-full flex-col justify-between p-5 bg-black/60 backdrop-blur-[2px] border border-white/10 rounded-lg">
    {children}
  </div>
);

// 3. BentoCard: Thành phần thẻ hiển thị
export const BentoCard = ({ src, title, description }) => {
  return (
    <div className="relative size-full overflow-hidden rounded-md">
      <video
        src={src}
        loop
        muted
        autoPlay
        playsInline
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 size-full p-5 text-blue-50">
        <CardContent>
          <div>
            <h1 className="bento-title special-font text-2xl md:text-3xl font-bold">
              {title}
            </h1>
            {description && (
              <p className="mt-3 max-w-64 text-xs md:text-base opacity-80">
                {description}
              </p>
            )}
          </div>
        </CardContent>
      </div>
    </div>
  );
};

// 4. Features: Trang chính
const Features = () => (
  <section id="skills" className="bg-slate-900 pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-blue-50">My Technical Arsenal</p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          A robust stack tailored for building high-performance web applications.
        </p>
      </div>

      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="videos/feature-1.mp4"
          title={<>Web Devel<b>o</b>pment</>}
          description="Crafting responsive, dynamic, and user-centric web applications."
        />
      </BentoTilt>

      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="videos/feature-2.mp4"
            title={<>Fr<b>o</b>nt-end</>}
            description="Building interactive interfaces with HTML, CSS, and JS."
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard
            src="videos/feature-3.mp4"
            title={<>B<b>a</b>ck-end</>}
            description="Developing scalable server-side logic with PHP and Laravel."
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="videos/feature-4.mp4"
            title={<>Dat<b>a</b>bases & Tools</>}
            description="Managing MySQL, Git/GitHub, and development environments."
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <div className="flex size-full flex-col justify-between bg-yellow-300 p-5 rounded-lg">
            <h1 className="bento-title special-font max-w-64 text-black text-2xl">
              Alw<b>a</b>ys open to n<b>e</b>w st<b>a</b>cks.
            </h1>
            <TiLocationArrow className="m-5 scale-[5] self-end text-black" />
          </div>
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <video
            src="videos/feature-5.mp4"
            loop
            muted
            autoPlay
            playsInline
            className="size-full object-cover object-center rounded-lg"
          />
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;