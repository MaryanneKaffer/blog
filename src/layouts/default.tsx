import { Link } from "@heroui/link";

import Navbar from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col ">
      <Navbar />
      <main className="mx-auto w-full md:px-16 px-6 overflow-x-hidden" id="top">
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
