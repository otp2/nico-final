// React and Next.js imports
import Link from "next/link";
import Image from "next/image";

// Local component imports
import { Section, Container } from "@/components/ds";
import Navbar from "./navbar";

// Asset imports
// import Placeholder from "@/public/placeholder.jpg";

const Hero = () => {
  return (
    <Section 
      className="relative h-screen overflow-hidden"
    >
      <Container className="relative not-prose h-full">
        {/* Name and Nav */}
        <div className="flex w-full justify-between items-start">
          <div className="mt-5">
            <h1 className="mb-4 text-3xl font-semibold md:text-6xl md:font-normal">
              <Link className="transition-all hover:opacity-70" href="#">
                Niso Abuaf
              </Link>
            </h1>
            <h2 className="text-lg leading-6 font-light">
              Chief Economist & Strategist, Ramirez & Co<br />
              Professor of Financial Economics, Pace University
            </h2>
          </div>
          <Navbar />
        </div>

        {/* Images */}
        <div className="fit absolute right-0 flex items-end justify-end gap-2 bottom-[-1rem]">
          {/* Image 1 - Reverted to explicit dimensions */}
          <div 
            className="hidden md:block" // Removed width and relative
            // Removed style
          >
            <Image
              className="rounded-tl-3xl object-cover h-full w-full" // Added back h-full w-full
              src="/new-york-city.svg"
              alt="New York City skyline"
              width={284} // Explicit width
              height={345} // Explicit height
              // Removed fill
            ></Image>
          </div>
          {/* Image 2 - Reverted to explicit dimensions */}
          <div 
            className="w-fit md:w-[384px]" // Set width based on image, removed relative
            // Removed style
          >
            <Image
              className="rounded-tl-3xl object-cover h-full w-full" // Added back h-full w-full
              src="/nico-abuaf.svg"
              alt="Niso Abuaf"
              width={384} // Explicit width
              height={464} // Explicit height
              // Removed fill
            ></Image>
          </div>
        </div>
      </Container>

      {/* Gradient overlay at the bottom - Reduced height and opacity */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent opacity-80 pointer-events-none" aria-hidden="true"></div>
    </Section>
  );
};

export default Hero; 