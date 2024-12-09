import Link from "next/link";

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      Click
      <Link href="/documents/123" className=" text-blue-500 mx-2 underline">
        here
      </Link>
      to go to document id page.
    </div>
  );
};

export default Home;
