import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import Logo from "../images/DevsMeh.png";
import Image from "next/image.js";

export default function header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];

    return (
        <Navbar className="bg-indigo-600" onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent >
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Image
                        width={150}
                        alt="NextUI hero Image"
                        src={Logo}
                        className="text-center"
                    />
                    {/* <p className="font-bold text-inherit">Mahesh Joshi</p> */}
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className="text-white" justify="center">
                <NavbarItem className="hidden lg:flex">
                    <Link href="">MAHESH JOSHI</Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent className="text-white" justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Home</Link>
                </NavbarItem>
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Projects</Link>
                </NavbarItem>
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Skills</Link>
                </NavbarItem>
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">About</Link>
                </NavbarItem>
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Contact</Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            className="w-full"
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
