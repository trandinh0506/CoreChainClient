import React from "react";

import { Boxes } from "../../components/ui/background-boxes";
import { WorldMap } from "../../components/ui/world-map";

import TeamWork from "../../image/Influencer Marketing on Food Products.png";
import ImgBlockChain from "../../image/blockchain.png";

import { cn } from "../../lib/utils";
import { motion } from "motion/react";
import { IoLogoWindows } from "react-icons/io";
import { BsAndroid2, BsApple } from "react-icons/bs";
import Slider from "../../components/HomePage/Slider";
import Header from "../../components/HomePage/Header";
import Footer from "../../components/HomePage/Footer";



function LayoutDefault() {
  return (
    <>
      {/* Header  */}
      <div className="bg-[#053F7E] dark:bg-gray-900 dark:text-gray-100">

        <Header />

        <div className="py-10">
          <div className="dark:bg-gray-900 dark:text-gray-100 h-[500px] relative w-full overflow-hidden bg-[#074385] flex flex-col items-center justify-center rounded-lg">
            <div className="dark:bg-gray-900 dark:text-gray-100 absolute inset-0 w-full h-full bg-[#053F7E] z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

            <Boxes />
            <div className="container mx-auto flex items-center justify-between">
              <div className="max-w-xl w-1/2 mr-10 relative z-20">
                <h1
                  className={cn(
                    "md:text-5xl text-xl font-bold text-white relative z-20"
                  )}
                >
                  Get More Done with whitepace
                </h1>
                <p className="mt-6 mb-6 text-neutral-300 relative z-20">
                  Project management software that enables your teams to
                  collaborate, plan, analyze and manage everyday tasks
                </p>
                <a
                  href="/"
                  className="bg-[#4F9CF9] py-4 px-6 rounded-xl relative z-20"
                >
                  Try Whitepace free
                </a>
              </div>
              <div className="flex-1 max-w-xl">
                <img
                  className="w-full h-auto object-cover relative z-20"
                  src={TeamWork}
                  alt="TeamWork"
                />
              </div>
            </div>
          </div>
        </div>
        
      </div>

      {/* Hero  */}
      <div className="dark:bg-gray-900 dark:text-gray-100">
        <div className="container mx-auto">
          <div className=" py-40 dark:bg-gray-900 bg-white w-full">
            <div className="max-w-7xl mx-auto text-center">
              <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
                Remote{" "}
                <span className="text-neutral-400">
                  {"Connectivity".split("").map((word, idx) => (
                    <motion.span
                      key={idx}
                      className="inline-block"
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: idx * 0.04 }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </span>
              </p>
              <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
                Break free from traditional boundaries. Work from anywhere, at
                the comfort of your own studio apartment. Perfect for Nomads and
                Travellers.
              </p>
            </div>
            <WorldMap
              dots={[
                {
                  start: {
                    lat: 64.2008,
                    lng: -149.4937,
                  }, // Alaska (Fairbanks)
                  end: {
                    lat: 34.0522,
                    lng: -118.2437,
                  }, // Los Angeles
                },
                {
                  start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                  end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                },
                {
                  start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                  end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
                },
                {
                  start: { lat: 51.5074, lng: -0.1278 }, // London
                  end: { lat: 28.6139, lng: 77.209 }, // New Delhi
                },
                {
                  start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                  end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
                },
                {
                  start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                  end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
                },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Title Block Chain  */}
      <div className="dark:bg-gray-900 dark:text-gray-100">
        <div className="container mx-auto py-16 flex items-center justify-between">
          <div className="w-1/2 mr-16">
            <img
              src={ImgBlockChain}
              alt="Block Chain"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-6xl font-bold mb-8">
              Use Block Chain technology to secure information
            </h2>
            <p>
              Whitepace teams up with your favorite software. Integrate with
              over 1000+ apps with Zapier to have all the tools you need for
              your project success.
            </p>
          </div>
        </div>
      </div>

      <Slider />

      {/* Contain  */}
      <div className="dark:bg-gray-900 dark:text-gray-100 bg-[#043873] py-16">
        <div className="container mx-auto">
          <div className="text-white flex flex-col gap-y-2.5 text-center items-center justify-center">
            <h2 className="max-w-[500px] text-6xl font-bold mb-4">
              Try Whitepace today
            </h2>
            <p className="text-md mb-4 max-w-[350px]">
              Get started for free. Add your whole team as your needs grow.
            </p>
            <a href="/" className="bg-[#4F9CF9] py-4 px-10 rounded-xl">
              Try Whitepace free
            </a>
            <p>On a big team? Contact sales</p>
            <div className="flex items-center justify-center gap-x-2.5">
              <a href="/" className="text-6xl">
                <BsApple />
              </a>
              <a href="/" className="text-6xl">
                <IoLogoWindows />
              </a>
              <a href="/" className="text-6xl">
                <BsAndroid2 />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer  */}
      <Footer />
    </>
  );
}

export default LayoutDefault;
