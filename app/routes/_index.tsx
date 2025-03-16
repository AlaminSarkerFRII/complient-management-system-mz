import type { MetaFunction, LinksFunction } from "@remix-run/node";
// eslint-disable-next-line import/no-unresolved
import stylesheet from "../tailwind.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <nav className="my-4">
        <ul className="flex gap-4">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/signup">Sign Up</a>
          </li>
        </ul>
      </nav>

      <div className="flex flex-col items-center gap-16">
        <h1 className="text-6xl font-bold text-center">
          Welcome to Tracking System!
        </h1>
      </div>
    </div>
  );
}
