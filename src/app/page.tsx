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
import { useState } from "react";

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
  const [showMenu, setShowMenu] = useState<boolean>(false);

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
            <div className="w-full px-6 p-2 fixed z-50 jusitfy-between items-center">
              <motion.div
                animate={{ opacity: showMenu ? 0 : 1 }}
                className="bg-logo w-[117px] ml-[-60px] m-[-20px] h-[33px] bg-contain bg-no-repeat bg-center"
              />
              <div className="w-full">
                <div
                  onClick={() => setShowMenu((prev) => !prev)}
                  className="flex gap-[5px] flex-col justify-center items-end"
                >
                  <motion.div
                    animate={{
                      rotate: showMenu ? "45deg" : "0deg",
                    }}
                    className="origin-left w-[35px] h-[2px] bg-white"
                  />
                  <motion.div
                    animate={{ opacity: showMenu ? 0 : 1 }}
                    className="w-[35px] h-[2px] bg-white"
                  />
                  <motion.div
                    animate={{
                      rotate: showMenu ? "-45deg" : "0deg",
                      marginTop: showMenu ? "12px" : "0px",
                    }}
                    className="origin-left w-[35px] h-[2px] bg-white"
                  />
                </div>
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
          <div className="w-full flex-col h-fit py-20 lg:py-0 lg:h-[100vh] flex justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <p className="font-bold text-[40px] text-black">ABOUT US</p>
              <div className="w-[100px] h-[2px] bg-black mt-4" />
            </div>
            <div className="flex flex-col lg:flex-row justify-center gap-20 py-10 lg:max-w-[1200px] items-center w-full lg:w-[85%]">
              <div className="lg:w-1/2 w-full h-[260px] lg:h-[450px] bg-[url('/images/group.png')] bg-contain bg-no-repeat bg-center"></div>
              <div className="font-light text-lg w-[95%] text-center lg:text-left lg:w-1/2">
                Styke is a dynamic and user-centric platform designed to 
                revolutionize the way individuals and businesses delegate and
                fulfill daily tasks. The platform serves as an intermediary,
                connecting clients seeking assistance with a wide array of tasks
                to taskers with the requisite skills and expertise. By
                facilitating seamless collaboration and secure payment
                processing, Styke aims to empower both clients and taskers to
                streamline their daily routines and optimize task management.
              </div>
            </div>
            <div className="bg-[url('/images/svgs/arrow.svg')] w-[50px] h-[50px] bg-contain bg-no-repeat" />
          </div>
          <div className="w-full text-black pt-20 justify-center flex-col items-center flex">
            <p className="font-bold text-[40px] text-black">WHAT WE DO</p>
            <div className="w-[100px] h-[2px] bg-black mt-4" />
            <div className="flex p-4 lg:p-0 flex-col lg:flex-row mt-20 justify-between  items-center">
              <div className="w-full order-2 lg:order-1 lg:w-[45%]">
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
              <div className="w-full order-1 lg:order-2 lg:w-[37%] bg-[url('/images/tasker1.png')] bg-no-repeat bg-center bg-contain h-[470px]" />
            </div>

            {/* Section 2 */}
            <div className="flex p-4  lg:p-0 flex-col lg:flex-row mt-20 justify-between items-center">
              <div className="w-full  order-1 lg:order-1 lg:w-[37%] bg-[url('/images/tasker2.png')] bg-no-repeat bg-center bg-contain h-[490px]" />
              <div className="w-full order-2  lg:order-2 lg:w-[45%]">
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
            <div className="flex p-4 lg:p-0 flex-col lg:flex-row mt-20 justify-between items-center">
              <div className="w-full order-2 lg:order-1 lg:w-[45%]">
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
              <div className="w-full order-1 lg:order-2 lg:w-[37%] bg-[url('/images/tasker3.png')] bg-no-repeat bg-center bg-contain h-[470px]" />
            </div>
          </div>
          {/* Footer */}
          <div className="bg-[#18335B] flex flex-col justify-center items-center mt-[150px] lg:mt-[300px] w-full h-[400px]">
            <div className="w-[299px] h-[115px] bg-contain bg-no-repeat bg-center bg-logo" />
            <div className="flex flex-col lg:flex-row gap-2 w-full justify-center items-center">
              <input
                placeholder="Email address"
                className="h-[45px] lg:h-[60px] w-[95%] lg:w-[600px] bg-white rounded-lg text-black pl-4"
              />
              <button className="h-[45px] lg:h-[60px] w-[180px] rounded-lg bg-[#4285F4] text-lg font-light">
                Subscribe Now
              </button>
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

      <motion.div
        initial={{ top: "-100vh" }}
        animate={{
          top: showMenu ? "0" : "-100vh",
          transition: {
            ease: [0.965, 0.09, 0.16, 0.835],
            duration: 0.8,
          },
        }}
        className="w-full text-white font-light text-[20px] pt-20 pl-10 h-[100vh] fixed top-0 left-0 z-40 bg-black"
      >
        <motion.div
          initial={{ translateX: 20, opacity: 0 }}
          animate={{
            translateX: showMenu ? 20 : 0,
            opacity: showMenu ? 1 : 0,
            transition: {
              delay: 1,
            },
          }}
          className="pb-4"
        >
          Get help
        </motion.div>
        <motion.div
          initial={{ translateX: 20, opacity: 0 }}
          animate={{
            translateX: showMenu ? 20 : 0,
            opacity: showMenu ? 1 : 0,
            transition: {
              delay: 1.3,
            },
          }}
          className="pb-4"
        >
          Tasks
        </motion.div>
        <motion.div
          initial={{ translateX: 20, opacity: 0 }}
          animate={{
            translateX: showMenu ? 20 : 0,
            opacity: showMenu ? 1 : 0,
            transition: {
              delay: 1.5,
            },
          }}
          className="pb-4"
        >
          Abount
        </motion.div>
        <motion.button
          initial={{ translateX: -10 }}
          className="pb-4 absolute left-0 bottom-10 w-[95%] ml-2 h-[40px] bg-primary"
        >
          Become a Tasker
        </motion.button>
      </motion.div>
    </div>
  );
}
