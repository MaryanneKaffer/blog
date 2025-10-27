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
        <section className="w-[100%] flex flex-col gap-7 justify-center py-3">
            <h1 className="text-4xl">{language === "en" ? "Best posts" : "Melhores posts"}</h1>
            <div className="flex gap-5 w-[100%] h-[800px] relative">
                <div className="flex flex-col relative group hover:scale-[1.008] transition-all hover:dark:bg-default/40 hover:bg-default/50 backdrop-blur-md gap-3 p-5 relative max-w-[30%]">
                    <img className="object-cover h-[50%]" src={PostsData[0].squarePicture} />
                    <div className="flex h-full cursor-pointer">
                        <span className="flex flex-col text-white">
                            <h1 className="text-2xl dark:text-white text-black">{best[language].title}</h1>
                            <h2 className="text-sm leading-tight text-gray-500">{best.tags}</h2>
                            <p className="text-md dark:text-white text-black line-clamp-13">{best[language].resume}</p>
                        </span>
                    </div>
                </div>
                <div className="grid relative w-full h-full grid-cols-3 gap-5">
                    {side.map((post, i) => (
                        <div key={i} className="cursor-pointer relative group hover:scale-[1.008] transition-all relative hover:dark:bg-default/40 hover:bg-default/50 backdrop-blur-md p-5">
                            <img className="object-cover" src={post.fullPicture} />
                            <div className="w-full transition-all duration-400 flex flex-col h-full">
                                <h1 className="text-xl dark:text-white text-black">{post[language].title}</h1>
                                <h2 className="text-sm leading-tight text-gray-500 mb-2 text-black">{post.tags}</h2>
                                <p className="text-sm line-clamp-6">{post[language].resume}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}