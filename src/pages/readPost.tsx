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
                        className="fixed top-0 left-0 w-[100dvw] h-[100dvh] -z-10 dark:bg-default/50 bg-default"
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
                <div className={`w-full h-full min-h-[60dvh] ${post?.pictureBg && "dark:bg-black/85 backdrop-blur-lg bg-default/85"} dark:bg-black/95 bg-default p-8 flex gap-8`}>
                    {post ? (<>
                        <div className="flex flex-col gap-5">
                            <h1 className="text-center text-3xl">{post[language].title}</h1>
                            <div className="flex flex-col gap-5">
                                {post[language].content.map((content, i) => (
                                    <>{
                                        !content.includes("/postsPictures") ? <p key={i} className="indent-4 text-lg">{content}</p>
                                            :
                                            <img src={content} />
                                    }</>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 sticky top-[80px] left-0 h-52 border-l p-4 w-[30%]">
                            <a href={post.links?.preview} target="_blank" rel="noopener noreferrer">
                                {language === "pt" ? "Visitar" : "Visit"}
                            </a>
                            <a href={post.links?.github} target="_blank" rel="noopener noreferrer">
                                <button>Github</button>
                            </a>
                        </div>
                    </>)
                        : <h1 className="h-[80dvh]">This post doesn't exist...</h1>
                    }
                </div>
            </section>
        </DefaultLayout >
    )
}