import { useLanguage } from "@/context/languageContext"

export default function Cover() {
    const { language } = useLanguage()

    return (
        <section className="h-[100dvh] lg:w-full bg-black flex lg:relative rounded-xl overflow-hidden">
            <img src="/coverImg.jpg" className="absolute top-0 left-0 lg:w-[75dvw] w-[100dvw] h-[100dvh] object-cover lg:[mask-image:linear-gradient(to_right,black,transparent)]" />
            <div className="lg:absolute lg:top-1/2 lg:mt-0 sm:mt-[40dvh] mt-[25dvh] lg:right-[10%] lg:-translate-y-1/2 z-10 text-center mx-auto">
                <h1 className="sm:text-8xl text-7xl text-white mb-3">{language === "pt" ? "Blog de Estudos" : "Study Blog"}</h1>
                <h2 className="text-2xl text-white">{language === "pt" ? "Documentando todos os meus aprendizados" : "Documenting all my learnings"}</h2>
            </div>
        </section>
    )
}