// React and Next.js imports
import React from "react";
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// UI component imports
// import { Section, Container } from "@/components/craft"; 
// NOTE: Assuming these come from ds.tsx based on hero.tsx, changed path
import { Section, Container } from "@/components/ds";


// Icon imports
import { ArrowRight, Briefcase, GraduationCap, FileText, BarChart2 } from "lucide-react";

type FeatureText = {
  icon: React.JSX.Element;
  title: string;
  description: string;
  href?: string;
  cta?: string;
};

const featureText: FeatureText[] = [
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: "Advisory Services",
    href: "/",
    description:
      "Capital structure analysis, debt capacity evaluation, and risk management for corporations and sovereigns.",
    cta: "Learn More",
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: "Teaching",
    href: "/",
    description:
      "Undergraduate and graduate courses in corporate finance, global macroeconomics, and entrepreneurial finance.",
    cta: "Learn More",
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Publications",
    href: "/",
    description:
      "Academic and industry papers on valuation, derivatives, and capital markets.",
    cta: "Learn More",
  },
  {
    icon: <BarChart2 className="h-6 w-6" />,
    title: "Market Reports",
    href: "/",
    description:
      "Quarterly macro forecasts and bond market reviews based on empirical evidence.",
    cta: "Learn More",
  },
];

const Feature = () => {
  return (
    <Section className="border-b mt-5">
      <Container className="not-prose">
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl">
            <Balancer>
              Wall Street Leadership and Academic Research
            </Balancer>
          </h3>
          <h4 className="text-2xl font-light opacity-70">
            <Balancer>
              Capital allocation, finance education, research publications, and market outlooks.
            </Balancer>
          </h4>

          <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-4">
            {featureText.map(
              ({ icon, title, description, href, cta }, index) => (
                <Link
                  href={`${href}`}
                  className="flex flex-col justify-between gap-6 rounded-lg border p-6 transition-all hover:-mt-2 hover:mb-2"
                  key={index}
                >
                  <div className="grid gap-4">
                    {icon}
                    <h4 className="text-xl text-primary">{title}</h4>
                    <p className="text-base opacity-75">{description}</p>
                  </div>
                  {cta && (
                    <div className="flex h-fit items-center text-sm font-semibold">
                      <p>{cta}</p> <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  )}
                </Link>
              ),
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Feature; 