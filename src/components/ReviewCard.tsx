"use client"

interface ReviewCardProps {
  name: string
  company: string
  review: string
  rating: number
  initials: string
}

const ReviewCard = ({ name, company, review, rating, initials }: ReviewCardProps) => {
  return (
    <div className="bg-purple-500/10 border border-purple-400/20 rounded-xl p-6 hover:bg-purple-500/15 transition-colors">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-purple-600/30 rounded-full flex items-center justify-center mr-4">
          <span className="text-purple-300 font-bold text-lg">{initials}</span>
        </div>
        <div>
          <h3 className="text-white font-semibold text-lg">{name}</h3>
          <p className="text-purple-300 text-sm">{company}</p>
        </div>
      </div>
      <p className="text-white/80 text-sm leading-relaxed mb-4">
        {review}
      </p>
      <div className="flex text-yellow-400">
        {"★".repeat(rating)}
      </div>
    </div>
  )
}

export default ReviewCard