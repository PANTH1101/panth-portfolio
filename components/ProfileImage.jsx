"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProfileImage() {
  return (
    <div className="relative flex h-full items-center justify-center">
      {/* Background Glow Effects - Simplified */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Single combined glow */}
        <div className="absolute h-[400px] w-[400px] rounded-full bg-gradient-to-br from-purple-500/20 via-indigo-500/20 to-purple-500/20 blur-3xl animate-pulse" />
      </div>

      {/* Profile Image Container */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Floating Image Container */}
        <motion.div
          className="relative overflow-hidden rounded-full border border-white/10 shadow-2xl"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.05,
          }}
        >
          {/* Image with scale effect */}
          <div className="relative h-[280px] w-[280px] sm:h-[350px] sm:w-[350px] lg:h-[420px] lg:w-[420px]">
            <Image
              src="/panth.png"
              alt="Profile"
              fill
              className="scale-110 object-cover"
              priority
            />
            
            {/* Gradient Overlay for futuristic feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
