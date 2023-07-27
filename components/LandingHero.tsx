"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
    const { isSignedIn } = useAuth();

    return (
        <div className="text-white font-bold py-36 text-center space-y-5">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
                <h1>AI powered Intelligent assistant for every type of business</h1>
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
                    <TypewriterComponent
                        options={{
                            strings: [
                                "Architecture",
                                "Furniture",
                                "Construction",
                                "Real Estate",
                                "Residence"
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </div>
            <div className="text-sm md:text-xl font-light text-zinc-400">
                Respond to your customers needs 24/7 with our AI-powered solution.
            </div>
            <div>
                <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
                    <Button className="md:text-lg p-4 md:p-6 rounded-xl font-semibold backdrop-blur-sm bg-gray-500/30 border-none text-white">
                        Try it now!
                    </Button>
                </Link>
            </div>
            <div className="text-zinc-400 text-xs md:text-sm font-normal">
                Your intelligent assistant will be ready in 2 days.
            </div>
        </div>
    );
};

export default LandingHero;