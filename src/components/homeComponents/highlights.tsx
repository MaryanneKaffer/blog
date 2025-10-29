import { useLanguage } from "@/context/languageContext";
import { PostsData } from "../post"

export default function Highlights() {
    const posts = PostsData
        .filter(post => post.highlighted)
        .sort((a, b) => (a.highlighted ?? 0) - (b.highlighted ?? 0));

    const best = posts[0];
    const side = posts.slice(1);

    const { language } = useLanguage()

    return (
        <section className="w-[100%] flex flex-col gap-7 lg:h-auto min-h-[190dvh]">
            <h1 className="lg:text-4xl text-3xl">{language === "en" ? "Best posts" : "Melhores posts"}</h1>
            <div className="flex lg:flex-row flex-col lg:gap-5 gap-3 w-[100%] h-[800px] relative">
                <div className="flex flex-col lg:h-auto h-[55%] lg:bg-transparent bg-default/45 relative group hover:scale-[1.008] transition-all hover:dark:bg-default/40 hover:bg-default/50 backdrop-blur-md gap-3 lg:p-5 p-3 relative lg:max-w-[30%]">
                    <img className="object-cover lg:h-[50%] h-[30%]" src={PostsData[0].squarePicture} />
                    <div className="flex h-fit cursor-pointer">
                        <span className="flex flex-col text-white">
                            <h1 className="lg:text-2xl text-xl dark:text-white text-black">{best[language].title}</h1>
                            <h2 className="text-sm leading-tight text-gray-500">{best.tags}</h2>
                            <p className="lg:text-md text-sm dark:text-white text-black lg:line-clamp-13 line-clamp-11">{best[language].resume}</p>
                        </span>
                    </div>
                </div>
                <div className="grid relative w-full h-full lg:grid-cols-3 grid-cols-2 lg:gap-5 gap-3">
                    {side.map((post, i) => (
                        <div key={i} className="cursor-pointer relative group hover:scale-[1.008] lg:bg-transparent bg-default/45 transition-all relative hover:dark:bg-default/40 hover:bg-default/50 backdrop-blur-md lg:p-5 p-2">
                            <img className="object-cover" src={post.fullPicture} />
                            <div className="w-full transition-all duration-400 flex flex-col h-full">
                                <h1 className="lg:text-xl text-md dark:text-white text-black">{post[language].title}</h1>
                                <h2 className="lg:text-sm text-[0.8rem] leading-tight text-gray-500 lg:mb-2 mb-1 text-black">{post.tags}</h2>
                                <p className="lg:text-sm text-[0.7rem] line-clamp-8">{post[language].resume}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}