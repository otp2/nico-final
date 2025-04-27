'use client';

import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import Hero from "@/components/hero";
import Feature from "@/components/feature";
import { ClientLogoSlider } from "@/components/client-logo-slider";
import { Section, Container } from "@/components/ds";
import Balancer from "react-wrap-balancer";
import { CardShowcase } from "@/components/card-showcase";

// Define line components for reuse
const VerticalLine = () => (
  <div className="h-full w-px bg-[linear-gradient(to_bottom,transparent,oklch(0.7_0_0),transparent)]" />
);

export default function Home() {
  const showcaseRef = useRef(null);
  const isInView = useInView(showcaseRef, { once: true, amount: 0.3 });

  return (
    <main>
      {/* REMOVE Hero from outside */}
      {/* <Hero /> */}

      {/* Grid containing ALL content now */}
      <div 
        className="grid"
        style={{
          gridTemplateColumns: "minmax(1rem, 1fr) minmax(0, 1024px) minmax(1rem, 1fr)"
        }}
      >
        {/* ROW 1: Hero (spans all columns) */}
        <div className="col-span-full row-start-1">
          <Hero />
        </div>

        {/* ROW 2 (was 3): CardShowcase */}
        <div ref={showcaseRef} className="col-start-2 col-end-3 row-start-2">
          <CardShowcase />
        </div>

        {/* Wrapper Div for Rows 3 & 4 */}
        <div 
          className="col-span-full row-start-3 row-end-5"
        >
          {/* ROW 3: Client Logos */}
          <div className="col-start-2 col-end-3">
            <Section className="mt-5">
              <Container className="not-prose">
                <div className="flex flex-col gap-6">
                  <h3 className="text-2xl md:text-4xl">
                    <Balancer>Corporate & Sovereign Clients</Balancer>
                  </h3>
                  <div className="mt-6 md:mt-12">
                    <ClientLogoSlider reverse={true} />
                  </div>
                </div>
              </Container>
            </Section>
          </div>

          {/* ROW 4: Feature Section */}
          <div className="col-start-2 col-end-3">
            <Feature />
          </div>
        </div>

        {/* Vertical Lines spanning only row 2 (CardShowcase) */}
        {/* Left Line - Animate */}
        <motion.div 
          className="col-start-2 row-start-2 row-end-3 justify-self-start h-full"
          style={{ originY: 0, scaleY: 0 }}
          animate={{ scaleY: isInView ? 1 : 0 }}
          transition={{ duration: 5, ease: "linear" }}
        >
          <VerticalLine />
        </motion.div>
        {/* Right Line - Animate */}
        <motion.div 
          className="col-start-2 row-start-2 row-end-3 justify-self-end h-full"
          style={{ originY: 0, scaleY: 0 }}
          animate={{ scaleY: isInView ? 1 : 0 }}
          transition={{ duration: 5, ease: "linear" }}
        >
          <VerticalLine />
        </motion.div>

      </div>
    </main>
  );
}
