"use client"; // Add this if using Sheet state or other client-side hooks

import * as React from "react"; // Import React
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react"; // Import useState for sheet control

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent, // Re-add import
  NavigationMenuItem,
  NavigationMenuLink, // Re-add import
  NavigationMenuList,
  NavigationMenuTrigger, // Re-add import
  NavigationMenuViewport, // Import Viewport
} from "@/components/ui/navigation-menu"; // Import NavigationMenu components
import { cn } from "@/lib/utils"; // Re-add cn import
import { buttonVariants } from "@/components/ui/button"; // Import buttonVariants

// --- UPDATED Navigation Structure --- START ---

// Data for "About" dropdown (replaces Getting Started)
const aboutFeatured = {
  title: "Nico Abuaf", // Updated
  href: "/about", // Updated
  description: "Professional overview of Nico Abuaf's expertise.", // Updated
};

const aboutLinks: { title: string; href: string; description: string }[] = [
  {
    title: "Experience", // Updated
    href: "/about/experience", // Updated
    description: "Detailed chronological summary of leadership roles.", // Updated
  },
  {
    title: "Financial Strategy Group", // Updated
    href: "/about/financial-strategy", // Updated
    description: "Scope of empirical finance practice.", // Updated
  },
  {
    title: "Academic Roles", // Updated
    href: "/about/academic-roles", // Updated
    description: "Summary of teaching appointments and courses.", // Updated
  },
];

// Data for "Expertise" dropdown (replaces Components)
const expertiseLinks: { title: string; href: string; description: string }[] = [
  {
    title: "Advisory Services", // Added back
    href: "/expertise/advisory",
    description: "Capital allocation and risk management strategies.",
  },
  {
    title: "Teaching",
    href: "/expertise/teaching",
    description: "Courses taught, curricula, and pedagogical approach.",
  },
  {
    title: "Insights", // Moved up
    href: "/expertise/insights",
    description: "Thought leadership articles and expert finance commentary.",
  },
  {
    title: "Market Research", // Moved down
    href: "/expertise/market-research",
    description: "Macro outlooks and quantitative market analyses.",
  },
];

// Data for "Library" dropdown (replaces Documentation)
const libraryFeatured = {
  title: "Resource Library", // Updated
  href: "/library", // Updated
  description: "A collection of publications, case studies, course materials, and reports.", // Updated
};

