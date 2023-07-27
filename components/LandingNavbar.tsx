"use client"

import { Montserrat } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { useAuth } from "@clerk/nextjs"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const font = Montserrat({
    weight: "600",
    subsets: ["latin"]
})

export default function LandingNavbar() {
    const { isSignedIn } = useAuth()

    return (
        <nav className="p-4 bg-transparent flex items-center justify-between">
            <Link
                href="/"
                className="flex items-center"
            >
                <div className="relative h-8 w-8 mr-4">
                    <Image
                        fill
                        src="/mainlogo.png"
                        alt="Logo"
                    />
                </div>
                <h1 className={cn('text-2xl font-bold text-white', font.className)}>
                    AllIn AI
                </h1>
                <span className="ml-3 tex-xs font-light text-zinc-500">
                    by ERGO Agency 
                </span>
            </Link>
            <div className="flex items-center gap-x-2">
                <Link 
                    href={"/"}
                >
                    <Button className="rounded-lg backdrop-blur-sm bg-white/40 border-none text-white">
                        About us
                    </Button>
                </Link>
                <Link 
                    href={"/buy"}
                >
                    <Button variant="modern1" className="rounded-lg backdrop-blur-sm bg-gray-500/30 border-none text-white">
                        Get Started
                    </Button>
                </Link>
            </div>
        </nav>
    )
}