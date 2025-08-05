import Hero from '@/components/Hero'
import WorkSection from '@/components/WorkSection/WorkSection'
import StatsSection from '@/components/StatsSection/StatsSection'

export default function Home() {
  return (
    <main>
      <div
        style={{
          backgroundImage: 'url(/artboard1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Hero />
      </div>
      <WorkSection />
      <StatsSection />
    </main>
  )
}