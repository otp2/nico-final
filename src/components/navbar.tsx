import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button"; // Assuming shadcn button
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"; // Assuming shadcn sheet

const navLinks = [
  { href: "#", label: "Book a component" },
  { href: "#", label: "Heros" },
  { href: "#", label: "Shop" },
  { href: "#", label: "Learn More" },
];

const Navbar = () => {
  return (
    <nav>
      {/* Desktop Navigation */}
      <div className="hidden gap-4 md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            className="text-sm transition-all hover:opacity-70" // Adjusted text size slightly if needed
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile Navigation (Hamburger Menu) */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-4 w-4" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right"> {/* Or 'left', 'top', 'bottom' */}
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
            </SheetHeader>
            <div className="mt-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm transition-all hover:opacity-70"
                  // onClick={() => { /* Close sheet on click if needed */ }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar; 