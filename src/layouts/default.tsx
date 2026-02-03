import { Link } from "@heroui/link";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col ">
      <AuroraBackground className="fixed top-0 left-0 w-[100dvw] h-[100dvh]" >
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
        </motion.div>
      </AuroraBackground>
      <Navbar />
      <main className="mx-auto w-full md:px-52 px-6 overflow-hidden dark:backdrop-blur-lg" id="top">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://github.com/MaryanneKaffer"
          title="Github"
        >
          <span className="text-default-600">Made by</span>
          <p className="text-secondary">Maryanne Käffer</p>
        </Link>
      </footer>
    </div>
  );
}
