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
  SheetHeader,
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
import { buttonVariants } from "@/components/ui/button"; // Re-add buttonVariants import

// --- UPDATED Navigation Structure --- START ---

// Data for "About" dropdown (replaces Getting Started)
const aboutFeatured = {
  title: "Niso Abuaf", // Updated
  href: "/about", // Updated
  description: "Professional overview of Niso Abuaf&apos;s expertise.", // Reverted to &apos; for linter
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
              <NavigationMenuTrigger className="text-sm md:text-base text-zinc-700 dark:text-zinc-300">About</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href={aboutFeatured.href}
                      >
                        <div className="mb-2 mt-4 text-lg font-medium text-zinc-700 dark:text-zinc-300">
                          {aboutFeatured.title}
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          {aboutFeatured.description}
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  {aboutLinks.map((item) => (
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
              <NavigationMenuTrigger className="text-sm md:text-base text-zinc-700 dark:text-zinc-300">Expertise</NavigationMenuTrigger>
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
                        <div className="mb-2 mt-4 text-lg font-medium text-zinc-700 dark:text-zinc-300">
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
                  // Restore outline variant
                  buttonVariants({ variant: "outline", size: "sm" }),
                  // Set specific light grey border
                  "border-zinc-200 dark:border-zinc-700",
                  // Set hover: white bg, dark text, no border
                  "hover:bg-white hover:text-zinc-900 hover:border-transparent dark:hover:text-zinc-900",
                  // Keep focus similar to default outline or remove explicit focus?
                  // For now, remove explicit focus:bg-background focus:text-foreground
                  // Add back base text size class if needed from variant
                  "text-sm md:text-base" 
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
             {/* Remove border-b from SheetHeader */}
             <SheetHeader className="p-4 text-left">
               {/*    <SheetTitle className="text-xl font-semibold">Niso Abuaf</SheetTitle> */}
             </SheetHeader>

             {/* Ensure sr-only title remains if needed by SheetContent */}
             <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>

             {/* Remove mt-4 to move content up */}
             <div className="flex flex-col space-y-1">
                {/* Home Link */} 
                <SheetClose key="Home">
                   <Link
                     href="/"
                     className="text-lg font-semibold block text-left py-3 rounded-md transition-colors hover:text-primary text-zinc-700 dark:text-zinc-300"
                     onClick={() => setIsOpen(false)}
                   >
                     Home
                   </Link>
                </SheetClose>

                {/* Add divider back, with correct gradient */}
                <hr className="my-3 h-px border-0 bg-gradient-to-r from-zinc-700 to-transparent" />

                {/* About Section */} 
                <span className="text-lg font-semibold block text-left pt-0 pb-2 text-zinc-700 dark:text-zinc-300">About</span>
                {[aboutFeatured, ...aboutLinks].map((item) => (
                  <SheetClose key={item.title}>
                     {/* Remove pl-4 */}
                     <Link
                       href={item.href}
                       className="text-base font-normal text-muted-foreground block text-left py-2 rounded-md transition-colors hover:text-primary"
                       onClick={() => setIsOpen(false)}
                     >
                       {item.title}
                     </Link>
                  </SheetClose>
                ))}

                {/* Correct gradient: from-zinc-700 to-transparent */}
                <hr className="my-3 h-px border-0 bg-gradient-to-r from-zinc-700 to-transparent" />

                {/* Expertise Section */} 
                <span className="text-lg font-semibold block text-left pt-3 pb-2 text-zinc-700 dark:text-zinc-300">Expertise</span>
                {expertiseLinks.map((item) => (
                   <SheetClose key={item.title}>
                     {/* Remove pl-4 */}
                     <Link
                       href={item.href}
                       className="text-base font-normal text-muted-foreground block text-left py-2 rounded-md transition-colors hover:text-primary"
                       onClick={() => setIsOpen(false)}
                     >
                       {item.title}
                     </Link>
                   </SheetClose>
                ))}

                {/* Correct gradient: from-zinc-700 to-transparent */}
                <hr className="my-3 h-px border-0 bg-gradient-to-r from-zinc-700 to-transparent" />

                {/* Library Section */} 
                <span className="text-lg font-semibold block text-left pt-3 pb-2 text-zinc-700 dark:text-zinc-300">Library</span>
                {[libraryFeatured, ...libraryLinks].map((item) => (
                   <SheetClose key={item.title}>
                      {/* Remove pl-4 */}
                      <Link
                        href={item.href}
                        className="text-base font-normal text-muted-foreground block text-left py-2 rounded-md transition-colors hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                   </SheetClose>
                 ))}

                {/* Correct gradient: from-zinc-700 to-transparent */}
                <hr className="my-3 h-px border-0 bg-gradient-to-r from-zinc-700 to-transparent" />

                {/* Contact Link */} 
                  <SheetClose key="Contact">
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
            "hover:bg-zinc-100 hover:text-zinc-900", 
            "focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          {/* Remove explicit text color - inherit from --foreground */}
          <div className="text-sm font-medium leading-none">{title}</div>
          {/* Keep text-muted-foreground for description */}
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