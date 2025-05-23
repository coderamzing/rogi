"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

export const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-primary/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-gilroy-black text-primary">
              Rogi
            </Link>
            <span className="ml-2 text-xs text-accent font-gilroy-black bg-secondary px-2 py-1 rounded-full">
              Smart Rates
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/our-services" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuNoHoverStyle()}>Our Services</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about-us" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuNoHoverStyle()}>About Us</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/blog" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuNoHoverStyle()}>Blog</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="default" asChild className="bg-primary hover:bg-primary/90 text-white font-semibold">
              <Link href="/dashboard">Demo Dashboard</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

const navigationMenuNoHoverStyle = () => {
  return cn(
    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-primary transition-colors focus:bg-secondary focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50 hover:text-primary hover:bg-secondary",
  )
}
