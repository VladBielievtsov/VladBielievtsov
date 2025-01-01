import { Link } from "../components/Link";

export default function Home() {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold text-green mb-2">
          Hi There, I'm Vlad!
        </h1>
        <p>
          I'm 24 yo full-stack developer focused on frontend. I mostly spend my
          time with web development, with Nextjs, Tailwindcss, and Go on
          backend. I also dabble in other things, like discord bots. I'm also
          looking to learn Nix, and Rust in the future.
        </p>
        <p className="mt-2">
          In my spare time I enjoy playing video games, and watching anime
        </p>
      </div>
      <div className="pt-4">
        <h2 className="text-xl font-bold text-green my-2">Projects</h2>
        <ul>
          <li>
            <Link router={true} href="/museki">
              Museki
            </Link>
          </li>
        </ul>
      </div>
      <div className="pt-4">
        <h2 className="text-xl font-bold text-green my-2">Links</h2>
        <ul>
          <li>
            <Link href="mailto:hi@bvlad.com">email</Link>
          </li>
          <li>
            <Link href="https://github.com/VladBielievtsov">github</Link>
          </li>
          <li>
            <Link href="https://discord.com/users/416963547747188738">
              discord
            </Link>
          </li>
          {/* <li>
            <Link href="mailto:hi@bvlad.com">telegram</Link>
          </li> */}
        </ul>
      </div>
    </>
  );
}
