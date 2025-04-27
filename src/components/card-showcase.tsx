'use client';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Section, Container } from "@/components/ds";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const targetText = "Niso Abuaf is Chief Economist & Strategist at Ramirez & Co and Professor of Financial Economics at Pace University, where he teaches corporate finance, global macroeconomics, investments and valuation. He leads the Financial Strategy Group, applying empirical analysis to capital structure, debt capacity and risk management for blue-chip corporations and sovereign clients. Over a 35-year Wall Street career—including senior strategist roles at Credit Suisse and Salomon Smith Barney—he has guided major capital-raising and M&A transactions. Nico is the author of numerous academic and industry publications on valuation, derivatives and global financial strategy.";

const ScrollTriggeredTextEffect = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref}>
      {isInView && (
        <TextGenerateEffect 
          words={targetText} 
          duration={2} 
          filter={false}
          className="text-base font-light text-muted-foreground"
        />
      )}
      {!isInView && <div className="text-base font-light text-muted-foreground opacity-0">{targetText}</div>}
    </div>
  );
};

export function CardShowcase() {
  return (
    <Section 
      className="mt-5 py-16"
      style={{
        background: `linear-gradient(to bottom, 
                      oklch(var(--background)), 
                      oklch(0.7 0 0) 50%,
                      oklch(var(--background)) 100%
                    )`
      }}
    >
      <Container className="not-prose px-8 sm:px-6">
        <ScrollTriggeredTextEffect />
      </Container>
    </Section>
  );
} 