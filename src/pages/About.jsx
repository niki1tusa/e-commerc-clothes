import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsLatterBox from "../components/NewsLatterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} className="w-full md:max-w-[450px]" />

        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Welcome to Forever, a place where style meets quality! We are a team
            of passionate professionals who believe that clothes should not only
            look great, but also give comfort in every movement.
          </p>
          <p>
            We believe in sustainable production and caring for the planet. We
            are happy to help you express yourself through stylish and
            high-quality clothes!
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, ea!</p>
        </div>
      </div>
      <div className="text-4xl py-4 ">
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
<b className="text-gray-800">Quality Assuance:</b>
<p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quia!</p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
<b className="text-gray-800">Comfort:</b>
<p className="text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, facere.</p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
<b className="text-gray-800">Custom service:</b>
<p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, magnam.</p>
          </div>
      </div>
      <NewsLatterBox/>
    </div>
  );
};

export default About;
