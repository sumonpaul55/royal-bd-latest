import type { Route } from "../+types/root";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Royal bd || Furnitures" },
    { name: "description", content: "Welcome to Royalbd!" },
  ];
}

export default function Home() {
  return <div>Home page</div>
}
