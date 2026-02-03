import { GithubIcon } from "./icons";
import { ThemeSwitch } from "./theme-switch";
import LanguageSwitch from "./languageSwitch";
import { useLanguage } from "@/context/languageContext";
import Search from "./search";

export default function Navbar() {
    const { language } = useLanguage()

    return (
        <nav className={`h-[50px] flex text-md dark:bg-black/50 bg-default/75 justify-between fixed w-full z-100 items-center duration-500 flex transition-all backdrop-blur-sm lg:px-52 px-6 lg:gap-2 gap-1`}>
            <Search />
            <ThemeSwitch className="ml-auto hover:scale-[1.1]" />
            <LanguageSwitch />
            <a href="https://github.com/MaryanneKaffer" target="_blank" className="active:scale-[0.8] hover:scale-[1.1] transition-all"><GithubIcon className="text-white" /></a>
            <button className="bg-white hover:scale-[1.05] w-[100px] h-[28px] hover:brightness-125 cursor-pointer lg:text-[16px] text-sm hover:scale-[1.1] text-black duration-200 lg:block hidden">
                <p>{language === "pt" ? "Contato" : "Contact-me"}</p>
            </button>
        </nav>
    )
}