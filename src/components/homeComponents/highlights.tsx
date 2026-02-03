import { useLanguage } from "@/context/languageContext";
import { PostsData } from "@/posts/posts"
import ReadButton from "../readButton";

export default function Highlights() {
    const posts = PostsData
        .filter(post => post.highlighted)
        .sort((a, b) => (a.highlighted ?? 0) - (b.highlighted ?? 0));

    const best = posts[0];
    const side = posts.slice(1);

    const { language } = useLanguage()

    return (
        <section className="flex flex-col gap-3 h-[100%] dark:bg-black/20 bg-default/40 backdrop-blur-md">
            <h1 className="lg:text-4xl text-3xl bg-clip-text text-transparent bg-gradient-to-br from-blue-600 to-purple-800 hover:brightness-125 transition-all">{language === "en" ? "Best posts" : "Melhores posts"}</h1>
            <div className="flex lg:flex-row flex-col gap-3 relative">
                <div className="flex flex-col lg:h-[75%] h-[55%] lg:bg-transparent bg-default/45 relative group hover:scale-[1.008] transition-all hover:dark:bg-default/50 hover:bg-default/50 backdrop-blur-md  lg:p-5 p-3 relative lg:max-w-[30%]">
                    <img className="object-cover " src={best.fullPicture} />
                    <span className="flex flex-col text-white">
                        <h1 className="lg:text-2xl text-xl dark:text-white text-black">{best[language].title}</h1>
                        <h2 className="lg:text-sm text-[0.6rem] leading-tight text-gray-500 mb-2">{best.tags}</h2>
                        <p className="lg:text-[16px] text-sm dark:text-white text-black whitespace-pre-line">{best[language].resume}</p>
                        <span className="flex justify-between lg:mt-4 mt-2">
                            <h2 className="lg:text-md text-sm leading-tight text-gray-500">{best.date}</h2>
                            <ReadButton id={best.id} />
                        </span>
                    </span>
                </div>
                <div className="grid relative w-full h-full lg:grid-cols-3 grid-cols-2 gap-3">
                    {side.map((post, i) => (
                        <div key={i} className="relative group hover:scale-[1.008] lg:bg-transparent bg-default/45 transition-all relative hover:dark:bg-default/50 hover:bg-default/50 backdrop-blur-md lg:p-5 p-2">
                            <img className="object-cover lg:h-[150px] w-full" src={post.fullPicture} />
                            <div className="w-full transition-all duration-400 flex flex-col h-full">
                                <h1 className="lg:text-lg text-md dark:text-white text-black">{post[language].title}</h1>
                                <h2 className="lg:text-sm text-[0.6rem] leading-tight text-gray-500 lg:mb-2 mb-1 text-black">{post.tags}</h2>
                                <p className="lg:text-sm text-[0.7rem] lg:line-clamp-4 line-clamp-11">{post[language].resume}</p>
                                <span className="flex justify-between lg:mt-4 mt-2">
                                    <h2 className="lg:text-sm text-[0.7rem] text-sm leading-tight text-gray-500">{post.date}</h2>
                                    <ReadButton id={post.id} />
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}