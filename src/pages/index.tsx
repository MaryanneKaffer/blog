import Cover from "@/components/homeComponents/cover";
import Highlights from "@/components/homeComponents/highlights";
import Latest from "@/components/homeComponents/latest";
import Others from "@/components/homeComponents/others";
import DefaultLayout from "@/layouts/default";
import { motion } from "framer-motion";

export default function IndexPage() {
  const fadeUp = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 1, ease: "easeOut" },
  };

  const divider = <motion.div {...fadeUp} className="w-full h-[2px] bg-black dark:bg-white" />
  return (
    <DefaultLayout>
      <section className="h-full flex flex-col w-full lg:gap-18 gap-12">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
          <Cover />
        </motion.div>
        {divider}
        <motion.div {...fadeUp}>
          <Latest />
        </motion.div>
        {divider}
        <motion.div {...fadeUp}>
          <Highlights />
        </motion.div>
        {divider}
        <motion.div {...fadeUp}>
          <Others />
        </motion.div>
        {divider}
      </section>
    </DefaultLayout>
  );
}