const libraryLinks: { title: string; href: string; description: string }[] = [
  {
    title: "Publications", // Updated
    href: "/library/publications", // Updated
    description: "Archive of academic and commercial finance papers.", // Updated
  },
  {
    title: "Case Studies", // Updated
    href: "/library/case-studies", // Updated
    description: "Representative empirical finance project summaries.", // Updated
  },
  {
    title: "Course Materials", // Updated
    href: "/library/course-materials", // Updated
    description: "Lecture notes, syllabi, and evaluation highlights.", // Updated
  },
   {
    title: "Market Reports", // Added 4th item
    href: "/library/market-reports", // Added
    description: "Historical macro forecasts and quarterly reviews.", // Added
  },
];
// --- UPDATED Navigation Structure --- END ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control sheet visibility

  return (
    <>
      {/* Desktop Navigation - Content Updated */}
      <div className="hidden md:flex relative">
        <NavigationMenu>
          <NavigationMenuList>
            {/* About Item (was Getting Started) */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm md:text-base">About</NavigationMenuTrigger> {/* Label Updated */}
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href={aboutFeatured.href} /* Data Updated */
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          {aboutFeatured.title} {/* Data Updated */}
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          {aboutFeatured.description} {/* Data Updated */}
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  {aboutLinks.map((item) => ( /* Data Updated */
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Expertise Item (was Components) */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm md:text-base">Expertise</NavigationMenuTrigger> {/* Label Updated */}
              <NavigationMenuContent>
                 {/* Updated layout: Match 'About' but featured on the right */}
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_.75fr]"> {/* Grid columns swapped */}
                  {/* List Items on the Left - Wrapped in a div to stack vertically */}
                  <div className="flex flex-col gap-3">
                    {expertiseLinks
                      .filter(item => item.title !== "Advisory Services") // Filter out the featured item
                      .map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                   </div>

                  {/* Featured Item on the Right */}
                  <li className="row-span-3"> {/* Spans rows */}
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md" /* Ensure justify-end and no text-right */
                        href="/expertise/advisory" /* Hardcoded href for featured */
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Advisory Services {/* Hardcoded title for featured */}
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Capital allocation and risk management strategies. {/* Hardcoded desc for featured */}
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                 </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Library Item (was Documentation) */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm md:text-base">Library</NavigationMenuTrigger> {/* Label Updated */}
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
                  {/* Featured Item (Top) */}
                  <li className="col-span-full">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted px-6 py-4 no-underline outline-none focus:shadow-md"
                        href={libraryFeatured.href} /* Data Updated */
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          {libraryFeatured.title} {/* Data Updated */}
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          {libraryFeatured.description} {/* Data Updated */}
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  {/* List Items (Below in a 2x2 grid) */}
                  <div className="col-span-full pt-4">
                     {/* Changed to md:grid-cols-2 */}
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                       {libraryLinks.map((item) => ( /* Data Updated */
                         <ListItem
                           key={item.title}
                           title={item.title}
                           href={item.href}
                         >
                           {item.description}
                         </ListItem>
                       ))}
                      </div>
                  </div>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Contact Item - Styled Link */}
            <NavigationMenuItem>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "text-sm md:text-base h-9 px-4 py-2" // Match sizing/padding of triggers
                )}
              >
                Contact
              </Link>
            </NavigationMenuItem>

          </NavigationMenuList>

          {/* Add Explicit Viewport with Positioning */}
          <div className="absolute left-0 top-full flex justify-center w-full">
            <NavigationMenuViewport className="origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full max-w-md rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]" />
          </div>
        </NavigationMenu>
      </div>

      {/* Mobile Navigation (Sheet) - Content Updated */}
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="hover:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-sm p-6 overflow-y-auto">
             {/* Removed Header */}
             {/* <SheetHeader className="mb-6 text-left"> */}
             {/*    <SheetTitle className="text-xl font-semibold">Nico Abuaf</SheetTitle> */}
             {/* </SheetHeader> */}

             {/* Removed Explicit Close Button */}
             {/* <SheetClose asChild className="absolute right-6 top-6 rounded-sm opacity-70 ...">
               <Button variant="ghost" size="icon">
                 <X className="h-4 w-4" />
                 <span className="sr-only">Close</span>
               </Button>
             </SheetClose> */}

             {/* Ensure sr-only title remains if needed by SheetContent */}
             <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>

             {/* Adjusted top padding/margin (removed pt-8, rely on SheetContent padding) */}
             <div className="flex flex-col space-y-1 mt-4"> {/* Adjusted mt-4 */}
                {/* Home Link (Main Item Styling) */}
                <SheetClose key="Home"> {/* Removed asChild */}
                   <Link
                     href="/"
                     className="text-lg font-semibold block text-left py-3 rounded-md transition-colors hover:text-primary" // Removed hover:bg, mx, px classes from here
                     onClick={() => setIsOpen(false)}
                   >
                     Home
                   </Link>
                </SheetClose>

                <hr className="my-3 border-border" />

                {/* About Section */}
                <span className="text-lg font-semibold block text-left pt-0 pb-2">About</span> {/* Removed pt-3 */}
                {[aboutFeatured, ...aboutLinks].map((item) => (
                  <SheetClose key={item.title}> {/* Removed asChild */}
                     <Link
                       href={item.href}
                       className="text-base font-normal text-muted-foreground block text-left pl-4 py-2 rounded-md transition-colors hover:text-primary" // Removed hover:bg, hover:text-accent-foreground
                       onClick={() => setIsOpen(false)}
                     >
                       {item.title}
                     </Link>
                  </SheetClose>
                ))}

                <hr className="my-3 border-border" />

                {/* Expertise Section */}
                <span className="text-lg font-semibold block text-left pt-3 pb-2">Expertise</span> {/* Kept pt-3 here */}
                {expertiseLinks.map((item) => (
                   <SheetClose key={item.title}> {/* Removed asChild */}
                     <Link
                       href={item.href}
                       className="text-base font-normal text-muted-foreground block text-left pl-4 py-2 rounded-md transition-colors hover:text-primary" // Removed hover:bg, hover:text-accent-foreground
                       onClick={() => setIsOpen(false)}
                     >
                       {item.title}
                     </Link>
                   </SheetClose>
                ))}

                <hr className="my-3 border-border" />

                 <span className="text-lg font-semibold block text-left pt-3 pb-2">Library</span>
                 {[libraryFeatured, ...libraryLinks].map((item) => (
                   <SheetClose key={item.title}> {/* Removed asChild */}
                      <Link
                        href={item.href}
                        className="text-base font-normal text-muted-foreground block text-left pl-4 py-2 rounded-md transition-colors hover:text-primary" // Removed hover:bg, hover:text-accent-foreground
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                   </SheetClose>
                 ))}

                <hr className="my-3 border-border" />

                  <SheetClose key="Contact"> {/* Removed asChild */}
                     <Link
                        href="/contact"
                        className="text-lg font-semibold block text-left py-3 rounded-md transition-colors hover:text-primary" // Removed hover:bg, mx, px classes from here
                        onClick={() => setIsOpen(false)}
                     >
                       Contact
                     </Link>
                  </SheetClose>
             </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

// Re-add ListItem component helper
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href || "#"}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar; 