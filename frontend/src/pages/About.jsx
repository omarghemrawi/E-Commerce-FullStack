import { assets } from "../assets/assets";
import Title from "../components/Title";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-xl text-center pt-8 border-t">
        <Title text1="ABOUT" text2="US" />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full  md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Issos was born out of a passion for innavation and a desire to
            revolutionize the way people shop online. Our journay begin with a
            simoke idea to provide a platform where customers can easily
            discover , explore , and purchase a wide range of products from thr
            comfort of their homes.
          </p>
          <p>
            Since Our inception we ve worked tiressly to curate a diverse
            selection of high-quality products that cater to every taste and
            prefrence...
          </p>
          <b className="text-gray-800 ">Our Mission</b>
          <p>
            Our Mission at Issos is to empower customers with choice , convience
            and confidence...
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1="WHY" text2="CHOOSE US" />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border border-zinc-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            We meticulsouly select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>

        <div className="border border-zinc-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b>Convenience:</b>
          <p className="text-gray-600">
            With our user-friendly interface and hassle-fee ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div className="border border-zinc-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b>Exptional Customer Service:</b>
          <p className="text-gray-600">
            Our team of dedicated professionals is here to assist you every step
            of the way, ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
