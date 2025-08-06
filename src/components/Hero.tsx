"use client"

import { motion } from 'framer-motion'
import { BsArrowRight } from 'react-icons/bs'

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      {/* Grid pattern background */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(147, 51, 234, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      ></div>
      
      {/* Grid fade effect from top and bottom */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-transparent via-transparent to-black" style={{
        background: 'linear-gradient(to bottom, black 0%, transparent 25%, transparent 60%, black 100%)'
      }}></div>
      
      {/* Purple gradient overlay */}
      <div className="absolute inset-0 z-0" style={{
        background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.15) 0%, rgba(88, 28, 135, 0.1) 25%, rgba(0, 0, 0, 0.8) 50%, rgba(88, 28, 135, 0.1) 75%, rgba(147, 51, 234, 0.15) 100%)'
      }}></div>
      
      {/* Optimized purple blur line - tilted behind content */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-48 bg-purple-500/20 -translate-x-1/2 -translate-y-1/2 z-0 blur-[80px] rotate-[-25deg]"></div>

      <div className="text-center pt-16 pb-8 w-full max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          <div className="mb-4">
            <div className="inline-flex items-center bg-purple-500/10 border border-purple-400/20 rounded-full px-3 sm:px-4 py-2">
              <p className="text-white/80 text-xs sm:text-sm mr-2 sm:mr-4 hero-badge-text">After Upwork and Fiverr, now on our own website.</p>
              <a href="#" className="mr-1 sm:mr-2">
                <img src="/logos/upwork-white.svg" alt="Upwork" className="h-4 w-4 sm:h-6 sm:w-6" />
              </a>
              <a href="#">
                <img src="/logos/fiverr-white.svg" alt="Fiverr" className="h-4 w-4 sm:h-6 sm:w-6" />
              </a>
            </div>
          </div>
          <h1 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-tight hero-title">
            <span className="text-purple-400 font-young-serif italic">Turning Ambitions into Applications.</span>
            <br />
            <span className="font-poppins">Welcome to Buildsify.</span>
          </h1>

          <div className="mt-8 flex flex-wrap justify-center gap-1 sm:gap-3">
            <div className="bg-purple-500/10 border border-purple-400/20 rounded-full px-2 sm:px-4 py-1 sm:py-2">
              <p className="text-white/80 text-xs sm:text-sm hero-service-text">Custom Web Development</p>
            </div>
            <div className="bg-purple-500/10 border border-purple-400/20 rounded-full px-2 sm:px-4 py-1 sm:py-2">
              <p className="text-white/80 text-xs sm:text-sm hero-service-text">AI Workflow Optimization</p>
            </div>
            <div className="bg-purple-500/10 border border-purple-400/20 rounded-full px-2 sm:px-4 py-1 sm:py-2">
              <p className="text-white/80 text-xs sm:text-sm hero-service-text">LinkedIn Profile Optimization</p>
            </div>
          </div>

          <button
            className="mt-10 flex items-center justify-center gap-2 mx-auto bg-purple-500/80 text-white px-4 sm:px-8 py-2 sm:py-4 rounded-full transition-colors transition-shadow group text-sm sm:text-lg font-semibold hover:bg-purple-500/10 hover:border hover:border-purple-400/20 hover:text-white hero-button-text"
          >
            Schedule a call
            <BsArrowRight className="transform group-hover:translate-x-2 transition-transform duration-300" size={16} />
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
