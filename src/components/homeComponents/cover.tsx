import { useLanguage } from "@/context/languageContext"

export default function Cover() {
    const { language } = useLanguage()

    return (
        <section className="h-[100dvh] w-[100dvw] bg-black flex items-center md:relative">
            <img src="/coverImg.jpg" className="absolute top-0 left-0 md:-left-20 md:w-[70dvw] w-[100dvw] h-[100dvh] object-cover md:[mask-image:linear-gradient(to_right,black,transparent)]" />
            <div className="absolute md:top-1/2 md:right-[10%] right-[8%] -translate-y-1/2 z-10 text-center">
                <h1 className="md:text-8xl text-6xl text-white mb-3">{language === "pt" ? "Blog de Estudos" : "Study Blog"}</h1>
                <h2 className="text-2xl text-white">{language === "pt" ? "Documentando todos os meus aprendizados" : "Documenting all my learnings"}</h2>
            </div>
        </section>
    )
}