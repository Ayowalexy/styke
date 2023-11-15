"use client";
import Image from "next/image";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { motion } from "framer-motion";
import { useMediaQuery } from "../../public/hooks/useMediaquery";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const arr = [
  {
    image: "/images/chef.png",
    tag: "COOK/CHEF",
    qty: "12 Jobs",
  },
  {
    image: "/images/mother.png",
    tag: "NANNIES",
    qty: "8 Jobs",
  },
  {
    image: "/images/engineer.png",
    tag: "ELECTRICIAN",
    qty: "5 Jobs",
  },
  {
    image: "/images/business-man.png",
    tag: "DRIVER",
    qty: "7 Jobs",
  },
  {
    image: "/images/chef.png",
    tag: "COOK/CHEF",
    qty: "12 Jobs",
  },
  {
    image: "/images/mother.png",
    tag: "NANNIES",
    qty: "8 Jobs",
  },
];

export default function Home() {
  const matches = useMediaQuery("(min-width: 1024px)");
  const desktop = useMediaQuery("(max-width: 768px)");
  const tab = useMediaQuery("(min-width: 768px)");


  const handleNext = () => {
    const nextBtn = document.querySelector(
      ".swiper-button-next"
    ) as HTMLElement;
    const clickEvent = new Event("click");
    nextBtn.dispatchEvent(clickEvent);
  };

  const handlePrev = () => {
    const prevBtn = document.querySelector(
      ".swiper-button-prev"
    ) as HTMLElement;
    const clickEvent = new Event("click");
    prevBtn.dispatchEvent(clickEvent);
  };
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full">
        <div className="w-full p-4 lg:p-8 lg:p-12 h-[100vh] bg-hero-image bg-cover bg-center bg-no-repeat">
          {matches ? (
            <div className="flex justify-between items-center">
              <div className="bg-logo w-[299px] m-[-20px] h-[115px] bg-contain bg-no-repeat bg-center" />
              <div className="flex justify-center items-center gap-6 font-regular text-lg text-white">
                <Link href="#">Get Help</Link>
                <Link href="#">Tasks</Link>
                <Link href="#">About</Link>
                <button className="h-[60px] px-8 bg-primary rounded-sm">
                  Become a Tasker
                </button>
              </div>
            </div>
          ) : (
            <div className="w-full jusitfy-between items-center">
              <div className="bg-logo w-[117px] m-[-20px] h-[33px] bg-contain bg-no-repeat bg-center" />
              <div className="flex gap-[5px] flex-col justify-center items-end">
                <motion.div className="w-[35px] h-[2px] bg-white" />
                <motion.div className="w-[35px] h-[2px] bg-white" />
                <motion.div className="w-[35px] h-[2px] bg-white" />
              </div>
            </div>
          )}
          <div className="w-full h-[84vh] flex justify-center items-center">
            <div className="flex flex-col w-full lg:max-w-[1200px]  text-white justify-center items-center">
              <h1 className="font-bold leading-[50px] lg:leading-[75px] w-full lg:w-[70%] text-center text-[50px] lg:text-[80px]">
                Hire Domestic Workers in Nigeria
              </h1>
              <p className="font-regular text-lg text-center py-6 lg:py-10 w-full lg:w-[50%]">
                Styke is a dynamic and user-centric platform designed to
                revolutionize the way individuals delegate and fulfill daily
                tasks.
              </p>
              <div className="relative gap-4 w-full flex justify-center items-center flex-col lg:w-[60%]">
                <div className="top-0 left-0 absolute m-[18px]">
                  <BsSearch fill="rgba(0,0,0,0.5)" size={25} />
                </div>
                <input
                  placeholder="I need help with..."
                  className="h-[60px] outline-none border-none text-black pl-14 w-full bg-white rounded-full "
                />
                <button className="inline lg:absolute right-0 top-0 rounded-full h-[60px] w-[200px] bg-primary">
                  Get Help Today
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* App Download */}
        <div className="w-full flex-col flex-wrap lg:flex-row h-[150px] bg-white flex justify-center items-center">
          <h3 className="font-semibold text-[25px] text-black">
            DOWNLOAD APP ON
          </h3>
          <div className="flex justify-center items-center">
            <div className="lg:w-[253px] w-[150px] h-[40px] lg:h-[51px] bg-[url('/images/svgs/google.svg')] bg-contain bg-no-repeat bg-center" />
            <div className="lg:w-[253px] w-[150px] h-[40px] lg:h-[51px] bg-[url('/images/svgs/apple.svg')] bg-contain bg-no-repeat bg-center" />
          </div>
        </div>
        {/* Carousel */}
        <div className="w-full flex justify-center text-white items-center h-fit pt-20 bg-[#18335B]">
          <div className="lg:w-[80%] lg:max-w-[1200px] w-[95%] flex flex-col justify-center items-center">
            <h3 className="font-semibold text-[25px] lg:text-[30px] ">
              POPULAR CATEGORIES
            </h3>
            <p className="font-light text-center mt-[-10px] text-sm w-[70%] lg:w-full pb-6 lg:pb-0 lg:text-lg">
              Find candidates that suit your home, office and hotel needs
            </p>
            {tab ? (
              <div className="w-full py-20 flex justify-between items-center gap-4">
                <div onClick={handlePrev} className="cursor-pointer">
                  <MdArrowBackIos size={50} fill="#fff" />
                </div>
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={10}
                  slidesPerView={desktop ? 2 : 4}
                  navigation
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  {arr.map((element) => (
                    <SwiperSlide className="w-1/4">
                      <div className="w-full rounded-lg overflow-hidden">
                        <div
                          style={{ backgroundImage: `url(${element.image})` }}
                          className="w-full bg-cover bg-no-repeat bg-center h-[300px]"
                        ></div>
                        <div className="w-full text-black text-center h-[80px] bg-white">
                          <p className="pt-[10px] font-semibold text-xl">
                            {element.tag}
                          </p>
                          <p className="font-light text-lg">({element.qty})</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div onClick={handleNext} className="cursor-pointer">
                  <MdArrowForwardIos size={50} fill="#fff" />
                </div>
              </div>
            ) : (
              <div className="w-full">
                {arr.map((element) => (
                  <div className="w-full mb-6 rounded-lg overflow-hidden">
                    <div
                      style={{ backgroundImage: `url(${element.image})` }}
                      className="w-[95%] bg-cover bg-no-repeat bg-center h-[350px] lg:h-[300px]"
                    ></div>
                    <div className="w-full text-black text-center h-[80px] bg-white">
                      <p className="pt-[10px] font-semibold text-xl">
                        {element.tag}
                      </p>
                      <p className="font-light text-lg">({element.qty})</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* What we do */}
        <div className="w-full bg-white bg-[url('/images/bg.png')] bg-cover bg-center bg-no-repeat h-fit lg:h-[420vh]">
          <div className="w-full hidden h-[100vh] lg:flex justify-center items-end">
            <div className="bg-[url('/images/svgs/arrow.svg')] w-[50px] h-[50px] bg-contain bg-no-repeat" />
          </div>
          <div className="w-full text-black pt-20 justify-center flex-col items-center flex">
            <p className="font-bold text-[40px] text-black">WHAT WE DO</p>
            <div className="w-[100px] h-[2px] bg-black mt-4" />
            <div className="flex p-4 lg:p-0 flex-col lg:flex-row mt-20 justify-center gap-[100px] items-center">
              <div className="w-full order-2 lg:order-1 lg:w-[35%]">
                <div className="w-full">
                  <p className="font-regular text-[30px]">Simplified</p>
                  <h1 className="text-[45px] mt-[-10px] font-regular">
                    <span className="font-bold text-[#18335B] italic">
                      Task
                    </span>{" "}
                    Assignment
                  </h1>
                  <div className="w-[100px] h-[2px] bg-black" />
                  <p className="font-light pt-4 text-sm">
                    We provide an intuitive and user-friendly platform that
                    enables clients to effortlessly post tasks, set
                    requirements, and receive bids from interested Taskers.
                  </p>
                </div>
                <div className="w-full pt-8">
                  <p className="font-regular text-[30px]">Efficient</p>
                  <h1 className="text-[45px] mt-[-10px] font-regular">
                    <span className="font-bold text-[#18335B] italic">
                      Tasker
                    </span>{" "}
                    Selection
                  </h1>
                  <div className="w-[100px] h-[2px] bg-black" />
                  <p className="font-light  pt-4 text-sm">
                    Through a transparent bidding system, clients will have the
                    freedom to evaluate Tasker profiles, ratings, and reviews
                    before making an informed decision on task assignment.
                  </p>
                </div>
              </div>
              <div className="w-full order-1 lg:order-2 lg:w-[37%] bg-[url('/images/tasker1.png')] bg-no-repeat bg-center bg-cover h-[470px]" />
            </div>

            {/* Section 2 */}
            <div className="flex p-4  lg:p-0 flex-col lg:flex-row mt-20 justify-center gap-[100px] items-center">
              <div className="w-full  order-1 lg:order-1 lg:w-[37%] bg-[url('/images/tasker1.png')] bg-no-repeat bg-center bg-cover h-[490px]" />
              <div className="w-full order-2  lg:order-2 lg:w-[35%]">
                <div className="w-full">
                  <p className="font-regular text-[30px]">Simplified</p>
                  <h1 className="text-[45px] mt-[-10px] font-regular">
                    <span className="font-bold text-[#18335B] italic">
                      Task
                    </span>{" "}
                    Assignment
                  </h1>
                  <div className="w-[100px] h-[2px] bg-black" />
                  <p className="font-light  pt-4 text-sm">
                    We provide an intuitive and user-friendly platform that
                    enables clients to effortlessly post tasks, set
                    requirements, and receive bids from interested Taskers.
                  </p>
                </div>
                <div className="w-full pt-8">
                  <p className="font-regular text-[30px]">Efficient</p>
                  <h1 className="text-[45px] mt-[-10px] font-regular">
                    <span className="font-bold text-[#18335B] italic">
                      Tasker
                    </span>{" "}
                    Selection
                  </h1>
                  <div className="w-[100px] h-[2px] bg-black" />
                  <p className="font-light pt-4 text-sm">
                    Through a transparent bidding system, clients will have the
                    freedom to evaluate Tasker profiles, ratings, and reviews
                    before making an informed decision on task assignment.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="flex p-4 lg:p-0 flex-col lg:flex-row mt-20 justify-center gap-[100px] items-center">
              <div className="w-full order-2 lg:order-1 lg:w-[35%]">
                <div className="w-full">
                  <p className="font-regular text-[30px]">Simplified</p>
                  <h1 className="text-[45px] mt-[-10px] font-regular">
                    <span className="font-bold text-[#18335B] italic">
                      Task
                    </span>{" "}
                    Assignment
                  </h1>
                  <div className="w-[100px] h-[2px] bg-black" />
                  <p className="font-light pt-4 text-sm">
                    We provide an intuitive and user-friendly platform that
                    enables clients to effortlessly post tasks, set
                    requirements, and receive bids from interested Taskers.
                  </p>
                </div>
                <div className="w-full pt-8">
                  <p className="font-regular text-[30px]">Efficient</p>
                  <h1 className="text-[45px] mt-[-10px] font-regular">
                    <span className="font-bold text-[#18335B] italic">
                      Tasker
                    </span>{" "}
                    Selection
                  </h1>
                  <div className="w-[100px] h-[2px] bg-black" />
                  <p className="font-light  pt-4 text-sm">
                    Through a transparent bidding system, clients will have the
                    freedom to evaluate Tasker profiles, ratings, and reviews
                    before making an informed decision on task assignment.
                  </p>
                </div>
              </div>
              <div className="w-full order-1 lg:order-2 lg:w-[37%] bg-[url('/images/tasker1.png')] bg-no-repeat bg-center bg-cover h-[470px]" />
            </div>
          </div>
          {/* Footer */}
          <div className="bg-[#18335B] flex flex-col justify-center items-center mt-[150px] lg:mt-[300px] w-full h-[400px]">
            <div className="w-[299px] h-[115px] bg-contain bg-no-repeat bg-center bg-logo" />
            <div className="flex flex-col lg:flex-row gap-2 w-full justify-center items-center">
                  <input placeholder="Email address" className="h-[45px] lg:h-[60px] w-[95%] lg:w-[600px] bg-white rounded-lg text-black pl-4" />
                  <button className="h-[45px] lg:h-[60px] w-[180px] rounded-lg bg-[#4285F4] text-lg font-light">Subscribe Now</button>
            </div>
            <div className="flex  justify-center items-center gap-4 py-6">
              <div className="w-[30px] h-[30px] bg-[url('/images/svgs/twitter.svg')] bg-contain bg-no-repeat" />
              <div className="w-[30px] h-[30px] bg-[url('/images/svgs/instagram.svg')] bg-contain bg-no-repeat" />
              <div className="w-[30px] h-[30px] bg-[url('/images/svgs/facebook.svg')] bg-contain bg-no-repeat" />
            </div>
            <p>&#169; 2023 by Styke. All right reserved!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
