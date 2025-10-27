import { GithubIcon, SearchIcon } from "./icons";
import { ThemeSwitch } from "./theme-switch";
import LanguageSwitch from "./languageSwitch";
import { useLanguage } from "@/context/languageContext";
import { Input } from "@heroui/input";

export default function Navbar() {
    const { language } = useLanguage()

    return (
        <nav className={`h-[60px] flex text-md dark:bg-black/50 bg-default/75 justify-between fixed w-full z-100 items-center duration-500 flex transition-all backdrop-blur-sm px-16 gap-2`}>
            <Input className="w-[40%]"
                isClearable
                classNames={{
                    label: "text-black/50 dark:text-white/90",
                    input: [
                        "bg-transparent",
                        "text-black/90 dark:text-white/90",
                        "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                    ],
                    innerWrapper: "bg-transparent",
                    inputWrapper: [
                        "shadow-sm",
                        "bg-default-200/50",
                        "dark:bg-default/60",
                        "backdrop-blur-xl",
                        "backdrop-saturate-200",
                        "hover:bg-default-200/70",
                        "dark:hover:bg-default/70",
                        "group-data-[focus=true]:bg-default-200/50",
                        "dark:group-data-[focus=true]:bg-default/60",
                        "cursor-text!",
                    ],
                }}
                placeholder="Type to search..."
                radius="full"
                startContent={
                    <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none shrink-0" />
                }
            />
            <ThemeSwitch className="ml-auto hover:scale-[1.1]" />
            <LanguageSwitch />
            <a href="https://github.com/MaryanneKaffer" target="_blank" className="active:scale-[0.8] hover:scale-[1.1] transition-all"><GithubIcon className="text-white" /></a>
            <button className="bg-white hover:scale-[1.05] w-[100px] h-[28px] hover:brightness-125 cursor-pointer lg:text-[16px] text-sm hover:scale-[1.1] text-black duration-200">
                <p>{language === "pt" ? "Contato" : "Contact-me"}</p>
            </button>
        </nav>
    )
}