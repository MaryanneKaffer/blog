import { GithubIcon } from "./icons";
import { ThemeSwitch } from "./theme-switch";

import { useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { TbBrandLinkedinFilled } from "react-icons/tb";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [active, setActive] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 300 && !active) setActive(true);
        if (latest < 300 && active) setActive(false);
    });

    return (
        <nav className="h-[55px] text-white flex text-md justify-between fixed w-[95dvw] -translate-x-1/2 left-1/2 top-3">
            <div className={`dark:bg-default bg-black items-center h-full duration-500 ${active ? "md:w-[3%] w-[15%] rounded-full justify-center" : "w-[50%] rounded-l-full px-6"} flex transition-all`}>
                {!active ? <p>Blog</p> : <a href="#top" className="w-full h-full flex"><FaAngleUp size={20} className="mx-auto my-auto" /></a>}
            </div>
            <div className={`flex gap-2 dark:bg-default items-center px-6 bg-black h-full duration-500 ${active ? "md:w-[12.5%] w-[38%] rounded-full" : "md:w-[50%] w-[80%] rounded-r-full"} transition-all`}>
                <ThemeSwitch className="ml-auto" />
                <a href="https://github.com/MaryanneKaffer" target="_blank"><GithubIcon /></a>
                <button className={`text-black transition-all ${!active && "bg-white p-1 px-3"} hover:brightness-125 hover:scale-[1.05] cursor-pointer rounded-lg md:text-lg text-sm`}>
                    {!active ? <p>Contact-me</p> : <TbBrandLinkedinFilled size={25} className="text-white" />}
                </button>
            </div>
        </nav>
    )
}