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
        <section className="h-[100dvh] w-full py-16">
            <div className="flex gap-8 w-full h-full py-12">
                <div className="flex relative w-full group hover:scale-[1.008] transition-all overflow-hidden">
                    <img className="absolute w-full h-full object-cover -z-10" src={PostsData[0].squarePicture} />
                    <div className="flex h-full bg-gradient-to-b from-transparent group-hover:bg-black/60 via-transparent to-black/75 transition-colors duration-400 p-5 cursor-pointer">
                        <span className="h-[35%] group-hover:h-[100%] flex flex-col gap-5 mt-auto transition-all duration-400 text-white">
                            <h1 className="text-3xl">{best[language].title}</h1>
                            <h1 className="text-xl group-hover:opacity-0 group-hover:hidden opacity-100 transition-all duration-400">{best[language].resume}</h1>
                            {(best[language].content).map((content) => (
                                <h1 className="text-xl group-hover:opacity-100 opacity-0 transition-all duration-600 line-clamp-9">{content}</h1>
                            ))}
                        </span>
                    </div>
                </div>
                <div className="grid relative w-full h-full grid-cols-2 gap-8">
                    {side.map((post, i) => (
                        <div key={i} className="cursor-pointer relative group hover:scale-[1.008] transition-all relative">
                            <img className="absolute w-full h-full object-cover -z-10" src={post.squarePicture} />
                            <div className="opacity-0 group-hover:opacity-100 bg-black/60 w-full transition-all duration-500 p-5 text-white flex flex-col h-full gap-3">
                                <h1 className="text-2xl">{post[language].title}</h1>
                                <h2 className="text-lg line-clamp-9">{post[language].resume}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}