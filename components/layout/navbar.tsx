"use client"
import { useEffect, useState } from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import { ThemeToggler } from "@/components/ui/animated-theme";
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

function useScrolled(threshold = 50) {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > threshold)
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [threshold])

    return scrolled
}

// navlinks
const navLinks = [
    {
        id: 0,
        text: "Home",
        to: ""
    },
    {
        id: 1,
        text: "About",
        to: "about"
    },
    {
        id: 2,
        text: "Projects",
        to: "projects"
    },
    {
        id: 3,
        text: "Services",
        to: "services"
    },
    {
        id: 4,
        text: "Blog",
        to: "blog"
    },
    {
        id: 5,
        text: "Contact",
        to: "contact"
    }
]

export function Navbar() {
    const scrolled = useScrolled(50)

    return (
        <motion.nav
            className={cn(
                "right-0 z-50 transition-colors duration-300 bg-white dark:bg-dark-primary",
                scrolled && "fixed top-0 left-0 border border-border bg-white/80 dark:bg-dark-primary/80 backdrop-blur-md shadow-lg"
            )}
            animate={{
                margin: scrolled ? "16px" : "0px",
                borderRadius: scrolled ? "360px" : "0px",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            <div className="flex items-center justify-between p-2">
                {/* left hand */}
                <div className='md:hidden'>
                    <div className='flex flex-row items-center gap-1'>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant={"ghost"}><Menu className='w-10! h-10!' /></Button>
                            </SheetTrigger>
                            <SheetContent side="left">
                                <NavLinks />
                                {/* <SheetFooter>
                            </SheetFooter> */}
                            </SheetContent>
                        </Sheet>
                        <Logo />
                    </div>
                </div>
                {/* large screen */}
                <div className='hidden md:block'>
                    <div className='flex flex-row items-center gap-2'>
                        <Logo />
                        <NavLinks />
                    </div>
                </div>
                {/* Right hand */}
                <div className="flex items-center gap-2">
                    <ThemeToggler />
                </div>
            </div>
        </motion.nav>
    )
}
const NavLinks = () => {
    return (
        <ul className={cn(`h-14 md:flex md:flex-row md:items-center md:justify-between`)}>
            {navLinks.map((item) => (
                <li key={item.id} className='text-md font-light my-5 px-2 py-2 hover:bg-primary-gold hover:transition hover:duration-500 hover:delay-100 hover:ease-in-out lg:my-2'>
                    <Link href={`/${item.to}`} className='block'>{item.text}</Link>
                </li>
            ))}
        </ul>
    )
}

const Logo = () => {
  return (
    <Link href="/" aria-label="PinnacleCodes home" className="inline-flex items-center">
      <Image
        src="/logo_2.png"
        alt="PinnacleCodes logo"
        width={36}
        height={36}
        priority
        className="h-9 w-9 object-contain"
      />
    </Link>
  )
}