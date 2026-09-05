import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/brand/Marquee";
import { Problem } from "@/components/sections/Problem";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Outputs } from "@/components/sections/Outputs";
import { Pipeline } from "@/components/sections/Pipeline";
import { UseCases } from "@/components/sections/UseCases";
import { Signup } from "@/components/sections/Signup";
import { Footer } from "@/components/sections/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Marquee
        items={[
          "Now showing: v2.4.0 release reel",
          "412 teams on the waitlist",
          "average render time: 87 seconds",
          "5 outputs per release",
          "automatic breaking-change detection",
          "now playing: stream cancellation fix",
        ]}
        speed={50}
      />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Outputs />
        <Pipeline />
        <UseCases />
        <Signup />
      </main>
      <Footer />
    </div>
  );
}
