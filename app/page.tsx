import { Button } from "flowbite-react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col contaier mx-auto  ">
      <Hero />
      <HowItWorks />
    </main>
  );
}
