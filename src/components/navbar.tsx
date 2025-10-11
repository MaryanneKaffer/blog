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
        <nav className="h-[55px] text-white flex text-md justify-between fixed w-full -translate-x-1/2 left-1/2 top-3 md:px-12 px-6 z-100">
            <div className={`items-center h-full duration-500 flex transition-all backdrop-blur-md
                ${active ? "md:w-[3%] w-[17%] rounded-full bg-black dark:bg-default " : "md:w-[50%] w-[40%] rounded-l-full px-6 bg-black/75 dark:bg-default/75 "}`}>
                {!active ? <p>Blog</p> : <a href="#top" className="w-full h-full flex"><FaAngleUp size={20} className="my-auto mx-auto" /></a>}
            </div>
            <div className={`flex gap-2 dark:bg-default items-center px-6 bg-black h-full duration-500 backdrop-blur-md
                ${active ? "md:w-[7.5%] w-[42%] rounded-full" : "md:w-[50%] w-[90%] rounded-r-full bg-black/75 dark:bg-default/75"} transition-all`}>
                <ThemeSwitch className="ml-auto" />
                <a href="https://github.com/MaryanneKaffer" target="_blank"><GithubIcon /></a>
                <button className={`text-black transition-all duration-500 ${!active && "bg-white p-1 px-3"} hover:brightness-125 hover:scale-[1.05] cursor-pointer rounded-lg md:text-[16px] text-sm`}>
                    {!active ? <p>Contact-me</p> : <TbBrandLinkedinFilled size={25} className="text-white" />}
                </button>
            </div>
        </nav>
    )
}