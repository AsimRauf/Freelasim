"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import { Smile } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

interface ReviewData {
  name: string
  company: string
  review: string
  rating: number
  initials: string
}

interface ReviewCarouselProps {
  reviews: ReviewData[]
}

export function ReviewCarousel({ reviews }: ReviewCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>()
  
  const plugin = React.useRef(
    Autoplay({ 
      delay: 4000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      stopOnLastSnap: false,
      rootNode: (emblaRoot) => emblaRoot.parentElement,
    })
  )

  React.useEffect(() => {
    if (!api) {
      return
    }

    // Force start autoplay after component mounts
    const timer = setTimeout(() => {
      plugin.current.reset()
      plugin.current.play()
    }, 100)

    return () => clearTimeout(timer)
  }, [api])

  const RatingBar = ({ rating, index }: { rating: number; index: number }) => {
    const [animatedWidth, setAnimatedWidth] = React.useState(0)
    const percentage = (rating / 5) * 100
    const isFullRating = rating === 5
    
    React.useEffect(() => {
      const startCycle = () => {
        // Reset to 0
        setAnimatedWidth(0)
        
        // Start animation after a brief delay
        setTimeout(() => {
          let currentWidth = 0
          const increment = percentage / 50 // 50 steps for smooth animation
          const interval = setInterval(() => {
            currentWidth += increment
            if (currentWidth >= percentage) {
              currentWidth = percentage
              clearInterval(interval)
            }
            setAnimatedWidth(currentWidth)
          }, 20) // 20ms intervals for smooth animation
        }, index * 200) // Stagger animation by 200ms per card
      }

      // Start initial cycle
      startCycle()

      // Set up cycling interval (restart every 4 seconds)
      const cycleInterval = setInterval(() => {
        startCycle()
      }, 4000)

      return () => {
        clearInterval(cycleInterval)
      }
    }, [percentage, index])
    
    return (
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="relative w-16 sm:w-24 h-1.5 sm:h-2 bg-white/20 rounded-full overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full bg-white rounded-full transition-all duration-300 ease-out"
            style={{ width: `${animatedWidth}%` }}
          />
        </div>
        <Smile 
          className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-500 ${
            isFullRating && animatedWidth >= 95
              ? 'text-white opacity-100 animate-pulse' 
              : 'text-white/40 opacity-60'
          }`}
          style={{
            animation: isFullRating && animatedWidth >= 95 ? 'wiggle 0.6s ease-in-out infinite alternate' : 'none'
          }}
        />
        <style jsx>{`
          @keyframes wiggle {
            0% { transform: rotate(-5deg) scale(1); }
            100% { transform: rotate(5deg) scale(1.1); }
          }
        `}</style>
      </div>
    )
  }

  return (
    <div className="w-full px-4 md:px-8">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        className="w-full max-w-6xl mx-auto"
        opts={{
          align: "start",
          loop: true,
          skipSnaps: false,
          dragFree: false,
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {reviews.map((review, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
              <Card className="bg-purple-500/10 border border-purple-400/20 hover:bg-purple-500/15 transition-colors h-full">
                <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 bg-purple-600/30 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                      <span className="text-purple-300 font-bold text-sm sm:text-lg">{review.initials}</span>
                    </div>
                    <div className="min-w-0 flex-grow">
                      <h3 className="text-white font-semibold text-sm sm:text-lg truncate">{review.name}</h3>
                      <div className="flex items-center">
                        <p className="text-purple-300 text-xs sm:text-sm truncate">{review.company}</p>
                        {review.company === "Upwork Client" && (
                          <img src="/logos/upwork-white.svg" alt="Upwork" className="h-3 w-3 sm:h-4 sm:w-4 ml-1 sm:ml-2 flex-shrink-0" />
                        )}
                      </div>
                    </div>
                  </div>
                  <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-grow">
                    "{review.review}"
                  </p>
                  <div className="mt-auto">
                    <RatingBar rating={review.rating} index={index} />
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}