import { useLanguage } from "@/context/languageContext"
import { PostsData } from "../post"
import { FaAngleDown } from "react-icons/fa";

export default function Latest() {
    const latestPost = PostsData[0]
    const { language } = useLanguage()

    return (
        <section className="w-full flex flex-col gap-7 justify-center overflow-hidden">
            <h1 className="lg:text-4xl text-3xl">{language === "en" ? "Latest post" : "Post mais recente"}</h1>
            <div className="flex lg:flex-row flex-col lg:bg-transparent bg-default/45 gap-5 lg:h-[60dvh] h-fit hover:scale-[1.005] hover:bg-default/45 transition-all duration-500 cursor-pointer p-3 group">
                <img src={latestPost.squarePicture} className="object-cover lg:h-full sm:h-[300px] h-[200px]" />
                <div className="flex flex-col w-full relative lg:h-full h-[58%] relative">
                    <h1 className="lg:text-2xl text-xl">{latestPost[language].title}</h1>
                    <h2 className="text-sm leading-tight text-gray-500 mb-3">{latestPost.tags}</h2>
                    <div className="overflow-hidden lg:h-[90%] h-[85%]">
                        {(latestPost[language].content).map((content) => (
                            <p className="lg:text-lg text-sm sm:line-clamp-5 line-clamp-3">{content}</p>
                        ))}
                    </div>
                    <span className="flex group-hover:text-white absolute bottom-0 lg:text-transparent w-full z-10 lg:h-42 h-32 bg-gradient-to-b from-transparent dark:to-black to-white lg:text-3xl text-4xl">
                        <FaAngleDown className="mx-auto mt-auto text-black dark:text-white" />
                    </span>
                </div>
            </div>
        </section>
    )
}