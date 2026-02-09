import { useLanguage } from "@/context/languageContext";
import DefaultLayout from "@/layouts/default";
import { PostsData } from "@/posts/posts"
import { useParams } from "react-router-dom";

export default function ReadPost() {
    const { id } = useParams();
    const post = PostsData.find((p) => p.id === Number(id));
    const { language } = useLanguage()

    return (
        <DefaultLayout>
            <section className="pt-62 pb-12">
                {post?.pictureBg ? (
                    <img
                        src={post?.fullPicture}
                        className={`w-[100dvw] h-[100dvh] fixed top-0 left-0 -z-10 object-cover ${post?.pictureBg && "blur-[4px]"
                            }`}
                    />
                ) : (
                    <div
                        className="fixed top-0 left-0 w-[100dvw] overflow-hidden h-full -z-10 dark:bg-default/50 bg-default"
                        style={{
                            WebkitMaskImage: `url(${post?.icon})`,
                            maskImage: `url(${post?.icon})`,
                            WebkitMaskRepeat: "repeat",
                            maskRepeat: "repeat",
                            WebkitMaskSize: "30px 30px",
                            maskSize: "30px 30px",
                        }}
                    />
                )}
                <div className={`w-full h-full ${post?.pictureBg && "dark:bg-black/85 backdrop-blur-lg bg-default/85"} dark:bg-black/95 bg-default p-8 flex gap-8`}>
                    {post ? (<>
                        <div className="flex flex-col gap-5 w-[80%]">
                            <h1 className="text-center text-3xl">{post[language].title}</h1>
                            <div className="flex flex-col gap-5">
                                {post.en?.post?.map((p: any, i: any) => (
                                    <div key={i} id={p.topic}>
                                        <h1 className="bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-purple-800 hover:brightness-125 transition-all text-2xl">{p.topic}</h1>
                                        {p.content.map((c: string, i: number) => (
                                            <span key={i}>
                                                {!c.includes("/postsPictures") ? <p className="indent-4 text-lg">{c}</p> : <img src={c} />}
                                            </span>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 sticky top-[80px] h-fit p-4 w-[20%] dark:bg-default/50 bg-white/30 z-10 relative">
                            <a href={post.links?.preview} target="_blank" className="px-4 py-1 text-white text-center dark:bg-purple-900 bg-purple-700 hover:brightness-125 transition-all">
                                {language === "pt" ? "Visitar site" : "Visit site"}
                            </a>
                            <a href={post.links?.github} target="_blank" className="bg-blue-600 text-white px-4 py-1 text-center dark:bg-blue-800 bg-blue-600 hover:brightness-125 transition-all">
                                Github
                            </a>
                            <div className="flex flex-col mt-2">
                                {post.en?.post?.map((p: any, i: any) => (
                                    <a key={i} className={`text-lg hover:brightness-125 transition-all dark:text-gray-300 text-gray-600 ${i !== 0 && "ml-4"}`} href={"#" + p.topic}> • {p.topic} </a>
                                ))}
                            </div>
                        </div>
                    </>)
                        : <h1>This post doesn't exist...</h1>
                    }
                </div>
            </section>
        </DefaultLayout >
    )
}