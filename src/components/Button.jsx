import clsx from "clsx";

const Button = ({ id, title, containerClass, onClick }) => {
  return (
    <button
      id={id}
      onClick={onClick} // Đảm bảo onClick đã được gắn ở đây
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}
    >
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        {/* 👇 ĐỔI HẾT CÁC THẺ DIV TRONG NÀY THÀNH SPAN */}
        <span className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[160%] group-hover:skew-y-12">
          {title}
        </span>
        <span className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {title}
        </span>
      </span>
    </button>
  );
};

export default Button;