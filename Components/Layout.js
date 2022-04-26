import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <div className="main-layout">
      <div className="flex items-start justify-between">
        <button
          className="hover:font-semibold text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => router.push("/")}
        >
          {"<Home"}
        </button>
        <button className="hover:font-semibold text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Toto Wolf
        </button>
      </div>
      <main className="h-[47rem]">{children}</main>
    </div>
  );
}
