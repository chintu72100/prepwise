import Link from "next/link";
// import Image from "next/image";
import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { SquareArrowOutUpRight } from "lucide-react";

import { isAuthenticated } from "@/lib/actions/auth.action";

const Layout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");

  return (
    <div className="root-layout">
      <nav className="p-2 shadow-md flex justify-between items-center border-b-2 ">
        <Link href="/" className="flex items-center gap-2">
          {/* <Image src="/logo.svg" alt="MockMate Logo" width={38} height={32} /> */}
          <h2 className="text-primary-100 font-bold text-2xl"> <span className="text-purple-600">Mview</span>Sync </h2>
        </Link>
      <div className="flex gap-2">
      <span className="text-sm text-gray-500 italic">
          Powered by <span className="text-gray-300">EduSync</span> {" "}
        </span>
        <a href="#" className="text-blue-500">
          <SquareArrowOutUpRight />
        </a>
      </div>
      </nav>

      {children}
    </div>
  );
};

export default Layout;
