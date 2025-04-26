import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';

// TEMP: Using Lucide icons as placeholders for logos
// import { Figma, Vercel, Box, Database } from 'lucide-react'; 

const logos = [
  {
    id: "logo-att",
    description: "AT&T",
    image: "/logos/AT&T.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-amex",
    description: "American Express",
    image: "/logos/American-Express.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-oracle",
    description: "Oracle",
    image: "/logos/Oracle.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-jpmc",
    description: "JP Morgan Chase",
    image: "/logos/JP-Morgan-Chase.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-cs",
    description: "Credit Suisse",
    image: "/logos/Credit-Suisse.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-citi",
    description: "Citi",
    image: "/logos/Citi.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-salomon",
    description: "Salomon Brothers",
    image: "/logos/Salomon Brothers.svg",
    className: "h-7 w-auto",
  },
];

export function LogosSlider({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className='relative h-[100px] w-full overflow-hidden'>
      <InfiniteSlider 
        className='flex h-full w-full items-center' 
        duration={50}
        gap={48}
        reverse={reverse}
      >
        {logos.map((logo) => (
          <div 
            key={logo.id} 
            className='flex w-32 items-center justify-center'
          >
            <img
              src={logo.image}
              alt={logo.description}
              className={logo.className}
            />
          </div>
        ))}
      </InfiniteSlider>
      <ProgressiveBlur
        className='pointer-events-none absolute top-0 right-0 h-full w-[100px]'
        direction='right'
        blurIntensity={0.5}
      />
    </div>
  );
} 