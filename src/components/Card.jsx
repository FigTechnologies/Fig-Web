import { merriweather } from "@/app/fonts";

const style = {
  boxShadow: "4px 4px 4px 4px #6A095814",
//   backgroundColor: "rgba(252, 239, 239, 0.8)",
};
const Card = ({img, title, desc}) => {
  return (
    <div
      style={style}
      className="p-[20px] border lg:min-h-[250px]  border-[#3A4262] rounded-[20px] bg-purple-900 hover:bg-white hover:text-[#050914] text-[#F1F2F8] transition-all duration-500  "
    >
      {img}
      <div className="mt-[15px]">
        <h4
          className={`${merriweather.className} text-[20px] leading-[1.2em] mb-2`}
        >
          {title}
        </h4>
        <p className="text-[12px] ">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default Card;
