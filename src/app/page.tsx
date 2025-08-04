import Hero from '@/components/Hero'
import WorkSection from '@/components/WorkSection/WorkSection'
import StatsSection from '@/components/StatsSection/StatsSection'

export default function Home() {
  return (
    <main>
      <div
        style={{
          background: 'radial-gradient(ellipse at center, rgba(41, 9, 68, 0.4), transparent 80%)',
          backdropFilter: 'blur(40px)',
        }}
      >
        <Hero />
      </div>
      <WorkSection />
      <StatsSection />
    </main>
  )
}