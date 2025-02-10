import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col justify-around sm:flex-row gap-12 text-center my-20 text-sm sm:text-sm md:text-base text-gray-700">
      <div className="">
        <img src={assets.exchange_icon} alt="" className="w-12 m-auto mb-5" />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400">We Offer Hassle Free Exchange Policy</p>
      </div>

      <div className="">
        <img src={assets.quality_icon} alt="" className="w-12 m-auto mb-5" />
        <p className="font-semibold">7 Days Return Policy</p>
        <p className="text-gray-400">We Provide 7 Days Free return Policy</p>
      </div>

      <div className="">
        <img src={assets.support_img} alt="" className="w-12 m-auto mb-5" />
        <p className="font-semibold">Best Customer Support </p>
        <p className="text-gray-400"> We Provide 24/7 Customer Support</p>
      </div>
    </div>
  );
};

export default OurPolicy;
