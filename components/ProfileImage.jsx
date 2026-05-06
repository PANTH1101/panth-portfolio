"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProfileImage() {
  return (
    <div className="relative flex h-full items-center justify-center">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Purple Glow */}
        <motion.div
          className="absolute h-[400px] w-[400px] rounded-full bg-purple-500/30 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Indigo Glow */}
        <motion.div
          className="absolute h-[350px] w-[350px] rounded-full bg-indigo-500/30 blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.3, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>

      {/* Profile Image Container */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Animated Ring */}
        <motion.div
          className="absolute -inset-4 rounded-full bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-purple-500/20"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

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
