import { Hero } from "@/components/sections/home/Hero";
import { ImageMarquee } from "@/components/sections/home/ImageMarquee";
import { ServicesOverview } from "@/components/sections/home/ServicesOverview";
import { ProjectsPreview } from "@/components/sections/home/ProjectsPreview";
import { SocialProof } from "@/components/sections/home/SocialProof";
import { TeamPreview } from "@/components/sections/home/TeamPreview";
import { MeetingCTA } from "@/components/sections/home/MeetingCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ImageMarquee />
      <ServicesOverview />
      <ProjectsPreview />
      <SocialProof />
      <TeamPreview />
      <MeetingCTA />
    </>
  );
}
