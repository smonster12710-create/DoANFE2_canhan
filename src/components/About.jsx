import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // 1. Hàm tạo mã màu HEX ngẫu nhiên hoàn toàn
    const getRandomColor = () => {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };

    // Khởi tạo màu đầu tiên cho biến CSS custom
    const initialColor = getRandomColor();
    containerRef.current.style.setProperty("--grid-color", initialColor);

    // Đối tượng trung gian để GSAP có thể tween (chuyển mượt) giá trị màu
    const colorObj = { color: initialColor };

    // 2. Hiệu ứng tự động thay đổi màu TỔNG THỂ (Đồng bộ tất cả các ô)
    gsap.to(colorObj, {
      color: () => getRandomColor(), // Chọn màu mới tinh cho chu kỳ tiếp theo
      duration: 3,                  // Thời gian chuyển màu giữa các lượt (3 giây)
      repeat: -1,                   // Lặp vô hạn
      yoyo: true,                   // Đổi màu xong mờ về rồi đổi tiếp màu khác
      ease: "power1.inOut",
      repeatRefresh: true,          // Ép tính toán lại màu mới ở mỗi vòng lặp (Không cần F5)
      onUpdate: () => {
        // Cập nhật màu đồng bộ vào biến CSS chung khi đang chuyển màu
        if (containerRef.current) {
          containerRef.current.style.setProperty("--grid-color", colorObj.color);
        }
      }
    });

    // 3. Hiệu ứng gợn sóng (stagger) chạy đồng bộ theo biến màu chung
    gsap.to(".grid-square", {
      backgroundColor: "var(--grid-color)", // Ăn theo màu tổng thể duy nhất
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: {
        grid: "auto",
        from: "center",
        amount: 1.2, // Hiệu ứng lan tỏa từ tâm cực mượt với MỘT MÀU DUY NHẤT
      }
    });

    // --- 4. HIỆU ỨNG PHÓNG TO ẢNH KHI CUỘN (Giữ nguyên của bạn) ---
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
  }, { scope: containerRef });

  return (
    <div
      id="about"
      ref={containerRef}
      className="min-h-screen w-screen bg-[#09090b] relative overflow-hidden"
    >
      {/* LỚP NỀN LƯỚI Ô VUÔNG ĐỔI MÀU ĐỒNG BỘ */}
      <div className="absolute inset-0 pointer-events-none grid grid-cols-6 md:grid-cols-12 opacity-40">
        {Array.from({ length: 144 }).map((_, index) => (
          <div
            key={index}
            className="grid-square border-[0.5px] border-white/5 w-full h-full aspect-square transition-colors duration-300"
          />
        ))}
      </div>

      {/* NỘI DUNG CHÍNH */}
      {/* NỘI DUNG CHÍNH */}
      {/* Thay đổi: Đổi pb-32 thành pb-20 để giảm khoảng trống thừa bên dưới không cần thiết */}
      <div className="relative z-10 mt-36 pb-20 flex flex-col items-center gap-5 px-4">
        <p className="font-general text-sm uppercase md:text-[10px] text-gray-400">
          Welcome to My Page
        </p>

        <AnimatedTitle
          title="Coding the next generation <br /> of interactive w<b>e</b>b"
          containerClass="mt-5 !text-white text-center"
        />

        <div className="about-subtext">
          <p className="font-circular-web text-lg text-gray-200 text-center">
            Hi, I'm Gia Huy — a Software Engineer based in Di An/Binh Duong, Vietnam, dedicated to shaping premium digital experiences.
          </p>
          <p className="max-w-xl mx-auto mt-3 font-circular-web text-base text-gray-400 text-center">
            Specializing in Full-stack web development, I combine structured, scalable logic with smooth visual interactions. I treat code as a craft, focusing on turning complex concepts into seamless, high-performance applications.
          </p>

          {/* CHÈN DÒNG TRẠNG THÁI MỚI VÀO ĐÂY */}
          <p className="max-w-md mx-auto mt-10 font-mono text-xs uppercase tracking-wider text-amber-400/80 text-center border border-amber-400/20 bg-amber-400/5 py-2 px-4 rounded-full backdrop-blur-sm">
            ⚡ Currently available for new opportunities & freelance projects.
          </p>
        </div>
      </div>

      <div className="h-screen w-screen relative z-10 mt-[-6rem]" id="clip">
        <div className="mask-clip-path about-image mx-auto">
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