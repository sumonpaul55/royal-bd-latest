import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/welcome.tsx"),
    route("login", "auth/login.tsx"),
    route("dashboard", "dashboard/dashboardHome.tsx", [
        route("about-us", "routes/about.tsx"),
        route("contact", "routes/contact.tsx")
    ]),

] satisfies RouteConfig;
