import HeroImages from "./ui/HeroImages";
import Hero from "./Hero";

export default function LandingPage() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-700/60  py-10 ">
      <HeroImages />
      <Hero />
    </div>
  );
}
