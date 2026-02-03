import { useLanguage } from "@/context/languageContext"
import { FaReact } from "react-icons/fa";


export default function Cover() {
    const { language } = useLanguage()

    return (
        <section className="h-[100dvh] items-center justify-center gap-32 py-52 lg:w-full flex lg:relative overflow-hidden">
            <FaReact size={500} className="animate-spin [animation-duration:90s] text-blue-800 hover:brightness-150 transition-all" />
            <div className="text-center">
                <h1 className="sm:text-8xl text-6xl mb-3 bg-clip-text text-transparent bg-gradient-to-br from-blue-600 to-purple-800 hover:brightness-125 transition-all">{language === "pt" ? "Jornada Dev" : "Dev Journey"}</h1>
                <h2 className="lg:text-2xl text-xl lg:dark:text-white lg:text-black text-white">{language === "pt" ? "Documentando todos os meus projetos" : "Documenting all my projects"}</h2>
            </div>
        </section>
    )
}