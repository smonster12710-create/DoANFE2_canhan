import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Welcome to My Page
        </p>

        <AnimatedTitle
          title="Discov<b>e</b>r the art of <br /> modern web d<b>e</b>velopment"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p className="font-circular-web text-lg text-black text-center">
            The Journey of Code begins—turning abstract logic into reality.
          </p>
          <p className="max-w-xl mx-auto mt-3 font-circular-web text-base text-gray-500 text-center">
            I am a developer who loves building interactive web applications and
            immersive digital experiences, combining structured backend logic with
            modern, dynamic user interfaces.
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about2.jpg"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
