"use client"

import { ReviewCarousel } from './ReviewCarousel'

const reviewsData = [
  {
    name: "Raja Saeed Akmal",
    company: "taxiritje.nl",
    review: "Working with Asim was a game-changer for our taxi business. He understood our requirements from day one and built exactly what we needed. The booking system is smooth, customers love it, and we've seen a 40% increase in online bookings. Worth every penny!",
    rating: 5,
    initials: "RS"
  },
  {
    name: "Reginald Wayne Sibley",
    company: "Business Consultant",
    review: "I needed someone who could automate our repetitive workflows, and Asim delivered beyond expectations. What used to take my team 3 hours now takes 15 minutes. The ROI was immediate. Professional, responsive, and knows his stuff.",
    rating: 5,
    initials: "RW"
  },
  {
    name: "Dixit Patel",
    company: "AriseJewel",
    review: "Asim and Nasir built our jewelry e-commerce site from scratch. Beautiful design, fast loading, and the payment integration works flawlessly. Our online sales tripled in the first month. These guys are the real deal - highly recommend for any e-commerce project.",
    rating: 5,
    initials: "DP"
  },
  {
    name: "Finnian Christian",
    company: "Upwork Client",
    review: "Amazing experience working with Asim. He's creative, adaptable and has excellent communication skills. Will do more work together.",
    rating: 5,
    initials: "FC"
  }
]

const ReviewSection = () => {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden border-t border-b border-purple-400/20">
      {/* Multi-stop purple gradient background */}
      <div className="absolute inset-0 z-0" style={{
        background: 'linear-gradient(180deg, rgba(147, 51, 234, 0.25) 0%, rgba(168, 85, 247, 0.2) 15%, rgba(139, 92, 246, 0.15) 25%, rgba(124, 58, 237, 0.1) 35%, rgba(88, 28, 135, 0.08) 50%, rgba(124, 58, 237, 0.1) 65%, rgba(139, 92, 246, 0.15) 75%, rgba(168, 85, 247, 0.2) 85%, rgba(147, 51, 234, 0.25) 100%)'
      }}></div>
      
      {/* Blurred gradient overlays for depth */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px] z-0"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-violet-600/15 rounded-full blur-[80px] z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-48 bg-indigo-500/10 blur-[60px] rotate-45 z-0"></div>
      
      {/* Content container */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Upwork & Fiverr Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center bg-purple-500/10 border border-purple-400/20 rounded-full px-4 sm:px-6 py-2 sm:py-3">
              <img src="/logos/upwork-white.svg" alt="Upwork" className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
              <img src="/logos/fiverr-white.svg" alt="Fiverr" className="h-5 w-5 sm:h-6 sm:w-6 mr-3" />
              <p className="text-white/80 text-sm sm:text-base font-medium">Verified Reviews from Upwork, Fiverr & Direct Clients</p>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-400 font-young-serif italic mb-6">
              Client Reviews
            </h2>
            <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto">
              What our clients say about working with us
            </p>
          </div>
          
          {/* Review Carousel */}
          <ReviewCarousel reviews={reviewsData} />
        </div>
      </div>
    </section>
  )
}

export default ReviewSection