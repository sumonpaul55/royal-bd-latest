
import { Link } from "react-router";
import type { Route } from "../+types/root";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Royal bd || Welcome" },
        { name: "description", content: "Welcome to Royalbd!" },
    ];
}

export default function Welcome() {
    return <div className="h-screen w-screen bg-slate-200 flex items-center justify-center">
        <div>
            <h1 className="font-bold text-xl md:text-3xl lg:text-4xl">Welcome to RoyalBd</h1>
            <div className="mt-10 flex gap-5 items-center justify-center">
                <Link className="border px-4 py-1 border-white bg-slate-600 text-white rounded-md" to="/login">Login</Link>
                <Link className="border px-4 py-1 border-white bg-slate-600 text-white rounded-md" to="/dashboard">Dashboard</Link>
            </div>
        </div>
    </div>
}
