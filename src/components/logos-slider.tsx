import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';

// TEMP: Using Lucide icons as placeholders for logos
// import { Figma, Vercel, Box, Database } from 'lucide-react'; 

const logos = [
  {
    id: "logo-2",
    description: "Figma",
    image: "https://www.shadcnblocks.com/images/block/logos/figma.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-3",
    description: "Next.js",
    image: "https://www.shadcnblocks.com/images/block/logos/nextjs.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-6",
    description: "Supabase",
    image: "https://www.shadcnblocks.com/images/block/logos/supabase.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-8",
    description: "Vercel",
    image: "https://www.shadcnblocks.com/images/block/logos/vercel.svg",
    className: "h-7 w-auto",
  },
];

export function LogosSlider({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className='relative h-[100px] w-full overflow-hidden'>
      <InfiniteSlider 
        className='flex h-full w-full items-center' 
        duration={30}
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