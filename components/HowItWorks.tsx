"use client";

import Link from "next/link";

import { Card } from "flowbite-react";

const HowItWorks = () => {
    return (
        <section className="flexBetween max-container padding-container relative z-30 py-5">
                <div className="px-5 col-span-1 lg:col-span-4 content-center justify-left" >
                    <Card className="max-w-sm items-center">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Data Extraction
                        </h5>
                        <img
                            alt="Bin"
                            height="250"
                            src="/bin.png"
                            width="250"
                            className="mb-3"
                        />
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Powered by real-time data from thousands of Renie bins, our AI-driven advertising platform delivers targeted mobile ads to preferred audiences in countless locations every day. ensuring your ads reach the right people, at the right time, in the right place.
                        </p>
                    </Card>
                </div>
        </section>
    );
  }

export default HowItWorks;

