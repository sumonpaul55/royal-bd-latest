import { Welcome } from "../welcome/welcome";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Royal bd || Furnitures" },
    { name: "description", content: "Welcome to Royalbd!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
