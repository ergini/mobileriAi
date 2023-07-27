import LandingContent from "@/components/LandingContent";
import LandingHero from "@/components/LandingHero";
import LandingNavbar from "@/components/LandingNavbar";
import Image from "next/image";

export default function LandingPage() {
    return (
        <div className="h-full">
            <Image 
                src="/bg1.jpg"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="absolute -z-10"
                alt="Landing background image"
            />
            <LandingNavbar />
            <LandingHero />
            <LandingContent />
        </div>
    )
}