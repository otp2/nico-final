'use client';
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import Image from 'next/image'; // Use Next.js Image for optimization

// Use the logos from public/logos
const logos = [
  {
    id: "logo-att",
    description: "AT&T",
    image: "/logos/AT&T.svg",
  },
  {
    id: "logo-amex",
    description: "American Express",
    image: "/logos/American-Express.svg",
  },
  {
    id: "logo-oracle",
    description: "Oracle",
    image: "/logos/Oracle.svg",
  },
  {
    id: "logo-jpmc",
    description: "JP Morgan Chase",
    image: "/logos/JP-Morgan-Chase.svg",
  },
  {
    id: "logo-cs",
    description: "Credit Suisse",
    image: "/logos/Credit-Suisse.svg",
  },
  {
    id: "logo-citi",
    description: "Citi",
    image: "/logos/Citi.svg",
  },
  {
    id: "logo-salomon",
    description: "Salomon Brothers",
    image: "/logos/Salomon Brothers.svg",
  },
];

// New wrapper component
export function ClientLogoSlider({ reverse = false }: { reverse?: boolean }) {
  return (
    <InfiniteSlider
      // Use props consistent with previous implementation + example
      gap={48}
      duration={50}
      reverse={reverse}
      // Removed bg-white from example, use parent styling
      className="w-full h-full"
    >
      {logos.map((logo) => (
        // Using Next Image for logos - requires height/width
        // For SVGs, we can give a reasonable height and let width be auto
        <Image
          key={logo.id}
          src={logo.image}
          alt={logo.description}
          width={100} // Provide a width for layout calculation
          height={28} // h-7 is 28px
          className="h-7 w-auto" // Keep previous styling
        />
      ))}
    </InfiniteSlider>
  );
} 