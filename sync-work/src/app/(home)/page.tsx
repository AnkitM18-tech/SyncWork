import Link from "next/link";
import { Navbar } from "./navbar";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="fixed top-0 right-0 left-0 z-10 h-16 bg-white p-4">
        <Navbar />
      </div>
      <div className="mt-16">
        Click
        <Link href="/documents/123" className=" text-blue-500 mx-2 underline">
          here
        </Link>
        to go to document id page.
      </div>
    </div>
  );
};

export default Home;
