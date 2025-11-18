import { RouteData } from "../interfaces/routes.interface";

export enum AppRoutes {
    HOME = "",
    ERROR = "error",
    EXPERIENCE = "experience",
    EDUCATION = "education",
    PROJECTS = "projects",
    ACHIEVEMENTS = "achievements",
    ARTICLES = "articles",
    ABOUT = "about",
    // Your google form link
    CONTACT = "contact",
}

export const RoutesData: RouteData[] = [
    {
        routeLinkText: "Home",
        routeURLName: AppRoutes.HOME,
        isVisible: true,
    },
    {
        routeLinkText: "Projects",
        routeURLName: AppRoutes.PROJECTS,
        isVisible: true,
    },
    {
        routeLinkText: "Articles",
        routeURLName: AppRoutes.ARTICLES,
        isVisible: true,
    },
    {
        routeLinkText: "Staff",
        routeURLName: AppRoutes.ABOUT,
        isVisible: true,
    },
   
     {
        routeLinkText: "Contact",
        routeURLName: AppRoutes.CONTACT,
        isVisible: true,
        isExternalLink: false,
    },
    {
        routeLinkText: "Error",
        routeURLName: AppRoutes.ERROR,
        isVisible: false,
    }
]