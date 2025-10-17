import { GithubIcon } from "./icons";
import { ThemeSwitch } from "./theme-switch";

import { useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import LanguageSwitch from "./languageSwitch";
import { useLanguage } from "@/context/languageContext";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [active, setActive] = useState(false);
    const { language } = useLanguage()

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 300 && !active) setActive(true);
        if (latest < 300 && active) setActive(false);
    });

    return (
        <nav className={`h-[55px] ${active ? "text-white" : ""} flex text-md justify-between fixed w-full -translate-x-1/2 left-1/2 top-3 md:px-12 px-6 z-100`}>
            <div className={`items-center h-full duration-500 flex transition-all backdrop-blur-md
                ${active ? "lg:w-[3%] md:w-[8%] w-[17%] rounded-full bg-black dark:bg-default " : "lg:w-[50%] w-[40%] rounded-l-full px-6 bg-white/75  dark:bg-default/75 "}`}>
                {!active ? <p>Blog</p> : <a href="#top" className="w-full h-full flex"><FaAngleUp size={20} className="my-auto mx-auto" /></a>}
            </div>
            <div className={`flex gap-2 dark:bg-default items-center px-6 bg-black h-full duration-500 backdrop-blur-md transition-all
                ${active ? "lg:w-[7.5%] md:w-[19%] w-[42%] rounded-full" : "lg:w-[50%] w-[90%] rounded-r-full bg-white/75 dark:bg-default/75"}`}>
                <ThemeSwitch className="ml-auto hover:scale-[1.1]" color={active ? "text-white" : "text-black dark:text-white"} />
                {!active && <LanguageSwitch />}
                <a href="https://github.com/MaryanneKaffer" target="_blank" className="active:scale-[0.8] hover:scale-[1.1] transition-all"><GithubIcon /></a>
                <button className={`dark:text-black text-white active:scale-[0.9] transition-all 
                    ${!active && "dark:bg-white bg-black p-1 hover:scale-[1.05] w-[100px]"} hover:brightness-125 cursor-pointer rounded-lg lg:text-[16px] text-sm hover:scale-[1.1] duration-500`}>
                    {!active ? <p>{language === "pt" ? "Contato" : "Contact-me"}</p> : <TbBrandLinkedinFilled size={25} className="text-white" />}
                </button>
            </div>
        </nav>
    )
}