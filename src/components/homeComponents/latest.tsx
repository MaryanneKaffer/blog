import { useLanguage } from "@/context/languageContext"
import { PostsData } from "@/posts/posts"
import ReadButton from "../readButton"

export default function Latest() {
    const latestPost = PostsData[0]
    const { language } = useLanguage()

    return (
        <section className="w-full flex flex-col gap-7 px-3 dark:bg-black/20 bg-default/40 backdrop-blur-md justify-center overflow-hidden">
            <h1 className="lg:text-4xl text-3xl bg-clip-text text-transparent bg-gradient-to-br from-blue-600 to-purple-800 hover:brightness-125 transition-all">{language === "en" ? "Latest post" : "Post mais recente"}</h1>
            <div className="flex lg:flex-row flex-col lg:bg-transparent bg-default/45 lg:gap-5 gap-2 lg:h-[50dvh] h-fit hover:scale-[1.005] hover:bg-default/45 transition-all p-3 group">
                <img src={latestPost.squarePicture} className="object-cover lg:h-full sm:h-[300px] h-[200px]" />
                <div className="flex flex-col w-full relative lg:h-full h-[58%] relative">
                    <h1 className="lg:text-2xl text-xl">{latestPost[language].title}</h1>
                    <h2 className="text-sm leading-tight text-gray-500 mb-3">{latestPost.tags}</h2>
                    <div className="overflow-hidden lg:h-[90%] h-[85%]">
                        {(latestPost[language].content).map((content) => (
                            <p className="lg:text-lg text-sm sm:line-clamp-5 line-clamp-3">{content}</p>
                        ))}
                    </div>
                    <span className="flex justify-between lg:mt-4 mt-2">
                        <h2 className="lg:text-md text-sm leading-tight text-gray-500">{latestPost.date}</h2>
                        <ReadButton id={latestPost.id} />
                    </span>
                </div>
            </div>
        </section>
    )
}