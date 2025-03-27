import Image from "next/image";

const TestimonialCard = ({ image, alt, name, title, desc }) => {
  return (
    <div className="rounded-[20px] text-primary-black w-[300px] lg:w-[500px] flex flex-col justify-evenly  p-[20px] mb-[30px] lg:mb-[20px]  bg-accent-light">
      <div className="flex gap-[20px] lg:gap-[10px] ">
        <div className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-[50%] relative  overflow-hidden ">
          <Image src={image} alt={alt} layout="fill" objectFit="cover" />
        </div>
        <div className="text-black">
          <h4 className="text-[20px] font-[700] text-primary-black ">{name}</h4>
          <p className="font-[400] text-[15px]   ">{title}</p>
        </div>
      </div>
      <div>
        <blockquote className=" text-[16px] lg:text-[18px] leading- font-[500] ">
          {`"${desc}"`}
        </blockquote>
      </div>
    </div>
  );
};

export default TestimonialCard;
