import { Hero } from "@/frontend/components/landing/Hero";
import { AILogos } from "@/frontend/components/landing/AILogos";
import { HowItWorks } from "@/frontend/components/landing/HowItWorks";
import { Features } from "@/frontend/components/landing/Features";
import { Stats } from "@/frontend/components/landing/Stats";
import { FinalCTA } from "@/frontend/components/landing/FinalCTA";
import { Footer } from "@/frontend/components/landing/Footer";
import SplashCursor from "@/frontend/components/SplashCursor";
import Noise from "@/frontend/components/Noise";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SplashCursor
        DENSITY_DISSIPATION={3}
        VELOCITY_DISSIPATION={2.5}
        SPLAT_RADIUS={0.15}
        SPLAT_FORCE={5000}
        CURL={5}
        COLOR_UPDATE_SPEED={8}
      />
      <div className="pointer-events-none fixed inset-0 z-[2] opacity-[0.03]">
        <Noise patternAlpha={20} patternRefreshInterval={3} patternSize={200} />
      </div>
      <Hero />
      <AILogos />
      <HowItWorks />
      <Features />
      <Stats />
      <FinalCTA />
      <Footer />
    </div>
  );
}
