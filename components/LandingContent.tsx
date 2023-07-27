/* eslint-disable react/no-unescaped-entities */
"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { BadgeDollarSign, Bot, BrainCircuit, BrainCog, FileQuestion, MessageSquareDashed, Timer, VideoIcon } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"

const testimonials = [
    {
        name: "Ergo",
        avatar: "A",
        title: "Web Developer",
        description: "It was a very good experience developing this app"
    },
    {
        name: "Bertha Bowman",
        avatar: "possibly",
        title: "Engineer",
        description: "This is a very good product. I am very satisfied with the results."
    },
    {
        name: "Bradley Porter",
        avatar: "coach",
        title: "Entrepreneur",
        description: "I have been using this product for a while now and I am very satisfied with the results."
    },
    {
        name: "Agnes Sparks",
        avatar: "care",
        title: "Designer",
        description: "Its from the future."
    },
]

export default function LandingContent() {
    return (
        <div className="px-10 pb-20">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">
                What do we do for you?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 gap-4">
                <Card className="backdrop-blur-sm bg-gray-500/30 border-none text-white">
                    <CardHeader>
                        <Bot size={80} />
                        <CardTitle className="flex items-center">
                            <div>
                                <p className="text-2xl">
                                    We will create an
                                    <span className="text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
                                        &nbsp;intelligent assistant&nbsp;
                                    </span>for your business
                                </p>
                            </div>
                        </CardTitle>
                        {/* Create space */}
                        <CardContent className="pt-2 px-0">
                            <p className="text-lg text-white/50">
                                intelligent assistant — an always-available,
                                <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
                                    &nbsp;24/7 worker&nbsp;
                                </span>
                                dedicated to responding to your customers needs. Elevate your customer service to new heights and enhance customer satisfaction with our AI-powered solution.
                            </p>
                        </CardContent>
                    </CardHeader>
                </Card>
                <Card className="backdrop-blur-sm bg-gray-500/30 border-none text-white">
                    <CardHeader>
                        <BrainCircuit size={80} />
                        <CardTitle className="flex items-center">
                            <div>
                                <p className="text-2xl">
                                    We train it with your data and type of business
                                </p>
                            </div>
                        </CardTitle>
                        <CardContent className="pt-2 px-0">
                            <p className="text-lg text-white/40">
                                Training is the process of feeding your intelligent assistant with data and information about your business.
                                <br />
                                The more data you provide, the better your intelligent assistant will be at responding to your customers needs.
                            </p>
                        </CardContent>
                    </CardHeader>
                </Card>
                <Card className="backdrop-blur-sm bg-gray-500/30 border-none text-white">
                    <CardHeader>
                        <BrainCog size={80} />
                        <CardTitle className="flex items-center">
                            <div>
                                <p className="text-2xl">
                                    We make it completely functional and ready to use
                                </p>
                            </div>
                        </CardTitle>
                        <CardContent className="pt-2 px-0">
                            <p className="text-lg text-white/40">
                                After we train your intelligent assistant, we make it completely functional and ready to use for about 2 days.
                                <br />
                                Also you will be able to see the data given to your intelligent assistant for your business needs.
                            </p>
                        </CardContent>
                    </CardHeader>
                </Card>
            </div>
            {/* Why do you need it? */}
            <h2 className="text-center text-4xl text-white font-extrabold mt-12 mb-10 opacity-30">
                ───
            </h2>
            <h2 className="text-center text-4xl text-white font-extrabold mt-10 mb-10">
                Why do you need our service?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
                <Card className="backdrop-blur-sm bg-gray-500/30 border-none text-white">
                    <CardHeader>
                        <Timer size={80} />
                        <CardTitle className="flex items-center">
                            <div>
                                <p className="text-2xl">
                                    It will save you
                                    <span className="text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
                                        &nbsp;a lot of time&nbsp;
                                    </span>
                                </p>
                            </div>
                        </CardTitle>
                        {/* Create space */}
                        <CardContent className="pt-2 px-0">
                            <p className="text-lg text-white/50">
                                You can't always be available to respond to your customers questions on your website or email,
                                <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
                                    &nbsp;but your intelligent assistant can!&nbsp;
                                </span>
                                <br />
                                It will respond to your customers needs 24/7, even when you're busy and maybe tired, or even when you are on vacation with your family,
                                <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
                                    &nbsp;he's there working for you!&nbsp;
                                </span>
                            </p>
                        </CardContent>
                    </CardHeader>
                </Card>
                <Card className="backdrop-blur-sm bg-gray-500/30 border-none text-white">
                    <CardHeader>
                        <BadgeDollarSign size={80} />
                        <CardTitle className="flex items-center">
                            <div>
                                <p className="text-2xl">
                                    This AI assistant is
                                    <span className="text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
                                        &nbsp;a good seller&nbsp;
                                    </span>
                                </p>
                            </div>
                        </CardTitle>
                        {/* Create space */}
                        <CardContent className="pt-2 px-0">
                            <p className="text-lg text-white/50">
                                Why are we mentoining this? Because this is
                                <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
                                    &nbsp;the most important thing for your business.&nbsp;
                                </span>
                                <br />
                                You maybe already have a good seller, but he can't be available 24/7, he can't remember everything and he can't be everywhere or respond to multiple clients at the same time, <br />
                                <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
                                    but your intelligent assistant can!&nbsp;
                                </span>
                            </p>
                        </CardContent>
                    </CardHeader>
                </Card>
                <Card className="backdrop-blur-sm bg-gray-500/30 border-none text-white">
                    <CardHeader>
                        <MessageSquareDashed size={80} />
                        <CardTitle className="flex items-center">
                            <div>
                                <p className="text-2xl">
                                    Revolutionize
                                    <span className="text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
                                        &nbsp;forever&nbsp;
                                    </span>
                                    customer interactions
                                </p>
                            </div>
                        </CardTitle>
                        {/* Create space */}
                        <CardContent className="pt-2 px-0">
                            <p className="text-lg text-white/50">
                                AI assistant that we will create for you it's not just some static questions and answers,
                                <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
                                    &nbsp;it's a real AI that can learn and adapt to your customers needs.&nbsp;
                                </span>
                                <br />
                                Customers will feel like they are talking
                                <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
                                    &nbsp;to a real person&nbsp;
                                </span>
                                and they will not be tired of the same answers over and over again.
                            </p>
                        </CardContent>
                    </CardHeader>
                </Card>
            </div>
            {/* How can you get it for your business? */}
            <h2 className="text-center text-4xl text-white font-extrabold mt-12 mb-10 opacity-30">
                ───
            </h2>
            <h2 className="text-center text-4xl text-white font-extrabold mt-10 mb-10">
                How can you get it for your business?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
                <Card className="backdrop-blur-sm bg-gray-500/30 border-none text-white">
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <div>
                                <p className="text-2xl">
                                    You can schedule
                                    <span className="text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
                                        &nbsp;a free meeting&nbsp;
                                    </span>
                                    with us
                                </p>
                            </div>
                        </CardTitle>
                        {/* Create space */}
                        <CardContent className="pt-2 px-0">
                            <p className="text-lg text-white/50">
                                We will discuss about your business so we will know what kind of data we need to train
                                <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
                                    &nbsp;your intelligent assistant.&nbsp;
                                </span>
                                <br />
                                You can understand better how it works and what it does.
                                To schedule a meeting with us, you can contact us on our email:
                                <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
                                    &nbsp;info@ergodigital.agency&nbsp;
                                </span>
                                or click on the button below.
                            </p>
                            <Link href="/contact">
                                <Button variant="modern1" className="mt-4">
                                    Schedule a meeting
                                </Button>
                            </Link>
                        </CardContent>
                    </CardHeader>
                </Card>
            </div>
        </div>
    )
}