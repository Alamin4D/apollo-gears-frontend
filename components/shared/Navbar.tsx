"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import * as React from "react";

/* -------------------------------------------------------------------------- */
/* Logo */
/* -------------------------------------------------------------------------- */

const Logo = (props: React.SVGAttributes<SVGElement>) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 64 64"
    fill="currentColor"
    {...props}
  >
    <rect x="8" y="28" width="48" height="16" rx="3" />
    <path d="M20 28L28 18H36L44 28Z" />
    <circle cx="20" cy="46" r="4" />
    <circle cx="44" cy="46" r="4" />
  </svg>
);

/* -------------------------------------------------------------------------- */
/* Hamburger */
/* -------------------------------------------------------------------------- */

const HamburgerIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 6H20" />
    <path d="M4 12H20" />
    <path d="M4 18H20" />
  </svg>
);

/* -------------------------------------------------------------------------- */

interface NavItem {
  href: string;
  label: string;
  active?: boolean;
}

const navLinks: NavItem[] = [
  {
    href: "/",
    label: "Home",
    active: true,
  },
  {
    href: "/cars",
    label: "Cars",
  },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Left */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-primary"
          >
            <Logo />
            <span>Apollo Gears</span>
          </Link>

          {/* Desktop Nav */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-2">
              {navLinks.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "rounded-md px-4 py-2 text-sm font-medium transition-colors",
                      item.active
                        ? "bg-accent text-accent-foreground"
                        : "hover:bg-accent hover:text-accent-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login">
            <Button variant="ghost">Login</Button>
          </Link>

          <Link href="/signup">
            <Button>Sign Up</Button>
          </Link>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <Popover>
            <PopoverTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="group"
                >
                  <HamburgerIcon />
                </Button>
              }
            />

            <PopoverContent
              align="end"
              className="w-56"
            >
              <nav className="flex flex-col gap-1">
                {navLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-md px-3 py-2 text-sm transition-colors",
                      item.active
                        ? "bg-accent text-accent-foreground"
                        : "hover:bg-accent hover:text-accent-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-3 border-t pt-3 flex flex-col gap-2">
                <Link href="/login">
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                  >
                    Login
                  </Button>
                </Link>

                <Link href="/signup">
                  <Button className="w-full">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
}