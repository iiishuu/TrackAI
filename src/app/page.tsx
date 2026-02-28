import { Hero } from "@/frontend/components/landing/Hero";
import { HowItWorks } from "@/frontend/components/landing/HowItWorks";
import { Footer } from "@/frontend/components/landing/Footer";

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] flex-col">
      <Hero />
      <HowItWorks />
      <div className="flex-1" />
      <Footer />
    </div>
  );
}
