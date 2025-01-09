import AboutUs from '~/components/about/About'
import type { Route } from '../+types/root';

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

