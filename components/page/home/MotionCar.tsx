"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import carImg from "@/public/assets/hero-car.svg";

export default function MotionCar() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="flex justify-center lg:justify-end"
    >
      <Image
        src={carImg}
        alt="Hero Car"
        priority
        className="h-auto w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
      />
    </motion.div>
  );
}