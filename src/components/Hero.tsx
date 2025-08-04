"use client"

import { motion } from 'framer-motion'
import { BsArrowRight } from 'react-icons/bs'

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-center pt-16 pb-8 w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          <h1 className="text-[24px] sm:text-[36px] md:text-[42px] lg:text-[60px] font-[500] leading-[1.1] sm:leading-tight uppercase">
            <div className="mb-1 sm:mb-2 md:whitespace-nowrap">
              <span className="font-poppins">Built to </span>
              <span className="font-fluorescence">Work</span>
              <span className="font-poppins">. Built to </span>
              <span className="font-fluorescence">Wow</span>
              <span className="font-poppins">.</span>
            </div>
            <div>
              <span className="font-fluorescence">Buildsify</span>
              <span className="font-poppins">.</span>
            </div>
          </h1>

          <p className="mt-4 sm:mt-6 text-[13px] sm:text-[14px] md:text-[16px] text-white/80 max-w-[280px] sm:max-w-[400px] md:max-w-[500px] mx-auto px-4">
            The name says it all.
          </p>

          <button
            className="mt-6 sm:mt-8 md:mt-12 w-[180px] sm:w-[200px] md:w-[220px] flex items-center justify-center gap-2 mx-auto bg-white/10 hover:bg-sky-500/20 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all group text-sm sm:text-base"
          >
            Let's Connect
            <BsArrowRight className="transform group-hover:translate-x-2 transition-transform duration-700" size={18} />
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
