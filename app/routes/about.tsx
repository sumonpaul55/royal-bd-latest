import AboutUs from '~/pages/about/About'
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Royal bd || About us" },
        { name: "description", content: "Welcome to Royalbd!" },
    ];
}

export default function About() {
    return <div>
        <AboutUs />
    </div>
}

