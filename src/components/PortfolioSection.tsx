"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

const portfolioItems = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Modern e-commerce solution with AI recommendations",
    image: "/work1.jpg",
    tags: ["React", "Node.js", "AI"]
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    description: "Analytics dashboard for business intelligence",
    image: "/work2.jpg",
    tags: ["Next.js", "TypeScript", "Charts"]
  },
  {
    id: 3,
    title: "Mobile App Design",
    description: "Cross-platform mobile application",
    image: "/work3.webp",
    tags: ["React Native", "UI/UX", "Mobile"]
  },
  {
    id: 4,
    title: "AI Workflow Tool",
    description: "Automation tool for business processes",
    image: "/work4.jpg",
    tags: ["Python", "AI", "Automation"]
  }
]

const PortfolioSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Our <span className="text-purple-400">Portfolio</span>
          </h2>
          <p className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto">
            Showcasing our latest projects and successful collaborations
          </p>
        </motion.div>

        {/* Mobile: Single column, Desktop: Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-purple-500/10 border border-purple-400/20 rounded-xl overflow-hidden hover:border-purple-400/40 transition-all duration-300"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-white font-semibold text-sm sm:text-base mb-2 truncate">
                  {item.title}
                </h3>
                <p className="text-white/70 text-xs sm:text-sm mb-3 overflow-hidden" style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical'
                }}>
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection