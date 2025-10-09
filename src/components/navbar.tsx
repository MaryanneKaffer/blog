import { GithubIcon } from "./icons";
import { ThemeSwitch } from "./theme-switch";

export default function Navbar() {
    return (
        <nav className="h-[50px] bg-black/80 text-white flex justify-between items-center px-4 text-md fixed top-0 w-full">
            <div>
                <a href="#top" className="cursor-pointer">Home</a>
            </div>
            <div className="flex gap-2 items-center">
                <ThemeSwitch />
                <a href="https://github.com/MaryanneKaffer" target="_blank"><GithubIcon/></a>
                <button className="transition-all bg-secondary hover:brightness-125 hover:scale-[1.05] p-1 px-3 cursor-pointer rounded-lg">Contact-me</button>
            </div>
        </nav>
    )
}