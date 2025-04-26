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
    <Section className="relative h-screen">
      <Container className="relative not-prose h-full">
        {/* Name and Nav */}
        <div className="flex w-full justify-between items-start">
          <div className="mt-5">
            <h1 className="mb-4 text-3xl font-semibold md:text-6xl md:font-normal">
              <Link className="transition-all hover:opacity-70" href="#">
                Nico Abuaf
              </Link>
            </h1>
            <h2 className="text-lg leading-6">
              Chief Economist & Strategist, Ramirez & Co<br />
              Professor of Financial Economics, Pace University
            </h2>
          </div>
          <Navbar />
        </div>

        {/* Images */}
        <div className="fit absolute bottom-0 right-0 flex items-end justify-end gap-2">
          {/* Image 1 */}
          <div className="hidden h-72 w-96 md:block">
            <Image
              className="h-full w-full rounded-tl-3xl object-cover"
              src="/new-york-city.svg"
              alt="New York City skyline"
              width={384}
              height={288}
            ></Image>
          </div>
          {/* Image 2 */}
          <div className="h-[420px] w-fit md:w-96">
            <Image
              className="h-full w-full rounded-tl-3xl object-cover"
              src="/nico-abuaf.svg"
              alt="Nico Abuaf"
              width={384}
              height={420}
            ></Image>
          </div>
        </div>
      </Container>

      {/* Bottom Fade Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent pointer-events-none" aria-hidden="true"></div>
    </Section>
  );
};

export default Hero; 