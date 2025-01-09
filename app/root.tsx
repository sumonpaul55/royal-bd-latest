import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import stylesheet from "./app.css?url";
import { useState } from "react";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  { rel: "stylesheet", href: stylesheet },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return <>
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className={`fixed md:static md:w-1/5 bg-gray-800 text-white transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-50 md:translate-x-0 h-screen border-r`}>
        <div className="p-4">
          <h2 className="text-2xl font-bold border-b pb-3 border-slate-600">Dashboard</h2>
          <ul className="mt-6 space-y-2">
            <li>
              <Link to="/" className="block py-2 px-4 rounded hover:bg-gray-700 border-b border-slate-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="block py-2 px-4 rounded hover:bg-gray-700 border-b border-slate-500">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 md:ml-1/4 bg-gray-100">
        {/* Navbar for mobile */}
        <div className="bg-gray-800 text-white p-4 flex md:hidden">

          <div className="flex gap-2">
            <h1 className="text-lg font-bold">Dashboard</h1>
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className={`mr-4 focus:outline-none z-50 ${isSidebarOpen ? "ml-10" : ""}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="">
          <div className="bg-gray-800 py-3 text-white px-3 md:px-6">
            <h1 className="text-xl font-bold">Welcome to the Dashboard</h1>
          </div>
          <div className="p-3 md:p-5">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  </>;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
