import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} alt="contact-asset" className="size-full object-cover" />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      {/* Khối hộp lớn chứa hiệu ứng dải màu tối hòa quyện nền xanh */}
      <div className="relative rounded-lg bg-gradient-to-br from-slate-950 via-neutral-950 to-emerald-950/40 py-24 text-blue-50 sm:overflow-hidden border border-emerald-500/10 shadow-2xl">

        {/* CỤM ẢNH BÊN TRÁI: Đầy đủ 2 ảnh ghép lớp và sửa chuẩn đường dẫn src bỏ chữ public */}
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/img/77cb5c85a93d3571b931c0415d9dd19f.jpg"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="/img/bfbbee3f34062846e4818ab4b9e5ddb8.jpg"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        {/* CỤM ẢNH BÊN PHẢI: Khôi phục đủ 2 layer ảnh chồng để kích hoạt lại khung cắt góc nhọn */}
        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          {/* Ảnh lót nền phía sau */}
          <ImageClipBox
            src="/img/7a40ed8432dbf7f4d99f8e8dab147663.jpg"
            clipClass="absolute md:scale-125"
          />
          {/* Ảnh chính bọc class clip-path tạo góc cắt đặc trưng */}
          <ImageClipBox
            src="/img/7a40ed8432dbf7f4d99f8e8dab147663.jpg"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        {/* Khối text nội dung và nút bấm hành động */}
        <div className="flex flex-col items-center text-center relative z-10">
          <p className="mb-10 font-general text-[10px] uppercase tracking-widest text-emerald-400">
            Let's Connect
          </p>

          <AnimatedTitle
            title="Let&#39;s sh<b>a</b>pe the <br /> next big th<b>i</b>ng <br /> t<b>o</b>gether."
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          <Button
            title="Drop a Message"
            containerClass="mt-10 cursor-pointer bg-blue-50 text-black hover:bg-emerald-400 transition-colors duration-300 relative z-50 pointer-events-auto"
            onClick={() => {
              const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=giahuy.dev206@gmail.com&su=Hợp tác công việc";
              window.open(gmailUrl, "_blank");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;