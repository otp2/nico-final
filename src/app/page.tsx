import Hero from "@/components/hero";
import Feature from "@/components/feature";
import { LogosSlider } from "@/components/logos-slider";
import { Section, Container } from "@/components/ds";
import Balancer from "react-wrap-balancer";

export default function Home() {
  return (
    <main>
      <Hero />

      <Section className="mt-5">
        <Container className="not-prose">
          <div className="flex flex-col gap-6">
            <h3 className="text-4xl">
              <Balancer>Corporate & Sovereign Clients</Balancer>
            </h3>
            <div className="mt-6 md:mt-12">
              <LogosSlider reverse={true} />
            </div>
          </div>
        </Container>
      </Section>

      <Feature />

      {/* You can add more sections/components below the Hero if needed */}
    </main>
  );
}
