"use client";

import { MENU } from "@/lib/constants";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/dropdown";
import { Link } from "@nextui-org/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import { cn } from "@nextui-org/system";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (route: string) =>
    route === "/" ? pathname === "/" : pathname.startsWith(route);

  return (
    <Navbar
      shouldHideOnScroll
      maxWidth="xl"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="fixed w-full flex z-50 bg-transparent/60"
    >
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden text-white"
      />
      <NavbarBrand>
        <p className="text-white text-xl">
          Next<span className="font-bold text-xl text-primary-100">Event</span>
        </p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {MENU.slice(0, 4).map((item) => (
          <NavbarItem key={item.route}>
            {item.value === "Find events" ? (
              <Dropdown>
                <DropdownTrigger className=" cursor-pointer">
                  <Link
                    className={cn("text-white", {
                      "text-primary-100": isActive(item.route),
                    })}
                  >
                    Find events
                  </Link>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem as={Link} color="primary" className="text-black"  href="/events">All events</DropdownItem>
                  <DropdownItem as={Link} color="primary" className="text-black" href="/events/trending">Trending events</DropdownItem>
                  <DropdownItem as={Link} color="primary" className="text-black" href="/events/physical">Physical events</DropdownItem>
                  <DropdownItem as={Link} color="primary" className="text-black" href="/events/virtual">Virtual events</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            ) : (
              <Link
                className={cn("text-white", {
                  "text-primary-100": isActive(item.route),
                })}
                href={item.route}
              >
                {item.value}
              </Link>
            )}
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link className="text-white" href={MENU[4].route}>
            {MENU[4].value}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href={MENU[5].route} variant="flat">
            {MENU[5].value}
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {MENU.slice(0, 4).map((item) => (
          <NavbarMenuItem key={item.route}>
            <Link
              color="foreground"
              className={cn("text-black", {
                "text-primary-300": isActive(item.route),
              })}
              href={item.route}
              size="lg"
            >
              {item.value}
            </Link>
          </NavbarMenuItem>
        ))}
        <Divider />
        <NavbarMenuItem>
          <Link
            color="foreground"
            size="lg"
            className={cn("text-black", {
              "text-primary-300": isActive(MENU[4].route),
            })}
            href={MENU[4].route}
          >
            {MENU[4].value}
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            color="foreground"
            size="lg"
            className={cn("text-black", {
              "text-primary-300": isActive(MENU[5].route),
            })}
            href={MENU[5].route}
          >
            {MENU[5].value}
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
