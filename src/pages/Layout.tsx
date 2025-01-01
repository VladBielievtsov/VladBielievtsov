import { Link, Outlet } from "react-router";

export default function Layout() {
  return (
    <main className="">
      <header className="static top-0 z-10 h-14 bg-base max-w-3xl w-full mx-auto px-4">
        <div className="flex justify-between items-center h-full">
          <Link to={"/"} className="hover:text-mauve">
            ~/vlad.go
          </Link>
        </div>
      </header>
      <div className="max-w-3xl w-full mx-auto px-4 md:border border-mauve py-6 rounded">
        <Outlet />
      </div>
    </main>
  );
}
