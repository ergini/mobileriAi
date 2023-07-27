"use client"

import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { ArrowRight, Axe, Highlighter, Landmark, MessageSquare, Sofa } from "lucide-react";

import { cn } from "@/lib/utils";
import { Analytics } from '@vercel/analytics/react';


const tools = [
    {
        label: "Mobileria AI",
        icon: Sofa,
        href: "/mobileri",
        color: "text-white",
    },
    {
        label: "Ndertimtari AI",
        icon: Axe,
        href: "/ndertimtari",
        color: "text-white"
    },
    {
        label: "Arkitekture AI",
        icon: Highlighter,
        href: "/arkitekture",
        color: "text-white"
    },
    {
        label: "Rezidenca AI",
        icon: Landmark,
        href: "/rezidenca",
        color: "text-white"
    },
]

export default function Dashboard() {
    const router = useRouter()
    return (
        <div>
            <div className="mb-8 space-y-4">
                <h2 className="text-2xl md:text-4xl font-bold text-center">
                    Explore the power of AI
                </h2>
                <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
                    AllIn AI is a platform that allows you to generate images, videos, and code using the power of AI.
                </p>
            </div>
            <div>
                <div className="px-4 md:px-20 lg:px-32 space-y-4">
                    {tools.map((tool) => (
                        <Card
                            onClick={() => router.push(tool.href)}
                            key={tool.href}
                            className="bg-yellow-400 px-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
                        >
                            <div className="flex items-center gap-x-4">
                                <div className={cn('p-4 w-fit rounded-md',)}>
                                    <tool.icon className={cn('w-8 h-8', tool.color)} />
                                </div>
                                <div className="font-semibold">
                                    {tool.label}
                                </div>
                            </div>
                            <ArrowRight className="w-5 h-5"/>
                        </Card>
                    ))}
                </div>
            </div>
            <Analytics />
        </div>
    )
}