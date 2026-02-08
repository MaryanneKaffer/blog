import { GithubIcon } from "./icons";
import { ThemeSwitch } from "./theme-switch";
import LanguageSwitch from "./languageSwitch";
import { useLanguage } from "@/context/languageContext";
import Search, { Post } from "./search";
import { FaCode } from "react-icons/fa6";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
    const { language } = useLanguage()
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<Post[]>([]);
    const navigate = useNavigate();

    const handleClick = (id: number) => {
        setQuery("")
        setResults([]);
        navigate(`/post/${id}`);
    };

    return (
        <nav className="flex flex-col h-fit w-full fixed top-0 left-0 z-50 lg:px-52 px-6 ">
            <div className={`h-[50px] flex text-md dark:bg-black/50 bg-default/75 justify-between w-full-mx-6 lg:-mx-52 z-50 items-center duration-500 flex transition-all lg:px-52 px-6 backdrop-blur-sm lg:gap-2 gap-1`}>
                <Search query={query} setQuery={setQuery} setResults={setResults} />
                <LanguageSwitch />
                <a href="https://new-portfolio-gamma-lime.vercel.app" target="_blank" className="active:scale-[0.8] hover:scale-[1.1] transition-all"><FaCode size={22} /></a>
                <ThemeSwitch className="hover:scale-[1.1]" />
                <a href="https://github.com/MaryanneKaffer" target="_blank" className="active:scale-[0.8] hover:scale-[1.1] transition-all"><GithubIcon size={22} /></a>
                <button className="bg-white w-[100px] h-[28px] hover:brightness-125 cursor-pointer lg:text-[16px] text-sm text-black duration-200 lg:block hidden">
                    {language === "pt" ? "Contato" : "Contact-me"}
                </button>
            </div>
            {query && (<motion.div initial={{ opacity: 0.0 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.2, ease: "easeInOut", }}
                className="lg:w-[40%] w-[80%] h-fit p-3 dark:bg-black/60 bg-default/60 transition-all backdrop-blur-md flex flex-col z-10 ">
                {results.length > 0 ? (results.map((post) => (
                    <button className="flex gap-2 transition-all hover:bg-default/40 p-2 text-left" onClick={() => handleClick(post.id)}>
                        <img src={post.fullPicture} className="lg:h-12 h-10 object-fit lg:w-22 w-18" />
                        <span className="flex flex-col">
                            <h1 className="lg:text-sm text-[0.8rem]">{post[language].title}</h1>
                            <h1 className="lg:text-sm text-[0.8rem] text-gray-500">{post.tags}</h1>
                        </span>
                    </button>
                )))
                    : results.length === 0 && <p>{language === "pt" ? "Nada encontrado..." : "Nothing found..."}</p>}
            </motion.div >)}
        </nav>
    )
}